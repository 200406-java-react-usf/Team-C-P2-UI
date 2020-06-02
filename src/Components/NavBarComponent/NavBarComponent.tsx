import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Divider, IconButton, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { Link } from 'react-router-dom';
import { User } from '../../dtos/user';

interface INavBarProps {
	authUser: User;
}
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: '#0A3729'
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor: '#285345'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: '#285345'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      backgroundColor: '#285345'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: 'none',
      fontWeight: 'bolder',
      color: 'white'
    },
    icon: {
      color: 'white'
	},
	
  }),
);

function NavBarComponent(props: INavBarProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Travel App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        	<Link to="/home" className={classes.link}>
            	<ListItem button>
                	<ListItemIcon><HomeOutlinedIcon className={classes.icon} /></ListItemIcon>
                <ListItemText>
                	HOME
                </ListItemText>
            	</ListItem>
            </Link>

        { props.authUser ?
        <>
			{ props.authUser?.role !== 'Admin' ?
			<Link to="/tickets" className={classes.link}>	
				<ListItem button>
					<ListItemIcon><LoyaltyOutlinedIcon className={classes.icon}/></ListItemIcon>
					<ListItemText>
						TICKETS
					</ListItemText>
				</ListItem>
			</Link>
          : <></> }

			{ props.authUser?.role === 'Admin' ?
			<Link to="/users" className={classes.link}>
				<ListItem button>
					<ListItemIcon><LoyaltyOutlinedIcon className={classes.icon}/></ListItemIcon>
					<ListItemText>
						USERS
					</ListItemText>
				</ListItem>
			</Link>	
        : <></> }

			<Link to="/logout" className={classes.link}>
				<ListItem button>
					<ListItemIcon><ExitToAppOutlinedIcon className={classes.icon}/></ListItemIcon>
					<ListItemText>
						EXIT
					</ListItemText>
				</ListItem>
			</Link>
        </>
        : <></>}

		{ !props.authUser ? 
		<Link to="/login" className={classes.link}>
			  <ListItem button>
                <ListItemIcon><VpnKeyOutlinedIcon className={classes.icon}/></ListItemIcon>
                <ListItemText>
            		LOGIN
                </ListItemText>
        	</ListItem>
		</Link>
		: <></> }

      </Drawer>
    </div>
  );
}

export default NavBarComponent;