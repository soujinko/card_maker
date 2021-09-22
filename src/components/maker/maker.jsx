import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'sujin',
            company: 'canverse',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'sujin@naver.com',
            message: 'go for it',
            fileName: 'sujin',
            fileURL: null
        },
        {
            id: '2',
            name: 'sujin',
            company: 'canverse',
            theme: 'light',
            title: 'Software Engineer',
            email: 'sujin@naver.com',
            message: 'go for it',
            fileName: 'sujin',
            fileURL: null
        },
        {
            id: '3',
            name: 'sujin',
            company: 'canverse',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'sujin@naver.com',
            message: 'go for it',
            fileName: 'sujin',
            fileURL: 'sujin.png'
        },
    ])
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
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>

            </div>
            <Footer authService={authService}/>
        </section>
    )
}

export default Maker;