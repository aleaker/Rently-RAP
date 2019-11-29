import React from 'react'
import Button from '@material-ui/core/Button'
import BuscarEsquema from './BuscarEsquema'
import NuevoEsquema from './NuevoEsquema'

export default class Comisiones extends React.Component {
    constructor(props) {
      super(props);
      this.state={
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
        this.props.addNewForm(obj)
    }

    createSchema(obj){
        this.props.addNewForm(obj)
    }
    render(){
    return(<div>
        <BuscarEsquema/>
        <NuevoEsquema 
        schemaName = {this.props.schemaName}
        schemaFrom = {this.props.schemaFrom}
        schemaTo = {this.props.schemaTo}
        handleSchemaData={this.props.handleSchemaData}
        addOne={this.createSchema}/>
        {this.props.forms}
        <Button onClick={evt=>this.props.handleClose()}>Submit</Button>
    </div>)
}
}

