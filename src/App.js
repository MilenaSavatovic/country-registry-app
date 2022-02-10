import './App.css'
import CountrRegistry from './CountryRegistry'
import bootstrap from 'bootstrap'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-5">Country dictionary</header>
        <CountrRegistry />
      </div>
    </div>
  )
}

export default App
