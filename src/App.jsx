import "../src/global.css"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { HomeBanner } from "./Components/HomeBanner"
import {HomeBoxRoutes} from "./Components/HomeBoxRoutes/index"
import { HomeInstitutional } from "./Components/HomeInstitutional"

function App() {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <HomeBoxRoutes/>
      <HomeInstitutional/>
      <Footer/>
    </div>
  )
}

export default App
