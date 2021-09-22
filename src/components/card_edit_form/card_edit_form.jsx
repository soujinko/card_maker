import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const onSubmit = () => {
        
    }
    return(
        <form action="">
            <input type="text" name='name' value={name} />
            <input type="text" name='company' value={company} />
            <select name="theme" value={theme} >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input type="text" name='title' value={title} />
            <input type="text" name='email' value={email} />
            <textarea name="message" value={message}></textarea>
            <Button name='delete' onClick={onSubmit}/>
        </form>
    )
}

export default CardEditForm;