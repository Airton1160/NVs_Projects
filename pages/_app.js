import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/footer'

const Myapp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
export default Myapp

