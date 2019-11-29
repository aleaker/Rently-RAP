import {connect} from 'react-redux';
import axios from 'axios'
import React from 'react';
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import EsquemaComision from '../comisiones/EsquemaComision'
import ContactosPrincipales from './ContactosPrincipales'
import FormEsquema from '../comisiones/FormEsquema'
import GeneralForm from './GeneralForm'

class Empresas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            CommissionScheme: [{
                Name: '',
                FromDate: '',
                ToDate: '',
                From: '',
                To: '',
                CommissionPercentage: '',
                Type: 'Company'
            }],
            CompanyName: 'Hola',
            Description: 'Desc',
            Address: "ejemplo",
            Country: 'arg',
            Telephone: '',
            MainContact: {
                FirstName: 'asd',
                LastName: 'asd',
                IdType: 'asd',
                IdNum: 'asd',
                Email:'arcejuanma2@gmail.com',
            },
            BankAccountInfo: {
                Bank:'asd',
                AccountType: 'das',
                AccountNumber: 'das',
                Currency: 'das',
                Country: 'das',
                SwiffCode: 'dsa'
            },
            UsersSchema: [],
            //Estados Auxiliares
            internationalCountryCode: '',
            localCountryCode: '',
            phoneNumber: '',
            showForm: [],
            schemaName:'',
            schemaFrom:'',
            schemaTo:'',
            city: 'City',
            state: 'Bs',
            street: 'Hola',
            number: '123',
            clicked: false,
            disable: false,
            enteredCom: false,
        }
    //Abajo bindeo las propiedades
    this.handleSchema=this.handleSchema.bind(this)
    this.handleMainContact = this.handleMainContact.bind(this)
    this.createNewUserSchema = this.createNewUserSchema.bind(this)
    this.handleCommissionSchema = this.handleCommissionSchema.bind(this)
    this.addNewForm = this.addNewForm.bind(this)
    this.handleSchemaData=this.handleSchemaData.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBankDetails = this.handleBankDetails.bind(this)
    }

    addNewForm(){
        let datosEsquema={
            Name: this.state.schemaName,
            From: this.state.schemaFrom,
            To: this.state.schemaTo,
        }
        let minValue=this.state.CommissionScheme[this.state.CommissionScheme.length-1]['To']+1
        this.setState({showForm: [...this.state.showForm, <FormEsquema
            //Se le pasa el esquema de comision, el largo del array del esquema (permite modificar uno en particular)
            // y le da su key. La propiedad handleCommission Schema cambia 
                commission = {this.state.CommissionScheme}
                order = {this.state.showForm.length}
                key={this.state.showForm.length}
                handleCommissionSchema = {this.handleCommissionSchema}
                datosEsquema={datosEsquema} 
                addOne={this.addNewForm} 
                minValue={minValue}
                />]}
        )
    }

    createBusiness(){
        const UsersSchema = this.state.UsersSchema
        const notAllowed = ['internationalCountryCode', 'localCountryCode', 'phoneNumber', 'clicked', 'disable', 'UsersSchema', 'CommissionScheme'];
        const CommissionSchema = this.state.CommissionScheme
        let Company = this.state
        Object.keys(Company)
        .filter(key => notAllowed.includes(key))
        .forEach(key => delete Company[key]);
        console.log('', {users: UsersSchema, Company})
        axios.post('/api/createCompany/', {users: UsersSchema, Company, Commission: CommissionSchema})
    }

    handleSchema(obj){
        this.setState({CommissionScheme: obj}, ()=>{
                       console.log(this.state)})
    }
    
    handleCommissionSchema(obj, order){
        let copySchema = this.state.CommissionScheme
        copySchema[order] = obj
        this.setState({CommissionScheme: copySchema},()=>{console.log(this.state)});
    }

    createNewUserSchema(){
        this.setState({UsersSchema:[{FirstName: this.state.MainContact.FirstName, 
            LastName:this.state.MainContact.LastName, Company:this.state.CompanyName, 
            Email: this.state.MainContact.Email, Password: 'admin', UserType:'adminEmpresa', Telephone: this.state.Telephone }]}, console.log(this.state.MainContact))
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

    //Ok
    handleChange(obj){
        this.setState(obj, ()=>{
            if(obj.state || obj.street || obj.number || obj.city){
                this.setState({Address: `${this.state.number} ${this.state.street}, ${this.state.city}, ${this.state.state}` })}
            else if(obj.internationalCountryCode || obj.localCountryCode || obj.phoneNumber){
                this.setState({Telephone: `+${this.state.internationalCountryCode} ${this.state.localCountryCode} ${this.state.phoneNumber}`})
            }
            console.log(this.state)})
    }

    //Ok
    handleSchemaData(obj){
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
            <GeneralForm handleChange={this.handleChange} values={this.state} handleBankDetails={this.handleBankDetails}/>
           <div>
           <Button type='primary' onClick={evt=>{
                                        evt.preventDefault()
                                        this.setState({clicked: true})
                                        let value = this.state.disable
                                        this.setState({disable: !value})}}>
                {this.state.disable==false?"Guardar":"Editar"}</Button>
           </div>
            <div style={{display:"inline-flex"}}>
           <EsquemaComision 
           schemaName = {this.state.schemaName}
           schemaFrom = {this.state.schemaFrom}
           schemaTo = {this.state.schemaTo}
           handleSchemaData={this.handleSchemaData} 
           handleCommissionSchema={this.handleCommissionSchema}
           handleSchema={this.handleSchema} 
           forms = {this.state.showForm}
           addNewForm = {this.addNewForm}
           commission = {this.state.CommissionScheme}
           disabled={!this.state.disable}
           enteredCom={this.state.enteredCom}
           />

           <ContactosPrincipales 
           mainUser={this.createNewUserSchema} 
           handleMainContact={this.handleMainContact}
           disabled={!this.state.disable} 
           UsersSchema={this.state.UsersSchema} 
           contact={this.state.MainContact} 
           />
           </div>
           <br/><br/>
           <Button type="submit" color="primary" variant="contained" onClick={evt=>{
               evt.preventDefault()
               this.createBusiness()}}>
                   Agregar Empresa</Button>
        </form>
        </Col>
            </div>
        )
    }

}

export default connect(null, null)(Empresas);

//Todo apuntaria a borrar la siguiente propiedad
    // handleBankDetails(obj){
    //     let BankAccountInfoCopy = this.state.BankAccountInfo
    //     BankAccountInfoCopy[Object.keys(obj)[0]] = Object.values(obj)[0]
    //     this.setState({BankAccountInfo: BankAccountInfoCopy}, ()=> console.log(this.state))
    // }