import logo from './logo.svg';
import './App.css';
import Header from './components/_partials/_Header';
import Footer from './components/_partials/_Footer';
import HomePageIndex from './components/HomePage/HomePageIndex';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePageIndex />
      <Footer />
    </div>
  );
}

export default App;
