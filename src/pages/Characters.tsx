import {useEffect, useState} from "react";
import {fetchCharacters} from "../api/fetchCharacters.ts";


const Characters = () => {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        const getCharacters = async () => {
            const charactersData = await fetchCharacters();
            console.log(charactersData);
            setCharacters(charactersData);
        };
        getCharacters().then(r => console.log(r));
    }, []);

    return (
        // Quiero que este div tenga un width de 100% y un height de 100%
        <div className="characters-container">
            {characters.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div className="div-principal">
                    <ul>
                        {characters.map((character) => (
                                <li key={character.id}>

                                    <h2>{character.firstName}</h2>
                                    <div>
                                        <img src={character.image} alt={character.firstName}/>
                                        <p><span>Edad: </span>: {character.age}</p>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Characters;