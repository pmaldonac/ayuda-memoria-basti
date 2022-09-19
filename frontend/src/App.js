
import '../src/styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Table from './pages/Table'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/'/>
          <Route path='/pacientes'  element={<Table />}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
