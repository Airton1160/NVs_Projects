import React from 'react'
import Link from 'next/link'

const contatos = () => {
    return (
        <div>
            <div><div className=' container mx-auto'>
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