import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1':  {
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
        '2': {
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
        '3':   {
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
    })
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

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        })
    }
    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        })
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>

            </div>
            <Footer authService={authService}/>
        </section>
    )
}

export default Maker;