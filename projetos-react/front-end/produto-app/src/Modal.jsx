import React from "react";

export default props => {

    return (
        <React.Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalLongoExemplo">
                Deletar
            </button>

            <div className="modal fade" id="ModalLongoExemplo" tabIndex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalLongoExemplo">Exclusao de item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Deseja Excluir o item {props.produto.nome}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" data-dismiss="modal" onClick={props.deletar} className="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}