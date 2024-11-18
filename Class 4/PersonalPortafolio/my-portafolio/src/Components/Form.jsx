import styles from './Form.module.css'

export function Form({})
{
    return (
        <div 
            className={styles["form-container"]}
        >
        <h1>Contact us</h1>
        <h2> fill the imformation w</h2>
        <label>name</label>
        <input type = "text"></input>
        <label>Email</label>
        <input type = "text"></input>
        <label>Message</label>
        <input type = "text"></input>
        <button
        className={styles['button']}
        >submit</button>
        </div>
        
    )
}