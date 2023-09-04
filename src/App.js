import './App.css';
import Header from './Components/Home'
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import SignUp from './Components/SignUp';
import Deals from './Components/Deals';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/deals' element={<Deals />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;




