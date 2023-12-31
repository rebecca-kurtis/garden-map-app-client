import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/_partials/_Header';
import Footer from './components/_partials/_Footer';
import HomePageIndex from './components/HomePage/HomePageIndex';
import ProfilePageIndex from './components/ProfilePage/ProfilePageIndex';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<HomePageIndex />} />
        <Route path="/users/name" element={<ProfilePageIndex />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    
  );
}

export default App;
