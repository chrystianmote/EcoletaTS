import React from "react";

//essa interrogação(?) desobriga o uso do parâmetro title.
type typeProps ={
    title?: String
}

function Header(prop: typeProps) {
    return (
        <header >
            <h1>{prop.title}</h1>
        </header>
    );
}
export default Header;