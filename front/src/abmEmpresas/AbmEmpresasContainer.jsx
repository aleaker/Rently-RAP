import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios';
import AbmForm from './AbmForm';

class Empresas extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    //Abajo bindeo las propiedades
    }
    componentDidMount(){}
    render(){
        return(
            <div>
                <AbmForm text={'por props'}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Empresas);