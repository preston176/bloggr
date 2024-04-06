import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './Components/Home/Home';
import DemoHeader from './Components/Demo/DemoHeader';
import Header from './Components/Home/Header';
import Demo from './Components/Demo/Demo';

const App = () => {
  const currentUser = false;
  return (
    <>
      {currentUser ? <Header /> : <DemoHeader />}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path='/demo' element={<Demo />} />}
        <Route path='*' element={<Navigate to={!currentUser ? "/demo" : "/"} />} />
      </Routes>
    </>
  )
}

export default App
