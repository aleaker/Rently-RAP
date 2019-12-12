import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as actions from "../store/actions/userActions";
import { bindActionCreators } from "redux";
import comisionTable from "../comisiones/comisionTable";
import ListaEmpresasContainer from "../abmEmpresas/Containers/ListaEmpresasContainer";
import ShowThem from "../AdminEmpresa/Salespeople/ShowThem";
import ShowInactive from "../AdminEmpresa/Salespeople/ShowInactive";
import EditSalesperson from "../AdminEmpresa/Salespeople/EditSalesperson";
import CreateSalesperson from "../AdminEmpresa/Salespeople/CreateSalesperson";
import Admins from "../AdminEmpresa/Salespeople/Admins";
import EditAdmin from "../AdminEmpresa/Salespeople/EditAdmin";
import EditarEmpresas from "../abmEmpresas/editarEmpresas/EditarEmpresas";
import RentalFormContainer from "../RentalForm/RentalFormContainer";
import AbmEmpresasContainer from "../abmEmpresas/AbmEmpresasContainer";
import RentalTableContainer from "../RentalForm/RentalTableContainer";
import addComissionsContainer from "../adminEmpresas/Container/addComissionsContainer";
import editComissionContainer from "../adminEmpresas/Container/editComissionContainer";
import Reservation from "../reservationForm/reservationFormContainer";
import CompaniesMenu from './menu/CompaniesMenu'
import RentadorasMenu from './menu/RentadorasMenu'

import Card from "@material-ui/core/Card"
import { Switch, Route, Link, withRouter, BrowserRouter } from "react-router-dom";
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function Dashboard(props) {
  const [loc, setLoc] = React.useState('/')
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleLogout = () => {
    props.logout(props.user);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Affiliate Portal
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link to={'/'}>
          <ListItem>
            
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary={"Rently"} />
          </ListItem>
            
          </ListItem>
          </Link>
          <Divider />
        </List>
        <Divider />
        <List>
       <CompaniesMenu drawerState={open}/>
       <RentadorasMenu/>
       </List>
        {/* <List>
          <Link to={'/'}>
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary={"Reservation"} />
          </ListItem>
          </Link>
          <Link to={'/rentalTable'}>
          <ListItem button>
            <ListItemIcon>
              <EmojiTransportationIcon />
            </ListItemIcon>
            <ListItemText primary={"Car Rentals"} />
          </ListItem>
          </Link>
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Card style={{margin: "1%", padding: "2%"}}>
        <Switch>
          <Route exact path="/rentalTable" component={RentalTableContainer} />

          <Route exact path="/companylist" component={ListaEmpresasContainer} />

          <Route exact path="/" component={Reservation} />

          <Route exact path="/comisiones" component={comisionTable} />

          <Route exact path="/AdminEmpresa/vendedores" component={ShowThem} />
          <Route
            exact
            path="/AdminEmpresa/vendedores/inactivos"
            component={ShowInactive}
          />
          <Route
            exact
            path="/AdminEmpresa/crear/vendedor"
            component={CreateSalesperson}
          />
          <Route
            exact
            path="/AdminEmpresa/editar/vendedor/:id"
            component={EditSalesperson}
          />
          <Route exact path="/AdminEmpresa/admins" component={Admins} />
          <Route exact path="/AdminEmpresa/editar/:id" component={EditAdmin} />
          <Route exact path="/registerRental" component={RentalFormContainer} />

          <Route
            exact
            path="/adminEmpresas/comissions/add"
            component={addComissionsContainer}
          />

          <Route
            exact
            path="/adminEmpresas/comissions/edit/:id"
            component={editComissionContainer}
          />


          <Route exact path="/abmempresas" component={AbmEmpresasContainer} />

          <Route path="/abmempresas/edit" component={EditarEmpresas}/>
          

        </Switch>
        </Card>
      </main>
    </div>
    </BrowserRouter>  
  );
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
