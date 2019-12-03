import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'; 
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done'
import PhoneIcon from '@material-ui/icons/Phone';

import AltaUsuarios from './AltaUsuarios'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll'
  },
}));

export default function SimpleModal({disabled, contact, handleMainContact, UsersSchema, mainUser}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState('default')

  const handleOpen = () => {
    setOpen(true);
    setColor('primary')
  };

 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Chip
        icon={<PhoneIcon />}
        label="Contactos"
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
          <h2 id="simple-modal-title">Alta de Usuarios</h2>
      <AltaUsuarios 
          mainUser={mainUser} 
          UsersSchema={UsersSchema} 
          contact={contact} 
          handleMainContact={handleMainContact}
          handleClose={handleClose}/>         
        </div>
      </Modal>
    </div>
  );
}
