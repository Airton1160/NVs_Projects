import React from 'react'
import Link from 'next/link'
import '../css/styles.css'
const myapp = (Component, pageProps }) => {
    return (
        <div>
            <h1>PG Dinamica</h1>
            <Component {...pageProps} />
        </div>
    )
}
export default myapp