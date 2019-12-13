import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress';

var _ = require('lodash');

const createStateObject = (arr)=>{
    let object = {}
    arr.map(element=>{
        if(element.type=='date'){
            object[element.name] = element.value || new Date
        }
        else{
        object[element.name] = element.value || ""}
    })
    return object
}

const clearStateObject = (arr)=>{
    let object = {}
    arr.map(element=>{
        if(element.type=='date'){
            object[element.name] = new Date
        }
        else{
        object[element.name] =  ""}
    }
    )
    return object
}

const restoreStateObject = (arr) => {
    let object = {}
    arr.map(element=>{
        if(element.type=='date'){
            object[element.name] = element.value || new Date
        }
        else{
        object[element.name] = element.value || ""}
    })
    return object 
}

const generateRow = (arr)=>{
    let rows = []
    arr.map(element=>{
        if(rows[element.row] == undefined){
            rows[element.row] = [element]
        }
        else{
            rows[element.row].push(element)
        }
    })
    rows.shift()
    return rows
}

const generateSubmit = (config)=>{
    if(config.submit.hasOwnProperty('http') && config.submit.http.hasOwnProperty('provider') && config.submit.http.provider == "axios"){
        return (form, setOpen, setSubmit)=>{
            setOpen(true)
            setSubmit('loading')
            axios.post(`${config.submit.http.route}`, form)
            .then(e=>{
                setSubmit('sucess')
            })
        }
    }
}

const getWidth = (arr)=>{
    let widthArr = []
    arr.map(element=> widthArr.push(element.length))
    console.log(widthArr)
    return widthArr
}


const generateRequiredArray = (arr)=>{
    let required = []
    arr.map(element=>{
        if(element.required){
            required.push(element.name)
        }})
    return required
}

export default function(arr, config){
    let state = createStateObject(arr)
    let rows = generateRow(arr)
    let originalState = _.clone(arr)    
    const [form, setForm] = React.useState(state)
    let newForm=form
    let required = generateRequiredArray(arr)
    let widthArray = getWidth(rows)   
    const submitHandler = generateSubmit(config)
    React.useEffect(() => {
        console.log(form);
      }, [form]);

    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = React.useState(false)
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

    const updateParentState = (obj, config, state)=>{
        setForm({...form})
        config.handler(state)
    }

    const newParentState = (obj, config)=>{
        setForm(obj)
        config.handler(obj)
    }
    const HeaderTag = config.headers.formHeader?`${config.headers.formHeader[1]||'h3'}`:undefined
    let BodyTag =config.headers.rowHeadersVariant?`${config.headers.rowHeadersVariant||'h5'}`:undefined
    return(
    <div>
    {config.headers.formHeader?<HeaderTag>{config.headers.formHeader[0]}</HeaderTag>:<div/>}
    <form htmlFor={`${config.name}`} style={{display: 'flex-row',justifyContent:'space-between', flexWrap:'wrap', justifyContent: 'space-between'}}>
        {rows.map((row, index)=> <div style={{display:'flex', flexWrap:'wrap'}}> 
        {/* {config.headers[`${index+1}`]? <BodyTag style={{marginTop:'3%'}}>{config.headers[`${index+1}`]}</BodyTag>:<div/>} */}
        {row.map((element) => {
        return (
        element.type == 'text' || element.type=='password'?
        <div style={{width:`${100/widthArray[index]-3}%`, flexWrap:'wrap', justifyContent:'space-between' ,display:'inline-flex', marginRight:'3%', marginTop:'2%'}}>
        <TextField
            label = {element.label || element.name || 'Label'}
            fullWidth= {true}
            type = {element.type}
            placeholder={element.placeHolder || ""}
            required={element.required|| false}
            onChange={evt=>{        
                newForm = form
                newForm[element.name] = evt.target.value
                let name = element.name
                let obj = {}
                obj[name] = evt.target.value
                console.log(obj)
                updateParentState(obj, config, newForm)
            }}
            value = {form[element.name]}    
        />
        </div>
        : element.type=='date'?
        <div style={{width:`${100/widthArray[index]-3}%`, flexWrap:'wrap', justifyContent:'space-between' ,display:'inline-flex', marginRight:'3%', marginTop:'2%'}}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth= {true}
          format="dd/MM/yyyy"
          id="date-picker-dialog"
          label={element.name}
          required={element.required|| false}
        //   value = {form[element.name]}
          value = {form[element.name]}
          onChange={evt=>{     
            newForm = form
            newForm[element.name] = evt
            setForm(newForm)
            updateParentState(newForm, config)
          }}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></MuiPickersUtilsProvider>
        </div>
        :<div style={{width:`${100/widthArray[index]-3}%`, justifyContent:'space-between' ,display:'inline-flex', marginRight:'3%', marginTop:'2%'}}>
        <FormControl component="fieldset" >
        <FormLabel component="legend">{element.label || element.name}</FormLabel>
        <RadioGroup aria-label="gender" 
            name={element.name} 
            value={form[element.name]} 
            onChange={evt=>{     
                    newForm = form
                    newForm[element.name] = evt.target.value
                    setForm(newForm)
                    updateParentState(newForm, config)
                }} 
          required={element.required|| false}>
        {element.options.map(option=>
        <FormControlLabel value={option} control={<Radio />} label={option} />)}
        </RadioGroup>
      </FormControl>
        </div> )
      })}</div>)}
      {config.submit?
       <Button type="submit" color="primary" variant="contained" onClick={evt=>{
               evt.preventDefault()
               let stop
               if(config.submit.http.enforce && config.submit.http.enforce == 'onlyrequired'){
                    let submitReady = required
                    submitReady.map(element=>{
                    !!form[element]? submitReady.splice(submitReady.indexOf(element), 1): stop = true})
                    if(submitReady.length == 0){
                        submitHandler(form, setOpen, setSubmit)
                    }
                    else{
                        alert(`${config.submit.alertFrontError?config.submit.alertFrontError:'Please fill in all required fields'}`)}
               }
               else if(config.submit.http.enforce && config.submit.http.enforce == 'all'){
                   let requiredAll = []
                   let missing = []

                   arr.map(element=>{
                       requiredAll.push(element.name)
                       missing.push(element.name)
                   })
                   requiredAll.map((element)=>{
                       if(form[element] != ''){
                        missing.splice(missing.indexOf(element), 1)
                       }
                   })
                   if(missing.length == 0){
                    submitHandler(form, setOpen, setSubmit)
                   }
                   else{
                    console.log(requiredAll, missing)
                    alert(`${config.submit.alertFrontError?config.submit.alertFrontError:'Please fill in all required fields'}`)}
               }

               }}>
        {config.submit.text}</Button>:<div></div>}
        {config.clear?
       <Button type="clear" color="default" variant="contained" onClick={evt=>{
               evt.preventDefault()
               let newState = clearStateObject(arr)
               newParentState(newState, config)

               }}>
        {config.clear.text}</Button>:<div></div>}
        {config.restore?
       <Button type="clear" color="default" variant="contained" onClick={evt=>{
               evt.preventDefault()
               let newState = restoreStateObject(originalState)
               newParentState(newState, config)

               }}>
        {config.restore.text}</Button>:<div></div>}
    </form>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <DialogContent><div style={{display:'flex', justifyContent:'center'}}>
        {submit == 'loading'?<CircularProgress disableShrink />:
        submit=='sucess'?<h5>Registro Creado</h5>:
        <div></div>}
        </div></DialogContent>
    </Dialog>
    
    </div>)
}