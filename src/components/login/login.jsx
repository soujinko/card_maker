import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        })
    }
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }
    // 상태값이 변할때 유저 정보가 있다면 maker 페이지로 이동
    useEffect(() => {
        authService.onAuthChange(user => {
            
        })
    })
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login;