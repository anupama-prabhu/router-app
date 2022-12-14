import logo from './logo.svg';
import './App.css';
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Menu />
    </div>
  );
}

export default App;
