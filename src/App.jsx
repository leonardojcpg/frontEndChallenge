import "../src/global.css"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { HomeBanner } from "./Components/HomeBanner"

function App() {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <Footer/>
    </div>
  )
}

export default App
