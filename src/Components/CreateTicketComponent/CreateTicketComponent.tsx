import React, { useState } from 'react';
import { createStyles, Theme, makeStyles, Grid, TextField, Button, InputLabel, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		Container: {
			display: "flex",
			justifyContent: "center",
			margin: 'auto',
			marginTop: 40,
			padding: 20,
			maxWidth: '50%'
		},
		root: {
			'& > *': {
			  margin: theme.spacing(1),
			  maxwidth: '25ch',
			},
			textAlign: 'center'
		}, 
		form: {
			justifyContent: 'center',
		},
		input: {
			paddingBottom: '1em'
		},
		link: {
			textDecoration: 'none',
			fontWeight: 'bolder'
		},
		label: {
			textAlign: 'left',
			paddingBottom: '.5em',
			marginLeft: '1em'
		}
	}));

function CreateTicketComponent() {

	const classes = useStyles();

	const [authorId, setAuthorId] = useState('');
	const [cost, setCost] = useState('');
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [departure, setDeparture] = useState('');
	const [arrival, setArrival] = useState('');

	let updateTicketForm = (e: any) => {
		switch(e.target.id) {
			case 'author_id':
				setAuthorId(e.target.value);
			break;
			case 'cost':
				setCost(e.target.value);
			break;
			case 'origin':
				setOrigin(e.target.value);
			break;
			case 'destination':
				setDestination(e.target.value);
			break;
			case 'departure':
				setDeparture(e.target.value);
			break;
			case 'arrival':
				setArrival(e.target.value);
			break;
			default:
				console.warn(`Improper binding detected on element with id: ${e.target.id}`);
		}
	}

	const createTicket = async () => {
		
	}

	return (
		<>
			<Card raised={true} className={classes.Container}>
				<br/>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField className={classes.input} onChange={updateTicketForm} type="number" label="$ Cost" variant="outlined" />
						<br/>
					<TextField className={classes.input} onChange={updateTicketForm} type="text" label="Origin" variant="outlined" />
						<br/>
					<TextField className={classes.input} onChange={updateTicketForm} type="text" label="Destination" variant="outlined" />
						<br/>
					<InputLabel className={classes.label}> Departure</InputLabel>
					<TextField className={classes.input} onChange={updateTicketForm} type="date" variant="outlined" />
						<br/>
					<InputLabel className={classes.label}> Arrival</InputLabel>
					<TextField className={classes.input} onChange={updateTicketForm} type="date" variant="outlined" />
						<br/>
				</form>

				<Link to="/login" className={classes.link}> 
					<Button onClick={createTicket} variant="contained">CREATE TICKET</Button>
				</Link>

				{/* {	props.errorMessage ? <Alert severity="error" variant="outlined">{props.errorMessage}</Alert> : <></> } */}
			</Grid>

			</Card>
		</>
	)
}

export default CreateTicketComponent;