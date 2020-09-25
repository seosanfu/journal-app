import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Formulario correcto');
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('name is required');
            return false;
        } else if (!validator.isEmail(email)) {
            console.log('email is required');
            return false;
        } else if (password !== password2 || (password <= 5 || password2 <= 5)) {
            console.log('password not valid');
            return false;
        }
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <div className="auth__alert-error">
                Error
            </div>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={name} onChange={handleInputChange} />
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} />
                <input type="password" placeholder="Password" name="password" className="auth__input" value={password} onChange={handleInputChange} />
                <input type="password" placeholder="Confirm" name="password2" className="auth__input" value={password2} onChange={handleInputChange} />
                <button className="btn btn-primary btn-block" type="submit" disabled={false}>
                    Register
                </button>
                <hr />
                <Link className="link mt-5" to="/auth/login">
                    Already register?
                </Link>
            </form>
        </>
    );
};
