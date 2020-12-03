import React from 'react'
import styles from './styles.module.css'

const header = () => {
    return (
        <div className={styles.wrapper}>
            <div className='container mx-auto'>
                <img className='mx-auto' src='/logo_palpitebox.png' alt='Palpite box' />
            </div>
        </div>
    )
}
export default header