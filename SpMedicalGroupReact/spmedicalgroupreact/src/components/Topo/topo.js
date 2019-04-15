import React from 'react';
import logo from '../../Assets/img/logo.png';
import fundo from '../../Assets/img/fundo.jpg';
import medicos from '../../Assets/img/medicos.png';
import telefone from '../../Assets/img/telefone.png';
import twitter from '../../Assets/img/twitter.png';
import face from '../../Assets/img/face.png';
import instagram from '../../Assets/img/instagram.png';
import linkedin from '../../Assets/img/linkedin.png';

function topo(){
    return(
        <div>

        <header className="top">
        <div className="banner">
            <div className="fundo">
                        <img src={fundo} alt="fundo sp medical"></img>
            </div>

            <div className="logo">
                <img src={logo} alt="logo spmedical"></img>
            </div>

            <div className="titulo">
                    <h1>Medical Group</h1>
                </div>

            <div className="medicos">
                <img src={medicos} alt="medicos spmedical"></img>
            </div>

            <div className="telefone">
                <img src={telefone} alt="telefone spmedical"></img>
                <h2>11 92345-6789</h2>
            </div>

            <div className="redessociais">
                <div className="twitter">
                    <img src={twitter} alt="twitter spmedical"></img>
                </div>

                <div className="facebook">
                    <img src={face} alt="face spmedical"></img>
                </div>

                <div className="instagram">
                    <img src={instagram} alt="instagram spmedical"></img>
                </div>

                <div className="linkedin">
                    <img src={linkedin} alt="linkedin spmedical"></img>
                </div>
            </div>
        </div>
    </header>

    <div className="quadrado">
        <ul>
            <li>Consultas</li>
        </ul>
    </div>
        </div>
    )
}

export default topo;