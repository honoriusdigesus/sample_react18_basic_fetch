import './App.scss'
import Title from "./components/Title.tsx";
import Button from "./components/Button.tsx";
import {useEffect, useState} from "react";

function App() {

    const [count, setCount] = useState(0); //UseState es un hook que permite manejar el estado de un componente funcional
    console.log(count);

    useEffect(() => { //UseEffect es un hook que permite ejecutar código en un componente funcional cuando se monta, desmonta o actualiza
        console.log("UseEffect is working when count changes");
    }, [count]);


    return (<>

        <Title myText={`El múmero de clics son: ${count}`}/>
        <Button onClick={()=>setCount(count+1)} text="+ 1" />

        {/*<Title myText="Este es el texto del componente 1"/>*/}
        {/*<Title myText="Este es el texto del componente 2"/>*/}


    </>)
}

export default App
