import React, {Component} from "react";
import CardList from "../CardList/CardList";
import axios from 'axios'

export default class ProdutoList extends Component {
    state = {
        produtos: [],
        cont: 0

    }

    componentDidMount() {
        console.log('Componente DId')
        let {produtos} = this.state
        const carregarProdutos = async () => {
            return await axios.get('http://localhost:8080/produtos').then(
                res => {
                    produtos = res.data._embedded.produtos;
                    this.setState({
                        produtos: produtos
                    });
                }
            )
        }
        carregarProdutos();
    }


    render() {
        return (
            <div className="jumbotron jumbotron-fluid" onClick={console.log('click')}>
                <div className="container-fluid">
                    <h1 className="text-center  mb-2">Lista de Produtos:</h1>
                    {this.state.produtos.length > 0 ? <CardList produtos={this.state.produtos}
                                                                key={this.state.produtos.id}/> : console.log('sem itens')}

                </div>
            </div>
        )
    }

}