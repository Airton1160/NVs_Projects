import React from 'next'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pagetitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const index = () => {
    const { data, error } = useSWR('api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Home' />
            <p className='mt-12 text-center '> O cliente busca atender melhor seus clientes <br />
                                               Por isso estamos sempre abertos a ouvir a sua opnião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' >Dar sua opnião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>LoaDing...</p>}
            {!error && data && data.showCupom &&
                <p className='text-center my-12'>
                    {data.message}
                </p>
            }
        </div>
    )
}
export default index