import './App.css';
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Routes>
        </>
      </div>
    </Router>
  //  <div style={{
  //   width:'75%',
  //   margin:'auto'
  //  }}>
  //   <Login/>
  //  </div>
  );
}

export default App;
