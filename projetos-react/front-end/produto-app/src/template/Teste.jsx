import React from "react";
import {useParams} from "react-router";

export default props => {
    const {id} = useParams()

    function teste() {
        console.log(id)
    }

    return (
        <div> Ola teste
            <button className="btn-primary" onClick={teste}>teste </button>
        </div>
    );
}