import React from 'react'
import Footer from '../../../components/Footer'
import HeaderNav from '../../../components/Navbar'
import SearchBar from '../SearchBar'
import { useSearchParams } from 'react-router-dom';
import {
    Container
} from 'reactstrap'

const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const category = searchParams.get('category');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const isRented = searchParams.get('isRented');


    return (
        <>
            <HeaderNav />
            <SearchBar />
            <Container>
                <p>{name}</p>
                <p>{category}</p>
                <p>{minPrice}</p>
                <p>{maxPrice}</p>
                <p>{isRented}</p>

            </Container>
            <Footer />
        </>
    )
}

export default SearchResult