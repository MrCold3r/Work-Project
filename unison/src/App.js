import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppHeader from './components/header'; 
import AppMenu from './components/menu';
import AppCarousel from './components/carousel';


function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
        <AppMenu />
      </header>
      <section>
        <AppCarousel />
      </section>
    </div>
  );
}

export default App;
