import React, {Component} from "react";
import Card from "../Card/Card";
// import {useParams} from "react-router";
import axios from "axios";
import './ProdutoForm.css'

const initialState = {
    produto: {id: '', nome: '', descricao: '', img: ''},
    edit: false,
    cadastrado: false,
    msg: ''
}


export default class ProdutoForm extends Component {
    state = {...initialState};
    id = this.props.match.params
    history = this.props.history;
    nIntervId

    componentDidMount() {
        console.log(this.props)

        if (typeof this.id.id == "string" && this.props.match.params) {
            const {id} = this.props.match.params
            let {produto} = this.state
            const carregarProdutos = async () => {
                return await axios.get(`http://localhost:8080/produtos/${id}`).then(
                    res => {
                        produto = res.data;
                        this.setState({
                            produto: produto,
                            edit: true
                        });
                    })
            }
            carregarProdutos();
        }
    }

    clear = () => {
        this.setState({produto: initialState.produto, edit: false})
    };

    start = () => {
        this.nIntervId = setInterval(() => {
            console.log('asdasd')
            this.setState({cadastrado: false})
            clearInterval(this.nIntervId);
        }, 3000);
    }

    save = async e => {
        clearInterval(this.nIntervId);
        e.preventDefault();
        const produto = {...this.state.produto};
        await axios.post('http://localhost:8080/produtos', produto).then(
            res => {
                this.setState({cadastrado: true, msg: 'Produto cadastrado com sucesso!'})
                this.start();
                this.clear();
            }
        );
    };
    edit = async e => {
        e.preventDefault();
        const produto = {...this.state.produto};
        const {id} = this.props.match.params

        await axios.put(`http://localhost:8080/produtos/${id}`, produto).then(
            res => {
                this.setState({cadastrado: true, msg: 'Produto Editado com sucesso!'})
                this.start();
                this.clear()
                this.history.push('/form')
            }
        );
    };


    change = (e) => {
        const produto = {...this.state.produto};
        produto[e.target.name] = e.target.value;
        this.setState({produto: produto})
    };
    showMsg = () => this.state.msg


    render() {
        return (
            <div className="jumbotron">
                <h1 className="text-center">{this.state.edit ? 'Editar Produto' : 'Cadastrar Produto '}</h1>
                <div className="container">
                    <form onSubmit={typeof this.props.match.params.id === 'string' ? this.edit : this.save}>
                        <div className="form-group row justify-content-center">
                            <Card form={this.props.match} produto={this.state.produto} valor={true}/>
                        </div>
                        {this.state.cadastrado ?
                            <div className="form-group row justify-content-center">
                                <div className="col-sm-10">
                                    <div className="alert alert-success" role="alert">
                                        {this.showMsg()}
                                    </div>
                                </div>
                            </div>
                            : false
                        }
                        <div className="form-group row justify-content-center">
                            <div className="col-sm-10">
                                <input placeholder="Nome do Produto" name="nome" value={this.state.produto.nome || ''}
                                       onChange={this.change}
                                       className="form-control" required/>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-sm-10">
                            <textarea placeholder="Descricao" name="descricao"
                                      onChange={this.change} value={this.state.produto.descricao}
                                      className="form-control" id="textArea"
                                      rows="3" required/>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center">
                            <div className="col-sm-10">
                                <button className="btn-primary mr-2"
                                        type="submit">{this.state.edit ? 'Editar' : 'Salvar'}</button>
                                <button className="btn-primary" onClick={this.clear} type="button">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
