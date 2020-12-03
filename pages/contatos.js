import React from 'react'
import Link from 'next/link'

const contatos = () => {
    return (
        <div>
            <div><div className=' container mx-auto'>
                <h1>Airton diniz</h1>
                <p>Voce esta em Contatos</p>
                <Link href='/'>
                    <a>Voltar</a>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default contatos