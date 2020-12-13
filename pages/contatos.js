import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PageTitle from '../components/pagetitle'

const contatos = () => {
    return (
        <div>
            <div>
                <PageTitle title='Contatos' />
                <div className=' container mx-auto'>
                    <h1>Contatos</h1>
                    <Link href='/'>
                        <a>Voltar</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default contatos