import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ComisionesContainer from "./ComisionesContainer";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({  schemaName, schemaFrom, schemaTo, handleSchemaData,disabled, handleSchema, handleCommissionSchema, commission, addNewForm, forms }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("default");
  const handleOpen = () => {
    setOpen(true);
    setColor("primary");
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (<div>
      <Chip
        icon={<MonetizationOnIcon />}
        label="Esquema de Comisiones"
        clickable
        color={color}
        onClick={handleOpen}
        deleteIcon={<DoneIcon />}
        disabled={disabled}
      />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Esquema de Comisiones</h2>
          <ComisionesContainer 
          schemaName = {schemaName}
          schemaFrom = {schemaFrom}
          schemaTo = {schemaTo}
          handleClose={handleClose}
          handleSchemaData={handleSchemaData}
          forms = {forms}
          addNewForm = {addNewForm}
          commission={commission} 
          handleCommissionSchema={handleCommissionSchema} 
          handleChange={handleSchema} />
        </div>
      </Modal>
    </div>
  );
}
