import React from 'next'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <div>
                <Link href="/sobre">
                    <a>sobre</a>
                </Link>
                <Link href="/contato">
                    <a>contats</a>
                </Link>
            </div>
        </div>
    )
}
export default index