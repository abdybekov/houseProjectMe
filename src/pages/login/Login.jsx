import React from 'react';
import css from './Login.module.css'

const Login = () => {
    return (
        <>
            <div>
                <h3 className={css.toComeIn}>Войти</h3>
            </div>
            <div className={css.form} >
                <form action="">
                    <fieldset>
                        <label htmlFor="">
                            Login <br />
                            <input className={css.inputLogin} type="text" placeholder='Isabell' />
                        </label>
                        <div className={css.labelPass}>
                            <label htmlFor="">
                                password <br />
                                <input className={css.password} type="password" placeholder='**********' />
                            </label>
                        </div>
                        <div className={css.submits}>
                            <input className={css.firstSubmit} type="submit" value="Close" />
                            <input className={css.secondSubmit} type="submit" value="Войти" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default Login;
