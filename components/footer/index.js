import React from 'react'
import Link from 'next/link'

const footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold margin-botom'>
                Desenvolvido por Airton Diniz
                <div className='mt-5'>
                    <img className='inline p-5' src='/ps.png' />
                    <img className='inline p-5' src='/snes.png' />
                </div>
            </div>
        </div>
    )
}
export default footer

