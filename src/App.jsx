import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
      {/* <h1>alshd</h1> */}
    </div>
  )
}

export default App
