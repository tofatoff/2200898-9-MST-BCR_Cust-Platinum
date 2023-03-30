import React from "react";
import {
    Link
} from "react-router-dom";
import { Button } from 'reactstrap';

const BtnCTA = () => {
    return (

        <div >
            <Button color="success" href="/search" tag="a">
                Mulai Sewa Mobil
            </Button>

        </div>

    )
}

export default BtnCTA