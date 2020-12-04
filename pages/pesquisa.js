import React from 'react'
import Link from 'next/link'

const pesquisa = () => {
    return (
        <div>
            <div><h1>Pesquisa</h1>
                <Link href='/'>
                    <a>Voltar</a>
                </Link>
            </div>
        </div>
    )
}
export default pesquisa