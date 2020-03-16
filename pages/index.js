import SideState from '../components/SideStat';
import Country from '../components/Country';
import { createGlobalStyle } from 'styled-components';
import Logo from '../components/Logo';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
html {
  font-family: 'Quicksand', sans-serif;
    body {
        height: 100vh;
        display: grid;
        justify-content: center;
        align-items: center;
        background: linear-gradient(225deg,#006550,#071700);
        color: #eaeaea;
    }
}
*, *:after, *:before {
    margin: 0;
    padding: 0
}
section {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 70px auto 70px;
    grid-gap: 1em;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1340px;
    height: calc(100vh - 180px);
    width: calc(100vw - 400px);
    background: #307e57;
    position: relative;
    .para {
        padding: 2em;
        text-align: center;
        font-size: 12px;
        grid-row: 2;
        grid-column: 1 / 2;
    }
    .tips {
      grid-row: 3;
      grid-column: 1 / 4;
      font-size: 12px;
      text-align: center;
      padding: 2em;
    }
    header {
      grid-column: 1 / 4;
      grid-row: 1;
      justify-self: center;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        fill: #eaeaea;
      }
      span {
        font-size: 2em;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 80px);
      width: calc(100vw - 30px);
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          fill: #eaeaea;
        }
      }
      .para {
        grid-column: 1;
        grid-row: 1 / 2;
        text-align: center;
      }
      > div {
        grid-column: 1;
        grid-row: 2 / 3;
        width: calc(100% - 90px);
        background: #307e57;
        box-shadow: 20px 20px 60px #296b4a, -20px -20px 60px #379164;
      }
      div + div {
        grid-column: 1;
        grid-row: 3 / 4;
      }
    }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
      font-size: 10px;
      a {
        text-decoration: none;
        color: #eaeaea;
      }
  }
} 
`;

export default function IndexPage() {
  return (
    <>
      <GlobalStyle />
      <section>
        <header>
          <Logo />
          <span>COVID-19</span>
        </header>
        <p className='para'>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          new virus that had not been previously identified in humans.
        </p>
        <Country />
        <SideState url='https://covid19.mathdro.id/api' />
        <p className='tips'>
          Wash your hands frequently ● Maintain social distance ● Avoid touching
          eyes, nose and mouth ● If you have fever, cough and difficulty
          breathing, seek medical care early ● Cover coughs and sneezes ● Stay
          home if you’re sick
        </p>
      </section>
      <footer>
        <span>
          <a
            href='https://github.com/rajanmagar/covid19'
            target='_blank'
            rel='noopener noreferrer'
          >
            👐 Contribute
          </a>
        </span>
        <span>made with virus @2020</span>
        <span>
          <a
            href='http://https://www.buymeacoffee.com/kUHJuif'
            target='_blank'
            rel='noopener noreferrer'
          >
            ☕ Buy me a coffe
          </a>
        </span>
      </footer>
    </>
  );
}
