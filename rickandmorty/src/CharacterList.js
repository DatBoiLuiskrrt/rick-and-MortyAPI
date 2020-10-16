import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
        <div className="card-list">
       {Object.entries(characters).map( character => {
           return <CharacterCard character={character} key={character.id} />
       })}
        </div>
    );
};

export default CharacterList;
