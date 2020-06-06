import React, { useEffect, useState } from 'react';
import { Card, Theme, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import { getTopTen } from '../../remote/recommendation-service';

export interface IRecProps {
	destination: string;
	errorMessage: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Container: {
			display: 'block',
			justifyContent: "left",
			margin: 'auto',
			marginTop: 40,
			padding: 20,
			width: '85%',
			backgroundColor:'#48967D',
		},
		link: {
			textDecoration: 'none',
			fontWeight: 'bolder'
		},
		button: {
			marginTop: '2em',
			backgroundColor: '#0A3729',
			color: '#FAFDFC'
		},
		media: {
			alignContent: 'left',
			backgroundColor:'#48967D',
			height:'150px',
			width: '150px',
		},
		title: {
			paddingBottom: '1em',
			color: '#0A3729',
			fontWeight: 'bolder'
		},
		details: {
			display: 'flex',
		},
		description: {
			padding: '1em'
		}
	}));

/**
 * Takes in a ticket destination as properties an renders a view including a list of recommendations based on the location
 * @param props ticket destination, error message 
 */
function RecommendationComponent(props: IRecProps) {

	const classes = useStyles();

	const [state, setState] = useState([] as any[]);

	useEffect(() => {
		const fetchTopTen = async () => {
			let topTen: any[];

			topTen = await getTopTen(props.destination)

			let points: any[] = [];

			for(let poi of topTen) {
				points.push(
					
					<Card className={classes.Container}>
						
						<Typography className={classes.title} >{poi.name}</Typography>
						
						<div className={classes.details}>
							<div >
								<Card raised={true} className={classes.media}>
									<img src={poi.thumbnail_url} alt="UNAVAILABLE"/>
								</Card>
							</div>

							<div className={classes.description} >
								<Typography>{poi.perex}</Typography>
							</div>
						</div>	
						<Button href={poi.url} target="_blank" className={classes.button}>
							VIEW MAP
						</Button>
					</Card>
				)
			}
			setState(points);
		}
		fetchTopTen();

	},[]);

	return (
		
		<> 		
			{state}
		</>
	)
}

export default RecommendationComponent;