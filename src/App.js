import './App.css';
import Allroutes from './Routes/Allroutes';
import Navbar from './Routes/Navbar';
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Allroutes/>
     <Footer/>

    </div>
  );
}

export default App;
