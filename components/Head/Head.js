import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description }) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title || ''}</title>
        <meta name="description" content={description || ''} />
        
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&family=Barlow:wght@400;600&display=swap" rel="stylesheet" />
    </NextHead>
)

export default Head