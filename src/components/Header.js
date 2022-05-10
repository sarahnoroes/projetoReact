import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import "../App.css";

function Header(props) {

  //estado é a informação armazenaa.
  //As informações são imutáveis.
  //gette e setter
  //16.8 - Hooks - usealgumacoisa é um Hook. 
  //ex:useState, useEffect, useRef, useContext.
  //useState: const[getter, setter] = useState(valor inicial);

    const [company, setCompany] = useState(props.options.empresa || "Nenhuma informada");
    const [name, setName] = useState(props.options.nome );
    const [site, setSite] = useState(props.options.site);

    //executar a primeira vez que a página for carregada(Fiap). E cada vez que for alterada(Avanade). Ele executa novamente. O
    useEffect(() => {
        //useEeffect é o Hook que executa autotmaticamente, toda vez que a página é carregada - componenDidMount()
        //Executa automaticamente toda vez que um estado é alterado.
        //useEffect executou a primeira vez.
        setCompany(company.toUpperCase());
    },[company]);

    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
        <a
          className={props.options.className}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
          {name}
        </a>
        <button onClick={(e) => setCompany("Avanade ")}>{`mudando o nome de: ${company}`}</button>
      </header>
    );
}

export default Header;