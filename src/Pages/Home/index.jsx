import {Header} from "../../Components/Header"
import {Footer} from "../../Components/Footer"
import { HomeBanner } from "../../Components/HomeBanner"
import {HomeBoxRoutes} from "../../Components/HomeBoxRoutes"
import {HomeInstitutional} from "../../Components/HomeInstitutional"
import { HomeResultsCenter } from "../../Components/HomeResultsCenter"

export const Home = () => {
    return (
        <>
      <Header/>
      <HomeBanner/>
      <HomeBoxRoutes/>
      <HomeInstitutional/>
      <HomeResultsCenter/>
      <Footer/>
        </>
    )
}