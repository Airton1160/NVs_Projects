import React from 'react'
import Link from 'next/link'

const pesquisa = () => {
    return (
        <div>
            <div>
                <h1 className='text-center my-4 font-bold text-2xl'>Críticas e Sugestões</h1>
                <div>
                    <p className='text-center mb-6'>
                        O cliente busca atender melhor seus clientes <br />
                        Por isso estamos sempre abertos a ouvir a sua opnião.
                    </p>
                </div>
                <div className='w-1/5 mx-auto '>
                    <label className='font-bold'>Digite seu Nome:</label>
                    <input type='text' className='p-4 block shadow bg-blue-200 m-2 rounded' />
                </div>
            </div>
        </div>
    )
}
export default pesquisa