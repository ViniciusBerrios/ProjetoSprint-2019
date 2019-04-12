import React, { Component } from 'react';
import logo from '../../Assets/img/logo.png';
import './App.css';
import '../../Assets/css/login.css'

export default class App extends Component {
  render() {
    return (
      <body>
    <header class="top">
        <div class="banner">
            <div class="fundo">
                        <img src="imagens/fundo.jpg">
            </div>

            <div class="logo">
                <img src="imagens/logo.png">
            </div>

            <div class="titulo">
                    <h1>Medical Group</h1>
                </div>

            <div class="medicos">
                <img src="imagens/medicos.png">
            </div>

            <div class="telefone">
                <img src="imagens/telefone.png"> 
                <h2>11 92345-6789</h2>
            </div>

            <div class="redessociais">
                <div class="twitter">
                    <img src="imagens/twitter.png">
                </div>

                <div class="facebook">
                    <img src="imagens/face.png">
                </div>

                <div class="instagram">
                    <img src="imagens/instagram.png">
                </div>

                <div class="linkedin">
                    <img src="imagens/linkedin.png">
                </div>
            </div>
        </div>
    </header>

    <div class="quadrado">
        <ul>
            <li>Consultas</li>
        </ul>
    </div>
    
    <section class="login">
    <div class="fundo2">
        <img src="imagens/fundo2novo.jpg">       
    </div>
    <section class="loga">
        <div class="quadrado2">
            <h3>LOGIN</h3>

        <div class="emailInput">
            <label>Email:</label>
            <input id="email" type="text" >
        </div>

        <div class="senhaInput">
                <label>Senha:</label>
                <input id="senha" type="text">
        </div>

        <p>Esqueceu sua Senha?</p>

        <div class="botao_entrar">
                <a href=""><input type="button" value="Entrar"></a>
            </div>

        <div class="botao_cadastra">
                <a href=""><input type="button" value="Cadastrar-se"></a>
        </div>
        </div>
    </section>

       
    </section>
    </body>
    );
  }
}
