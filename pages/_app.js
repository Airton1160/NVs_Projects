import React from 'react'
import Layout from '../components/Layouts'
import '../css/styles.css'


const Myapp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default Myapp

