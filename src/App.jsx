import ThemeChange from "./components/ThemeChange"
import ModeChange from "./context/ModeChange"
const App = () => {
  return (
    <ModeChange>
      <div className="container">
        <ThemeChange/>
      </div>
    </ModeChange>
  )
}

export default App