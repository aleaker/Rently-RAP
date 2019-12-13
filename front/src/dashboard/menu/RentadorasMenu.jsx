import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link } from 'react-router-dom'
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import DirectionsCarSharpIcon from '@material-ui/icons/DirectionsCarSharp';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: 'black',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(1)
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DirectionsCarSharpIcon style={{color:'black'}} />
        </ListItemIcon>
        <ListItemText primary="Rentadoras" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding style={{paddingLeft: '3%'}}>
        <Link to={'/registerRental'}>
          <ListItem button>
            <ListItemIcon>
              <AddOutlinedIcon  />
            </ListItemIcon>
            <ListItemText primary={"Alta de Rentadora"} />
          </ListItem>
          </Link>
        <Link to={'/rentalTable'}>
          <ListItem button>
            <ListItemIcon>
              <DnsOutlinedIcon  />
            </ListItemIcon>
            <ListItemText primary={"Rentadoras Activas"} />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      </div>
  );
}