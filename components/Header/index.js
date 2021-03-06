import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <a><img className='mx-auto' src='/logo_palpitebox.png' alt='Palpite box' /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link href='/sobre'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href="/contatos">
                    <a className='px-2 hover:underline'>contatos</a>
                </Link>
                <Link href="/pesquisa">
                    <a className='px-2 hover:underline'>pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default header