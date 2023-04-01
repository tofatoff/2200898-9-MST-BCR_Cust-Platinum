import { Container } from "reactstrap"
import Footer from "../../components/Footer"
import HeaderNav from "../../components/Navbar"
import SearchBar from "../Search/SearchBar"
import TentangPaket from "./components/TentangPaket"
import DetailMobil from "./components/DetailMobil"

const Detail = () => {
    return (
        <>
            <HeaderNav height='266px' />
            <SearchBar />
            <div className="container d-flex justify-content-around">
                <TentangPaket />
                <DetailMobil />
            </div>
            <Footer />
        </ >
    )
}

export default Detail