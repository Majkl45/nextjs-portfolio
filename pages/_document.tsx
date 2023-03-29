import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Michael Rohm - Junior FrontEnd Developer, programador, web, websites, developer,frontend, front-end, HTML, CSS, JavaScript, ReactJS, NextJS, website, portfolio"
        />
        <meta
          name="description"
          content="Michael Rohm - Junior Front-end developer"
        />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <meta name="author" content="Michael Rohm" />
        <meta name="creator" content="Michael Rohm" />
        <meta name="copyright" content="© 2023 Michael Rohm" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
