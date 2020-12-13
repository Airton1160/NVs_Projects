import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PageTitle from '../components/pagetitle'

const sobre = () => {
    return (
        <div>
            <div>
                <PageTitle title='Sobre' />
                <h1>Sobre</h1>
                <Link href='/'>
                    <a>Voltar</a>
                </Link>
            </div>
        </div>
    )
}
export default sobre