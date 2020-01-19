import React, {Component} from "react";
import Card from "../Card/Card";
import axios from "axios";

export default class CardList extends Component {
    state = {produtos: []}

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.produtos = [...this.props.produtos]
        this.setState({produtos: this.produtos})
    }

    carregarProdutos = async () => {
        await axios.get(`http://localhost:8080/produtos`).then(
            res => {
                console.log(res.data._embedded.produtos)
                this.setState({produtos: res.data._embedded.produtos})
            }
        )
    }

    render() {
        const carregar = (n) => this.carregarProdutos(n)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {this.state.produtos.map(produto => <Card carregarProdutos={(n) => carregar()}
                                                                      key={produto.id}
                                                                      produto={produto}/>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}