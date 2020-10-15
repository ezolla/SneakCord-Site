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
        <Background>
          <Content>
            <Hero>
              <Title>Over <Bold>20 commands<br />dedicated to sneaker reselling communities</Bold> on Discord</Title>
              <Button href="https://google.com" target="_blank">Invite to Discord</Button>
            </Hero>
          </Content>
        </Background>
      </main>
    </>
  )
}

const Background = styled.div`
  background: var(--color-purple-gradient);
  padding: 50px 0 100px;
  border-radius: 0 0 50px 50px;

  @media (max-width: var(--breakpoint-tablet)) {
    padding-top: 40px;
  }

  @media (max-width: var(--breakpoint-mobile)) {
    padding-top: 20px;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

const Hero = styled.div`
  text-align: center;
  width: 700px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 37.5px;
`

const Bold = styled.span`
  font-weight: 700;
`

const Button = styled.a`
  color: var(--color-white);
  text-decoration: none;
  background: var(--color-clear-2);
  padding: 20px 53px;
  border-radius: 10px;
  box-shadow: var(--style-shadow-1);
  transition: 0.3s;

  :hover {
    box-shadow: var(--style-shadow-2);
  }
`