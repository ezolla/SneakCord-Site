import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>SneakCord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>SneakCord</Title>
      </main>
    </>
  )
}

const Title = styled.h1`
  color: purple;
`