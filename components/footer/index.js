import React from 'react'
import Link from 'next/link'

const footer = () => {
    return (
        <div className='bg-gray-600 p-4'>
            <div className='container mx-auto text-center font-bold margin-botom'>
                Desenvolvido por Airton Diniz
                <a className='hover:underline' href='https://www.google.com.br'>Airton</a> * {' '}
                <img className='height: 0' src='/log1.jpg' />
                <img src='/flooop.png' />
            </div>
        </div>
    )
}
export default footer

