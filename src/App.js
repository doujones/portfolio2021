import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Nav/Navbar';
import { BrowserRouter, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    </BrowserRouter>
  );
}

export default App;
