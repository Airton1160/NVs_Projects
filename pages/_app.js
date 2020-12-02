import React from 'react'

import '../css/styles.css'

const Myapp = ({ Component, pageProps }) => {
    return (
        <div>
            <h1>Pagina Dinamica</h1>
            <Component {...pageProps} />
        </div>
    )
}
export default Myapp