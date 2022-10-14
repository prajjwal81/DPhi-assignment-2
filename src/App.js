
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ChallangeDetail from './components/challangeDetail/challangeDetail';
import MainPage from "./components/firstPage/firstPage"
import ChallangeForm from './components/challangeDetail/challangeForm';
import Participation from './components/participation/participation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:"black" }}> 

{/* <MainPage/> */}
{/* <ChallangeDetail/> */}
{/* <ChallangeForm/> */}

      
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/Dphi-Assignment" exact element={<MainPage />} />
          <Route path="/challangeDetail" element={<ChallangeDetail />} />
          <Route path="/challangeForm" element={<ChallangeForm />} />
          <Route path="/participation" element={<Participation />} />   
        </Routes>
      </Router>
     





      </header>
    </div>
  );
}

export default App;
