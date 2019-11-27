import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { inherits } from "util";

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

export default function SimpleModal({ handleSchema }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("default");
  const [commisionSchema, setCommision] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
    setColor("primary");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = arr => {
    handleSchema({ target: { name: "CommissionScheme", value: arr[0] } });
    setOpen(false);
  };

  return (
    <div>
      <Chip
        icon={<MonetizationOnIcon />}
        label="Esquema de Comisiones"
        clickable
        color={color}
        onClick={handleOpen}
        deleteIcon={<DoneIcon />}
      />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Esquema de Comisiones</h2>
          <ComisionesContainer handleChange={handleChange} />
        </div>
      </Modal>
    </div>
  );
}
