import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterList() {
    const [characters, SetCharacters ] = useState({});

    useEffect( () => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then( response => {
            SetCharacters(response.data.results);
            console.log(response.data.results);
        })
        .catch( error => {
            console.log("There was an error returning the data", error);
        });
    }, []);

    return (
        <>
       
        </>
    );
};

export default CharacterList;
