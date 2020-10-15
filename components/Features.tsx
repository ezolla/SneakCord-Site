import styled from 'styled-components'

export default function Features() {
  return (
    <FeaturesComponent>
      <Feature>
        <img src="/free.svg" alt="Free" />
        <div>
          <h2>Free</h2>
          <p>Supporting is appreciated but not forced</p>
        </div>
      </Feature>
      <Pike />
      <Feature>
        <img src="/hosted.svg" alt="Hosting" />
        <div>
          <h2>Hosted</h2>
          <p>Don’t worry about servers and runtime errors</p>
        </div>
      </Feature>
      <Pike />
      <Feature>
        <img src="/open-sourced.svg" alt="Open Sourced" />
        <div>
          <h2>Open Sourced</h2>
          <p>Contribute or take in your own development direction</p>       
        </div>
      </Feature>
    </FeaturesComponent>
  )
}

const FeaturesComponent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 180px;
`

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 261px;

  div {
    margin-left: 25px;

    h2 {
      color: var(--color-white);
      margin: 0;
      font-size: 17px;
      font-weight: 600;
    }

    p {
      color: var(--color-clear-1);
      margin: 4px 0 0 0;
      font-size: 15px;
    }
  }
`

const Pike = styled.div`
  border-left: 1.5px solid var(--color-clear-1);
  height: 60px;
`