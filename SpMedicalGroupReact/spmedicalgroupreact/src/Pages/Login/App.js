import React, { Component } from 'react';
import fundo2 from '../../Assets/img/fundo2novo.jpg';
import Topo from '../../components/Topo/topo';
import '../../Assets/css/login.css';
import Axios from 'axios';

export default class App extends Component {

    constructor(){
        super();
        this.state ={
            email: '',
            senha: ''
        }
    }

    atualizaEstadoEmail(event){
        this.setState({email : event.target.value});
    }
    atualizaEstadoSenha(event){
        this.setState({senha : event.target.value});
    }

    fazerLogin(event){
        event.preventDefault();
        Axios.post('http://localhost:5000/api/Login',{
            email: this.state.email,
            senha: this.state.senha
        })
        .then(data => {
            localStorage.setItem("Sprint2Projeto", data.data.token);
            this.props.history.push('/cadastraConsulta');
            console.log(data);
        })
        .catch(erro => {
            console.log(erro);
        })
    }

  render() {
    return (

    <div>
    <Topo />
    
    <section className="login">
    <div className="fundo2">
        <img src={fundo2} alt="fundo2 spmedical"></img>       
    </div>
    <section className="loga">
        <div className="quadrado4">
            <h3>LOGIN</h3>

        <form onSubmit={this.fazerLogin.bind(this)}>
        <div className="emailInput">
            <label>Email:</label>
            <input id="email" type="text" value={this.state.email} onChange={this.atualizaEstadoEmail.bind(this)} />
        </div>

        <div className="senhaInput">
                <label>Senha:</label>
                <input id="senha" type="text" value={this.state.senha} onChange={this.atualizaEstadoSenha.bind(this)} />
        </div>

        <p>Esqueceu sua Senha?</p>

        <div className="botao_entrar">
                <input type="submit" value="Entrar"/>
            </div>
        </form>

        <div className="botao_cadastra">
                <input type="button" value="Cadastrar-se"/>
        </div>
        </div>
    </section>
    </section>
    </div>
    )
  }
}
