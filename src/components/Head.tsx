import Head from 'next/head'

interface HeaderProps {
  title: string
  description: string
}

export function HeadComponent({ title, description }: HeaderProps) {
  const faviconPath = 'favicon.ico'

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' sizes='32x32' href={faviconPath} />
      <link rel='shortcut icon' sizes='32x32' href={faviconPath} />
      <meta property='og:image' content={faviconPath}/>
      <meta name='description' content={description} />
      <meta name='keywords' content='Kaique, Kaique Freitas, Kaique Freitas Dev' />
      <meta name='author' content='Kaique Freitas' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}
