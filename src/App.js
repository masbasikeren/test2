import './App.css';
import Pengertian from './components/file_baru';
import Rakun from './components/apa';
import Gajah from './components/apa_lagi';
import Ikuti from './components/Ikuti';
function App() {
  return (
    <div className="App">
    <Rakun/>
    <Pengertian/>
    <Gajah name="mamah"/>
    <Gajah name="aku"/>
    <Gajah name="takut"/>
    <Ikuti/>
    

    </div>
  );
}

export default App;
