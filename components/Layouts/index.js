import React from 'react'
import Link from 'next/link'
import Header from '../Header/index'
import Footer from '../footer/index'


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto'>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout