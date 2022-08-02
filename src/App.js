import logo from './logo.svg';
import './App.css';
import { Footer, Blog, Possibility, Features, WhoAreWe, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhoAreWe />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
