import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

function App() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' }
  ];
  return (
    <>
    <Provider store={store}>
      <div>
        <Router>
        <div>
          <Navbar pages={pages} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </Router>
      </div>
    </Provider>
    </>
  );
}

export default App;
