import React, { useEffect, useState } from 'react';
import { Card, Theme, makeStyles, createStyles, CardMedia, Typography } from '@material-ui/core';
import { getTopTen } from '../../remote/recommendation-service';

export interface IRecProps {
	destination: string;
	errorMessage: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Container: {
			display: "flex",
			justifyContent: "center",
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
			backgroundColor: '#0A3729',
			color: '#FAFDFC'
		},
		media: {

		}
	}));

function RecommendationComponent(props: IRecProps) {

	const classes = useStyles();

	const [state, setState] = useState([] as any[]);

	useEffect(() => {
		const fetchTopTen = async () => {
			let topTen: any[];

			topTen = await getTopTen(props.destination)

			console.log(topTen);
			
			let points: any[] = [];

			for(let poi of topTen) {
				points.push(
					
					<Card className={classes.Container}>
						<CardMedia
							className={classes.media}
						/>
						<img src={poi.thumbnail_url} alt="thumbnail"/>
						{console.log('https://media-cdn.sygictraveldata.com/media/' + poi.id)}
						<Typography>{poi.name}</Typography>
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