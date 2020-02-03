import { takeLatest, put, call, all, race, delay } from 'redux-saga/effects';

import api from '../../../services/api';

import {
    signInSuccess,
    signFailure,
    restoreAccountSuccess,
    signUpSuccess,
} from './actions';

export function* signIn({ payload }) {
    try {
        const { username, password } = payload;

        const { response } = yield race({
            response: call(api.post, 'session', {
                username,
                password,
            }),
            timeout: delay(10000),
        });

        if (!response) throw { errorMessage: 'TIMEOUT_ERROR' };

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
    } catch (error) {
        let errorMessage;

        if (error.response) {
            errorMessage = JSON.parse(error.response.request._response).error;
        }

        if (!errorMessage) {
            errorMessage = 'Tempo de requisição ao servidor foi excedido!';
        }

        yield put(signFailure(errorMessage));
    }
}

export function* signUp({ payload }) {
    try {
        const { username, email, password, personality } = payload;

        const { response } = yield race({
            response: call(api.post, 'users', {
                username,
                email,
                password,
                personality,
            }),
            timeout: delay(10000),
        });

        if (!response) throw { errorMessage: 'TIMEOUT_ERROR' };

        yield put(signUpSuccess());
    } catch (error) {
        let errorMessage;

        if (error.response) {
            errorMessage = JSON.parse(error.response.request._response).error;
        }

        if (!errorMessage) {
            errorMessage = 'Tempo de requisição ao servidor foi excedido!';
        }

        yield put(signFailure(errorMessage));
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function* restoreAccount({ payload }) {
    try {
        const { username, email } = payload;

        const { response } = yield race({
            response: yield call(api.put, 'restore', {
                username,
                email,
            }),
            timeout: delay(10000),
        });

        if (!response) throw { errorMessage: 'TIMEOUT_ERROR' };

        yield put(restoreAccountSuccess());
    } catch (error) {
        let errorMessage;

        if (error.response) {
            errorMessage = JSON.parse(error.response.request._response).error;
        }

        if (!errorMessage) {
            errorMessage = 'Tempo de requisição ao servidor foi excedido!';
        }

        yield put(signFailure(errorMessage));
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/RESTORE_ACCOUNT_REQUEST', restoreAccount),
]);
