import SideState from '../components/SideStat';
import Country from '../components/Country';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0
}
section {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 20px;
    grid-gap: 2em;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 180px);
    width: calc(100vw - 400px);
    background: linear-gradient(225deg, #046407, #045406);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: relative;
    .para {
        padding: 1em;
        font-size: 12px;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 20px;
      grid-gap: 1em;
      height: calc(100vh - 80px);
      width: calc(100vw - 30px);
      .para {
        grid-column: 1;
        grid-row: 1 / 2;
        text-align: center;
      }
      div {
        grid-column: 1;
        grid-row: 2 / 3;
        width: calc(100% - 90px);
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
        <p className='para'>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          new virus that had not been previously identified in humans.
        </p>
        <Country />
        <SideState url='https://covid19.mathdro.id/api' />
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
