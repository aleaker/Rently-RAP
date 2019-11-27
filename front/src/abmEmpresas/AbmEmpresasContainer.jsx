import {connect} from 'react-redux';
import axios from 'axios'
import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from '@material-ui/core/Button';
import EsquemaComisiones from '../comisiones/EsquemaComision'
import ContactosPrincipales from './ContactosPrincipales'
import DatosBancarios from './DatosBanco'


// CompanyName: { type: String, required: true },
// Description: { type: String, required: true },
// Address: { type: String, required: true },
// Country: { type: String, required: true },
// Telephone: { type: String, required: true },
// MainContact: {
//   FirstName: { type: String, required: true },
//   LastName: { type: String },
//   IdType: { type: String, required: true },
//   IdNum: { type: String, required: true },
//   Email: {
// BankAccountInfo: {
//     Bank: { type: String },
//     AccountType: { type: String },
//     AccountNumber: { type: String },
//     Currency: { type: String },
//     Country: { type: String },
//     SwiffCode: { type: String }
//   },
//   CommissionScheme: [{ type: Schema.Types.ObjectId, ref: "Commission" }]
// });
class Empresas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            disable: false,
            CommissionScheme: [],
            CompanyName: '',
            Description: '',
            city: '',
            state: '',
            street: '',
            number: '',
            Address: "",
            Country: '',
            Telephone: '',
            MainContact: {
                FirstName: '',
                LastName: '',
                IdType: '',
                IdNum: '',
                Email:'',
            },
            BankAccountInfo: {
                Bank:'',
                AccountType: '',
                AccountNumber: '',
                Currency: '',
                Country: '',
                SwiffCode: ''
            },
            UsersSchema: [],
            internationalCountryCode: '',
            localCountryCode: '',
            phoneNumber: ''

        }
    //Abajo bindeo las propiedades
    this.handleSchema=this.handleSchema.bind(this)
    this.handleMainContact = this.handleMainContact.bind(this)
    this.createNewUserSchema = this.createNewUserSchema.bind(this)
    }

    createBusiness(){
        const UsersSchema = this.state.UsersSchema
        const notAllowed = ['internationalCountryCode', 'localCountryCode', 'phoneNumber', 'clicked', 'disable', 'UsersSchema'];
        let Company = this.state
        Object.keys(Company)
        .filter(key => notAllowed.includes(key))
        .forEach(key => delete Company[key]);
        console.log('', {users: UsersSchema, Company})
        axios.post('', {users: UsersSchema, Company})
    }

    handleSchema(obj){
        this.setState({CommissionScheme: obj.target.value}, ()=>{
                       console.log(this.state)})
    }

    createNewUserSchema(){
        this.setState({UsersSchema:[{FirstName: this.state.MainContact.FirstName, 
            LastName:this.state.MainContact.LastName, Company:this.state.CompanyName, 
            Email: this.state.MainContact.Email, Password: 'admin' }]}, console.log(this.state.MainContact))
    }

    handleMainContact(obj){
        let MainContactCopy = this.state.MainContact
        MainContactCopy[Object.keys(obj)[0]] = Object.values(obj)[0]
        this.setState({MainContact: MainContactCopy}, ()=> console.log(this.state))
    }

    handleBankDetails(obj){
        let BankAccountInfoCopy = this.state.BankAccountInfo
        BankAccountInfoCopy[Object.keys(obj)[0]] = Object.values(obj)[0]
        this.setState({BankAccountInfo: BankAccountInfoCopy}, ()=> console.log(this.state))
    }

    handleChange(obj){
        this.setState(obj, ()=>{
            if(obj.state || obj.street || obj.number || obj.city){
                this.setState({Address: `${this.state.number} ${this.state.street}, ${this.state.city}, ${this.state.state}` })}
            else if(obj.internationalCountryCode || obj.localCountryCode || obj.phoneNumber){
                this.setState({Telephone: `+${this.state.internationalCountryCode} ${this.state.localCountryCode} ${this.state.phoneNumber}`})
            }
            console.log(this.state)})
    }

    render(){
        return(
            <div>
               <Col xs={12}>
        <form>
            <Col xs={12}>
           <label>Datos Empresa</label>
           <input type="text" placeholder="Nombre o Razon Social" id="business_Name"
           onChange={evt=>this.handleChange({CompanyName:  evt.target.value})} value={this.state.CompanyName}
           disabled={this.state.clicked}/>
           <input type="text" placeholder="Descripcion" id="business_Description"
           onChange={evt=>this.handleChange({Description:  evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={12}>
           <label>Direccion</label>
           <Row>
               <Col xs={6}>
           <input type="text" placeholder="Pais" id="business_Country" onChange={evt=>this.handleChange({Country:  evt.target.value})}
            disabled={this.state.disable}/>
           </Col>
           <Col xs={6}>
           <input type="text" placeholder="Estado" id="business_Description"
           onChange={evt => this.handleChange({state: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           </Row>
           <Row>
               <Col xs ={6}>
           <input type="text" placeholder="Ciudad" id="business_Description"
           onChange={evt => this.handleChange({city: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs ={4}> 
           <input type="text" placeholder="Calle" id="business_Description"
           onChange={evt => this.handleChange({street: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs ={2}>
           <input type="number" placeholder="Numero" id="business_Description"
           onChange={evt => this.handleChange({number: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           </Row>
           </Col>
           <Col xs={12}>
           <label>Telefono</label>
           <Row>
           <Col xs={2}>
           <input type="text" placeholder="Codigo Pais" id="business_Description"
           onChange={evt => this.handleChange({internationalCountryCode: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={2}>
           <input type="text" placeholder="Codigo de Area" id="business_Description"
           onChange={evt => this.handleChange({localCountryCode: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={8}>
           <input type="text" placeholder="Telefono" id="business_Description"
           onChange={evt => this.handleChange({phoneNumber: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           </Row>
           </Col>

           <Col xs={12}>
           <label>Datos Bancarios</label>
           <Row>
           <Col xs={4}>
           <input type="text" placeholder="Banco" id="business_Description"
           onChange={evt => this.handleBankDetails({Bank: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={4}>
           <input type="text" placeholder="Tipo de Cuenta" id="business_Description"
           onChange={evt => this.handleBankDetails({AccountType: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={4}>
           <input type="text" placeholder="Numero de Cuenta" id="business_Description"
           onChange={evt => this.handleBankDetails({AccountNumber: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={2}>
           <input type="text" placeholder="Moneda" id="business_Description"
           onChange={evt => this.handleBankDetails({Currency: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={5}>
           <input type="text" placeholder="Pais" id="business_Description"
           onChange={evt => this.handleBankDetails({Country: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           <Col xs={5}>
           <input type="text" placeholder="Codigo Swift" id="business_Description"
           onChange={evt => this.handleBankDetails({SwiffCode: evt.target.value})}
           disabled={this.state.disable}/>
           </Col>
           </Row>
           </Col>
           <div>
           <Button type='primary' onClick={evt=>{
                                        evt.preventDefault()
                                        this.setState({clicked: true})
                                        let value = this.state.disable
                                        this.setState({disable: !value})}}>
                {this.state.disable==false?"Guardar":"Editar"}</Button>
           </div>
            <div style={{display:"inline-flex"}}>
           <EsquemaComisiones handleSchema={this.handleSchema} disabled={!this.state.disable}/>
           <ContactosPrincipales mainUser={this.createNewUserSchema} disabled={!this.state.disable} UsersSchema={this.state.UsersSchema} contact={this.state.MainContact} handleMainContact={this.handleMainContact}/>
           <DatosBancarios disabled={!this.state.disable}/>
           </div>
           <br/>
           <Button type="submit" onClick={evt=>{
               evt.preventDefault()
               this.createBusiness()}}>Agregar Empresa</Button>
        </form>
        </Col>
    
            </div>
        )
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(Empresas);