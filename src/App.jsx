import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Documents from "./components/Documents"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <Documents />
      </main>
    </div>
  )
}

export default App
