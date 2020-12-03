import React from 'next'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Link href="/sobre">
                    <a>sobre / </a>
                </Link>
                <Link href="/contatos">
                    <a>contatos / </a>
                </Link>
                <Link href="/pesquisa">
                    <a>pesquisa / </a>
                </Link>
            </div>
        </div>
    )
}
export default index