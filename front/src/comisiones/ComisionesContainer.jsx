import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import BuscarEsquema from './BuscarEsquema'
import NuevoEsquema from './NuevoEsquema'
import FormEsquema from './FormEsquema'
export default class Comisiones extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          comisiones: [],
          showForm: [],
          datosEsquema: {}
      }
      this.addOne = this.addOne.bind(this)
      this.createSchema = this.createSchema.bind(this)
    }
    handleAddComisions(obj){
        this.setState({comisiones:[...this.state.comisiones, obj]})
    }
    addOne(obj){
        if(obj != undefined){
        this.setState({comisiones: [...this.state.comisiones, obj]}, console.log(this.state))}
        this.setState({showForm: [...this.state.showForm, <FormEsquema datosEsquema={this.state.datosEsquema} desdeMin={this.state.desdeMin} tierNum={this.state.showForm.length} addOne={this.addOne} id={Math.random()}/>]})
        
    }

    createSchema(obj){
        this.setState({datosEsquema: obj}, ()=>{
            this.setState({showForm: [...this.state.showForm, <FormEsquema datosEsquema={this.state.datosEsquema} desdeMin={this.state.desdeMin} tierNum={this.state.showForm.length} addOne={this.addOne} id={Math.random()}/>]})
        })}
    render(){
        console.log(this.props)
    return(<div>
        <BuscarEsquema/>
        <NuevoEsquema addOne={this.createSchema}/>
        {this.state.showForm}
        <Button onClick={evt=>this.props.handleChange(this.state.comisiones)}>Submit</Button>
    </div>)
}
}

