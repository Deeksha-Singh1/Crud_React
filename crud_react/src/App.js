import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Create/>}></Route>
        <Route  path='/read' element={<Read/>}></Route>
        <Route  path='/update' element={<Update/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
