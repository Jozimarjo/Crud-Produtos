import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import ProdutoForm from "./ProdutoForm/ProdutoForm";
import ProdutoList from "./ProdutosList/ProdutoList";
import Teste from './template/Teste'

const Routes = () =>
    <Switch>
        <Route exact path='/form' component={ProdutoForm}/>
        <Route exact path='/form/:id' component={ProdutoForm}/>
        <Route exact path='/list' component={ProdutoList}/>
        <Route exact path='/teste/:id' component={Teste}/>
        <Redirect from='*' to='/list'/>
    </Switch>
export default Routes;