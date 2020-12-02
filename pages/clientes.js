import React from 'react'
import Link from 'next/link'

const clientes = () => {
    return (
        <div>
            <div><h1>Clientes Satisfeitos</h1>
                <Link href='/'>
                    <a>Voltar</a>
                </Link>
            </div>
        </div>
    )
}
export default clientes