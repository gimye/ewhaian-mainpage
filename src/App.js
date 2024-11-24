import Header from './components/header/Header';
import './App.css';
import Login from './components/login/Login';
import Banner from './components/banner/Banner';
import Border from './components/board/Border';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Login className="login"></Login>
        <div className="mainboard">
          <Banner className="banner" />
          <Border className="border"/>
        </div>
      </div>
    </div>
  );
}

export default App;
