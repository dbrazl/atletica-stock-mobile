import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
    username: Yup.string().required('Informe o usuário!'),
    password: Yup.string()
        .min(6, 'A senha precisa ter pelo menos 6 caracteres.')
        .required('Informe a senha!'),
});

export const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Informe o usuário!'),
    email: Yup.string()
        .email('Informe um e-mail válido!')
        .required('Informe o e-mail!'),
    password: Yup.string()
        .min(6, 'A senha precisa ter pelo menos 6 caracteres.')
        .required('Informe a senha!'),
});
