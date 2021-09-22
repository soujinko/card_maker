import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card}) => {

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const onSubmit = () => {
    }
    return(
        <form className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name='name' value={name} />
            <input ref={companyRef} className={styles.input} type="text" name='company' value={company} />
            <select ref={themeRef} className={styles.select} name="theme" value={theme} >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name='title' value={title} />
            <input ref={emailRef} className={styles.input} type="text" name='email' value={email} />
            <textarea ref={messageRef} className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
            <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    )
}

export default CardEditForm;