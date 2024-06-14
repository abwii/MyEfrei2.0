import logo from './logo.svg';
import './App.css';
import Hi from './components/Hi';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
      <Card />
      <Card />
      <Card />
      </>
      
      <Footer />
    </div>
  );
}

export default App;
