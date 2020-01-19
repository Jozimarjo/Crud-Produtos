import React from "react";
import './Card.css'
import {useHistory} from 'react-router-dom';
import Modal from "../Modal";
import axios from 'axios'

//ajustar style
export function Card(props) {
    const history = useHistory();

    function handleClick(valor) {
        history.push(`/form/${props.produto.id}`);
    }

    async function deletar(e) {
        console.log(props)
        await axios.delete(`http://localhost:8080/produtos/${e.id}`).then(
            res => {
                console.log('Item Deletado')
                console.log(props)
                props.carregarProdutos();
            }
        )
    }


    const teste = (n) => deletar(n)
    return (
        <React.Fragment>
            <div className="card bg-light mb-3 mr-2" style={{minWidth: '300px', maxWidth: '18rem'}}>
                <div className="card-header">{props.produto.nome || 'Nome Produto'}</div>
                <div className="card-body">
                    <p className="card-text">{props.produto.descricao || 'Descricao do Produto'}</p>
                </div>
                <div>
                    {props.form ? false
                        : (<div className="card-footer bg-transparent">
                            <button className="btn btn-primary mr-3" onClick={handleClick} type="button">Editar</button>
                            <Modal produto={props.produto} deletar={() => teste(props.produto)}/>
                        </div>)
                    }
                </div>
            </div>
        </React.Fragment>

    )
}

export default Card;