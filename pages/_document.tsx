import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <title>todo App</title>
            <meta name="description" content="todo App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}