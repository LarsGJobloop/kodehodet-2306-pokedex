import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Pokedex } from './routes/Pokedex'

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Pokedex />} />

      </Routes>
    </Router>
  )
}

export default App
