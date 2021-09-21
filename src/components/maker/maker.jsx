import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useHistory } from 'react-router-dom';

const Maker = ({authService}) => {
    const history = useHistory();
    const onLogout = () => {
        console.log('logouT')
        authService.logout();
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        });
    });
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <Footer authService={authService}/>
        </section>
    )
}

export default Maker;