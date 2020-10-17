import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Features from '../components/Features'

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
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero>
              <Title>Over <Bold>20 commands dedicated to sneaker reselling communities</Bold> on Discord</Title>
              <Button href="https://google.com" target="_blank">Invite to Discord</Button>
            </Hero>

            {/* Features */}
            <Features />
          </Content>
        </Background>

        {/* Logo Marquee */}
        <LogoMarquee>
          <LogoWrapper>
            <LogoContainer>
              <Logo><img src="/shopify.png" alt="Shopify" /></Logo>
              <Logo><img src="/stadiumgoods.png" alt="Stadium Goods" /></Logo>
              <Logo><img src="/supreme.png" alt="Supreme" /></Logo>
              <Logo><img src="/flightclub.png" alt="Flight Club" /></Logo>
              <Logo><img src="/funko.png" alt="Funko" /></Logo>
              <Logo><img src="/stockx.png" alt="StockX" /></Logo>
              <Logo><img src="/ebay.png" alt="eBay" /></Logo>
              <Logo><img src="/goat.png" alt="Goat" /></Logo>
            </LogoContainer>
            <LogoContainer>
              <Logo><img src="/shopify.png" alt="Shopify" /></Logo>
              <Logo><img src="/stadiumgoods.png" alt="Stadium Goods" /></Logo>
              <Logo><img src="/supreme.png" alt="Supreme" /></Logo>
              <Logo><img src="/flightclub.png" alt="Flight Club" /></Logo>
              <Logo><img src="/funko.png" alt="Funko" /></Logo>
              <Logo><img src="/stockx.png" alt="StockX" /></Logo>
              <Logo><img src="/ebay.png" alt="eBay" /></Logo>
              <Logo><img src="/goat.png" alt="Goat" /></Logo>
            </LogoContainer>
          </LogoWrapper>
        </LogoMarquee>
      </main>
    </>
  )
}

const Background = styled.div`
  background: var(--color-purple-gradient);
  padding: 50px 0 100px;
  border-radius: 0 0 50px 50px;

  @media (max-width: 920px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media (max-width: 620px) {
    padding-top: 20px;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

const Hero = styled.div`
  text-align: center;
  width: 690px;
  margin: 100px auto 0;

  @media (max-width: 730px) {
    width: calc(100% - 30px);
    margin-top: 60px;
  }
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
  background: var(--color-clear-1);
  padding: 20px 53px;
  border-radius: 10px;
  box-shadow: var(--style-shadow-1);
  transition: 0.3s;

  :hover {
    box-shadow: var(--style-shadow-2);
  }
`

const LogoMarquee = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 50px 0;
`

const LogoWrapper = styled.div`
  display: flex;
  animation: marquee 20s linear infinite;

  @keyframes marquee {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
`

const LogoContainer = styled.div`
  display: inline-block;
`

const Logo = styled.div`
  margin-right: 75px;
  opacity: 0.25;
  transition: opacity 0.2s ease;
  display: inline-block;
  vertical-align: middle;

  :hover {
    opacity: 1;
  }
`