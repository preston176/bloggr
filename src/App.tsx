import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import DemoHeader from './Components/Demo/DemoHeader';
import Header from './Components/Home/Header';
import Demo from './Components/Demo/Demo';

const App = () => {
  const auth = false;
  return (
    <>
      {auth ? <Header /> : <DemoHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='demo' element={<Demo />} />
      </Routes>
    </>
  )
}

export default App
