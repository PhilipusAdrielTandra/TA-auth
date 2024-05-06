import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Page from '../components/Page';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/page" element={<Page/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
