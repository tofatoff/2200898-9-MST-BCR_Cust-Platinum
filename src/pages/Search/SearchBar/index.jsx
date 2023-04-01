import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
const PRICE_OPTION = {
    small: {
        maxPrice: 400000,
    },
    medium: {
        minPrice: 400000,
        maxPrice: 600000,
    },
    large: {
        minPrice: 600000,
    },
};

const SearchBar = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState({});
    const [isRented, setIsRented] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(category)
        console.log(price)
        console.log(isRented)
        let getPrice = {}
        if (Object.keys(price).length !== 0) {
            getPrice = PRICE_OPTION[price];
            console.log(getPrice)
            if (!('minPrice' in getPrice)) { getPrice.minPrice = '' }
            if (!('maxPrice' in getPrice)) { getPrice.maxPrice = '' }
            console.log(getPrice)
        } else {
            getPrice.minPrice = ''
            getPrice.maxPrice = ''
        }

        navigate(`/search-result?name=${name}&category=${category}&minPrice=${getPrice.minPrice}&maxPrice=${getPrice.maxPrice}&isRented=${isRented}`);
    };

    return (
        <section id='search'>
            <Container className="d-flex align-items-center justify-content-center">
                <div
                    style={{
                        width: '1047px',
                        height: '106px',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
                        borderRadius: '8px',
                        marginTop: '-42px',
                        marginBottom: '100px',
                        background: '#FFFFFF'
                    }}>
                    <Form
                        onSubmit={handleSubmit}
                        style={{
                            margin: '24px 24px'
                        }}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="namaMobil">
                                        Nama Mobil
                                    </Label>
                                    <Input
                                        id="namaMobil"
                                        placeholder="Ketik nama/tipe mobil"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="kategoriMobil">
                                        Kategori
                                    </Label>
                                    <Input
                                        id="kategoriMobil"
                                        type="select"
                                        value={category}
                                        onChange={(e) => {
                                            setCategory(e.target.value);
                                        }}
                                    >
                                        <option value="" hidden>
                                            Masukkan Kapasitas Mobil
                                        </option>
                                        <option label="2 - 4 orang" value="small" />
                                        <option label="4 - 6 orang" value="medium" />
                                        <option label="6 - 8 orang" value="large" />
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="hargaSewa">
                                        Harga
                                    </Label>
                                    <Input
                                        id="hargaSewa"
                                        type="select"
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                    >
                                        <option value="" hidden>
                                            Masukkan Harga Sewa per Hari
                                        </option>
                                        <option value="small">
                                            &lt; Rp. 400.000
                                        </option>
                                        <option value="medium">
                                            Rp. 400.000 - Rp. 600.000
                                        </option>
                                        <option value="large">
                                            &gt; Rp. 600.000
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="status">
                                        Status
                                    </Label>
                                    <Input
                                        id="status"
                                        type="select"
                                        value={isRented}
                                        onChange={(e) => {
                                            setIsRented(e.target.value);
                                        }}
                                    >
                                        <option value={true}>Disewakan</option>
                                        <option value={false}>Tidak Disewakan</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-center">
                                <Button
                                    type="submit"
                                    style={{
                                        background: '#5CB85F'
                                    }}>
                                    Cari Mobil
                                </Button>

                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </section>
    )
}

export default SearchBar