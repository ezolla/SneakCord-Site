import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-grey: C0C0C0;
    --color-clear-1: rgba(255, 255, 255, 0.3);
    --color-clear-2: rgba(255, 255, 255, 0.5);
    --color-purple-gradient: linear-gradient(to top right, #3C096C, #5A189A, #7B2CBF, #9D4EDD);
    --style-blur: blur(40px);
    --style-shadow-1: 0px 10px 20px rgba(0, 0, 0, 0.25);
    --style-shadow-2: 0px 20px 40px rgba(0, 0, 0, 0.25);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h1 {
    color: var(--color-white);
    font-size: 50px;
    font-weight: 300;
    margin: 0;

    @media (max-width: 620px) {
      font-size: 30px;
    }
  }
`

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
