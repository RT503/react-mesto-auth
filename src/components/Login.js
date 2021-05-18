import React from 'react'
import AuthForm from './AuthForm';

function Login(props){

    useEffect(() => {
        props.setHeaderNavLinkData('/signup', 'Регистрация');

        return () => {
            props.setHeaderNavLinkData('/', '');
        }
    }, [props]);
    return (
        <div className="auth">
            <h2 className="form__title">{props.title}</h2>
            <AuthForm
            className="form"
            name="login"
            onSubmit={props.onSubmit}
            title="Авторизация"
            buttonName="Войти"
            />
        </div>
    )
}

export default Login;