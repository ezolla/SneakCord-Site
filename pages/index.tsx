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
              <Title>Over <Bold>20 commands<br />dedicated to sneaker reselling communities</Bold> on Discord</Title>
              <Button href="https://google.com" target="_blank">Invite to Discord</Button>
            </Hero>

            {/* Features */}
            <Features />
          </Content>
        </Background>

        {/* Logo Marquee */}
        <LogoMarquee>
          <div className="strip-1">
            <img src="/shopify.png" alt="Shopify" />
            <img src="/stadiumgoods.png" alt="Stadium Goods" />
            <img src="/supreme.png" alt="Supreme" />
            <img src="/flightclub.png" alt="Flight Club" />
            <img src="/funko.png" alt="Funko" />
            <img src="/stockx.png" alt="StockX" />
            <img src="/ebay.png" alt="eBay" />
            <img src="/goat.png" alt="Goat" />
          </div>
          <div className="strip-2"> 
            <img src="/shopify.png" alt="Shopify" />
            <img src="/stadiumgoods.png" alt="Stadium Goods" />
            <img src="/supreme.png" alt="Supreme" />
            <img src="/flightclub.png" alt="Flight Club" />
            <img src="/funko.png" alt="Funko" />
            <img src="/stockx.png" alt="StockX" />
            <img src="/ebay.png" alt="eBay" />
            <img src="/goat.png" alt="Goat" />
          </div>
        </LogoMarquee>
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
  margin: 100px auto 0;
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
  max-width: 100%;
  margin: 50px auto 0;
  position: inline-block;
  overflow-x: visible;
  white-space: nowrap;
  animation: 25s linear infinite marquee;

  div {
    display: inline-block;

    img {
      display:inline-block;
      margin-right: 60px;
      vertical-align: middle;
    }
  }

  .strip-1 {
    /* border: 1px solid blue; */
  }

  .strip-2 {
    /* border: 1px solid green; */
  }

  @keyframes marquee {
    0% { transform: translate3d(0px, 0px, 0px); }
    100% { transform: translate3d(-110%, 0px, 0px); }
  }
`