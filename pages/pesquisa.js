import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PageTitle from '../components/pagetitle'

const pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {
        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div>
            <PageTitle title='Pesquisa' />
            <div>
                <h1 className='text-center my-4 font-bold text-2xl'>Críticas e Sugestões</h1>
                <div>
                    <p className='text-center mb-6'>
                        O cliente busca atender melhor seus clientes <br />
                        Por isso estamos sempre abertos a ouvir a sua opnião.
                    </p>
                </div>
                {!sucess && <div className='w-1/5 mx-auto '>
                    <label className='font-bold'>Digite seu Nome:</label>
                    <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                    <label className='font-bold'>Digite seu E-mail:</label>
                    <input type='text' className='p-4 block shadow bg-yellow-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className='font-bold'>Digite seu Whatsapp:</label>
                    <input type='text' className='p-4 block shadow bg-red-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                    <label className='font-bold'>Notas:</label>
                    <div className='flex py-6'>
                        {notas.map(nota => {
                            return (<label className='block w-1/6 text-center'>
                                {nota} <br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                            </label>)
                        })
                        }
                    </div>
                    <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                </div>}
                {sucess && <div className='w-1/5 mx-auto'>
                    <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 font-bold text-center text-blue-900 px-4 py-3'>Obrigado por contribuir com sua sugestão</p>
                    {
                        retorno.showCupom && <div className='border p-4 text-center mb-4 text-2xl' >
                            Seu Cupom é: <br />
                            <span className='font-bold' >{retorno.Cupom}</span>
                        </div>
                    }
                    {
                        retorno.showCupom && <div className='text-center border p-4 mb-4' >
                            <span className='font-bold block mb-2'>{retorno.Promo}</span>
                            <br />
                            <span className='italic' >Tire uma foto desta tela e apresente ao Garçon.</span>
                        </div>
                    }
                </div>}
            </div>
        </div>
    )
}
export default pesquisa