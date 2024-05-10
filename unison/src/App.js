import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppHeader from './components/header'; 
import AppMenu from './components/menu';
import AppCarousel from './components/carousel';
import AppBuyNow from './components/buynow';
import AppArticle from './components/article';
import AppAdvantages from './components/advantages';
import AppNews from './components/news';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader/>
        <AppMenu/>
      </header>
      <section>
        <AppCarousel/>
        <AppBuyNow/>
      </section>
      <article id='article'>
        <AppArticle/>
        <br/>
        <br/>
        <br/>
        <h1 className='sectiontitle'>უპირატესობები</h1>       
        <AppAdvantages/>
        <br/>
        <br/>
        <h1 className='sectiontitle'>სიახლეები</h1>
        <br/>
        <AppNews/>
        <br/>
        <br/>
        <p className='more'>ყველა სიახლე <svg fill="#707070" height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 55.752 55.752">
          <g>
            <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001
              c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58
              s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912
              C44.605,26.413,44.086,24.993,43.006,23.916z"/>
          </g>
          </svg></p>
          <br/>
      </article>
      <footer>
        <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
