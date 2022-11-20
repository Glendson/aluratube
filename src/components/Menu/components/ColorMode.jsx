import React, { useState } from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {alert("Voce tem que me configurar primeiro!")},
    toggleMode: () => {alert("Voce tem que me configurar primeiro!")}
})

export default function ColorModeProvider(props){

    const [mode, setMode] = useState(props.initialMode)

    function toggleMode(){
        if(mode === "dark") setMode("light")
        if(mode === "light") setMode("dark")
    }


    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}