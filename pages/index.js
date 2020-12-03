import React from 'next'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='bg-green-200 p-4'>
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
        </div>
    )
}
export default index