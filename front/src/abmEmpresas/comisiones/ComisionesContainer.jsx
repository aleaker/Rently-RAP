import React from 'react'
import axios from 'axios'

import BuscarEsquema from './BuscarEsquema'
import NuevoEsquema from './NuevoEsquema'
import FormEsquema from './FormEsquema'
export default class Comisiones extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          comisiones: [],
          showForm: [],
          desdeMin: 0

      }
      this.addOne = this.addOne.bind(this)
    }
    handleAddComisions(obj){
        this.setState({comisiones:[...this.state.comisiones, obj]})
        console.log(this.state.comisiones)
    }
    addOne(obj){
        if(obj != undefined){
        this.setState({desdeMin: obj['desde']+1})
        this.setState({comisiones: [...this.state.comisiones, obj]})}
        this.setState({showForm: [...this.state.showForm, <FormEsquema desdeMin={this.state.desdeMin} tierNum={this.state.showForm.length} addOne={this.addOne} id={Math.random()}/>]})
        console.log(this.state)
    }
    render(){
    return(<div>
        <BuscarEsquema/>
        <NuevoEsquema addOne={this.addOne}/>
        {this.state.showForm}
    </div>)
}
}

