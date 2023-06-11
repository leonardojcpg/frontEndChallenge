import "../src/global.css"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { HomeBanner } from "./Components/HomeBanner"
import {HomeBoxRoutes} from "./Components/HomeBoxRoutes/index"

function App() {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <HomeBoxRoutes/>
      <Footer/>
    </div>
  )
}

export default App
