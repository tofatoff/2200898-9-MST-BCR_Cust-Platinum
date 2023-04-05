import { Container } from "reactstrap"
import Footer from "../../components/Footer"
import HeaderNav from "../../components/Navbar"
import SearchBar from "../Search/SearchBar"
import TentangPaket from "./components/TentangPaket"
import DetailMobil from "./components/DetailMobil"
import { useParams } from "react-router"
import { useState, useEffect } from "react"


const Detail = () => {
    const { carId } = useParams();
    const [car, setCar] = useState({});
    const API_URL = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${carId}`

    const fetchAsync = async () => {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log(API_URL);
        console.log(json);
        setCar(json);
    };

    useEffect(() => {
        fetchAsync();
    }, []);


    return (
        <>
            <HeaderNav height='266px' />
            <div
                style={{ backgroundColor: "rgb(241, 243, 255)", height: 100 }}
            ></div>
            <SearchBar disableAllInput={true} />
            <div className="container d-flex justify-content-around">
                {car.name != `Not Found` ?
                    <>
                        <TentangPaket />
                        <DetailMobil
                            name={car.name}
                            category={car.category}
                            price={car.price}
                            image={car.image}

                        />
                    </>
                    : <h1>Car is not found</h1>}
            </div>
            <Footer />
        </ >
    )

}

export default Detail