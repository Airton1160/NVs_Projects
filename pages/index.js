import React from 'next'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <p className='mt-12 text-center '> O cliente busca atender melhor seus clientes <br />
                                               Por isso estamos sempre abertos a ouvir a sua opnião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' >Dar sua opnião ou sugestão</a>
                </Link>
            </div>
            <p className='text-center my-12'>
                Mensagem do desconto.
            </p>
        </div>
    )
}
export default index