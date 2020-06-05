import React, { useEffect, useState } from 'react';
import { Card, Theme, makeStyles, createStyles, Typography, CardActionArea, Button, CardContent, CardMedia } from '@material-ui/core';
import { getTopTen } from '../../remote/recommendation-service';
import { Link } from 'react-router-dom';

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
			backgroundColor: '#0A3729',
			color: '#FAFDFC'
		},
		media: {
			alignContent: 'left',
			backgroundColor:'#48967D',
			height:'150px',
			width: '150px'
		},
		title: {
			display: 'block',
		},
		details: {
			display: 'flex',
			flexDirection: 'column'
		}
	}));

function RecommendationComponent(props: IRecProps) {

	const classes = useStyles();

	const [state, setState] = useState([] as any[]);

	useEffect(() => {
		const fetchTopTen = async () => {
			let topTen: any[];

			// topTen = await getTopTen(props.destination)

			let tempTopTenTampa = 
			
			[
				{
					"id": "poi:58084",
					"level": "poi",
					"rating": 0.10573459447616,
					"rating_local": 0.5286729723808,
					"quadkey": "021230030220022222332",
					"location": {
						"lat": 47.6061777,
						"lng": -122.3425647
					},
					"bounding_box": null,
					"name": "Seattle Great Wheel",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Great Wheel",
					"url": "https://go.sygic.com/travel/place?id=poi:58084",
					"duration": 1800,
					"marker": "sightseeing:ferris_wheel",
					"categories": [
						"sightseeing",
						"playing"
					],
					"parent_ids": [
						"poi:2463995",
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The Seattle Great Wheel is a giant Ferris wheel at Pier 57 on Elliott Bay in Seattle, Washington.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:58084"
				},
				{
					"id": "poi:22478",
					"level": "poi",
					"rating": 0.093329160043761,
					"rating_local": 0.46664580021880503,
					"quadkey": "021230030220200311010",
					"location": {
						"lat": 47.6023507,
						"lng": -122.3337236
					},
					"bounding_box": null,
					"name": "Underground Tour",
					"name_suffix": "Seattle, United States",
					"original_name": "Underground Tour",
					"url": "https://go.sygic.com/travel/place?id=poi:22478",
					"duration": 5400,
					"marker": "sightseeing",
					"categories": [
						"sightseeing"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The Seattle Underground is a network of underground passageways and basements in downtown Pioneer Square, Seattle, Washington, United…",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:22478"
				},
				{
					"id": "poi:51978",
					"level": "poi",
					"rating": 0.071578635422538,
					"rating_local": 0.35789317711269003,
					"quadkey": "021230032002013001321",
					"location": {
						"lat": 47.4495691,
						"lng": -122.3084876
					},
					"bounding_box": {
						"south": 47.4280559,
						"west": -122.3207347,
						"north": 47.4668598,
						"east": -122.2959738
					},
					"name": "Seattle-Tacoma International Airport",
					"name_suffix": "Washington, United States",
					"original_name": "Seattle-Tacoma International Airport (SEA)",
					"url": "https://go.sygic.com/travel/place?id=poi:51978",
					"duration": 1800,
					"marker": "traveling:airport:international",
					"categories": [
						"traveling"
					],
					"parent_ids": [
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "Seattle–Tacoma International Airport, also referred to as Sea–Tac Airport or Sea–Tac (), is the primary commercial airport serving the…",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:51978"
				},
				{
					"id": "poi:12135",
					"level": "poi",
					"rating": 0.072205323767391,
					"rating_local": 0.36102661883695497,
					"quadkey": "021230030220023222022",
					"location": {
						"lat": 47.6066885,
						"lng": -122.3326628
					},
					"bounding_box": {
						"south": 47.6062918,
						"west": -122.3333097,
						"north": 47.6070911,
						"east": -122.331995
					},
					"name": "Central Library",
					"name_suffix": "Seattle, United States",
					"original_name": "Central Library",
					"url": "https://go.sygic.com/travel/place?id=poi:12135",
					"duration": 3600,
					"marker": "sightseeing:architecture:modern",
					"categories": [
						"sightseeing"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The Seattle Public Library's Central Library is the flagship library of The Seattle Public Library system.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:12135"
				},
				{
					"id": "poi:12104",
					"level": "poi",
					"rating": 0.053259012543325,
					"rating_local": 0.266295062716625,
					"quadkey": "021230030220022220013",
					"location": {
						"lat": 47.6078221,
						"lng": -122.3431953
					},
					"bounding_box": {
						"south": 47.6073105,
						"west": -122.3440103,
						"north": 47.6080771,
						"east": -122.3420636
					},
					"name": "Seattle Aquarium",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Aquarium",
					"url": "https://go.sygic.com/travel/place?id=poi:12104",
					"duration": 7200,
					"marker": "discovering:zoo:aquarium",
					"categories": [
						"discovering"
					],
					"parent_ids": [
						"poi:2463271",
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The Seattle Aquarium is a public aquarium opened in 1977 and located on Pier 59 on the Elliott Bay waterfront in Seattle, Washington, USA.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:12104"
				},
				{
					"id": "poi:58140",
					"level": "poi",
					"rating": 0.030862140486866,
					"rating_local": 0.15431070243432998,
					"quadkey": "021230021331113233321",
					"location": {
						"lat": 47.621173,
						"lng": -122.34965
					},
					"bounding_box": null,
					"name": "Seattle Center Monorail",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Center Monorail",
					"url": "https://go.sygic.com/travel/place?id=poi:58140",
					"duration": 1800,
					"marker": "sightseeing",
					"categories": [
						"sightseeing",
						"traveling"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The Seattle Center Monorail is an elevated straddle-beam monorail line in Seattle, Washington, United States.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:58140"
				},
				{
					"id": "poi:12122",
					"level": "poi",
					"rating": 0.031815390929875,
					"rating_local": 0.15907695464937502,
					"quadkey": "021230030220022231130",
					"location": {
						"lat": 47.6077007,
						"lng": -122.3385576
					},
					"bounding_box": null,
					"name": "Seattle Art Museum",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Art Museum",
					"url": "https://go.sygic.com/travel/place?id=poi:12122",
					"duration": 7200,
					"marker": "discovering:museum",
					"categories": [
						"discovering"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "The museum specialises on modern art and displays its collection in a fresh and innovative way.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:12122"
				},
				{
					"id": "poi:2442809",
					"level": "poi",
					"rating": 0.024735172695222,
					"rating_local": 0.12367586347611001,
					"quadkey": "021230021331113230302",
					"location": {
						"lat": 47.6221751,
						"lng": -122.3512787
					},
					"bounding_box": {
						"south": 47.6186618,
						"west": -122.3553298,
						"north": 47.6254015,
						"east": -122.3477592
					},
					"name": "Seattle Center",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Center",
					"url": "https://go.sygic.com/travel/place?id=poi:2442809",
					"duration": 1800,
					"marker": "relaxing:park",
					"categories": [
						"sightseeing",
						"relaxing"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": "Seattle Center is an arts, educational, tourism and entertainment center in Seattle, Washington, United States.",
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:2442809"
				},
				{
					"id": "poi:580958",
					"level": "poi",
					"rating": 0.022559292960132,
					"rating_local": 0.11279646480066,
					"quadkey": "021230030220203101330",
					"location": {
						"lat": 47.5980083,
						"lng": -122.3248559
					},
					"bounding_box": null,
					"name": "Seattle Pinball Museum",
					"name_suffix": "Seattle, United States",
					"original_name": "Seattle Pinball Museum",
					"url": "https://go.sygic.com/travel/place?id=poi:580958",
					"duration": 3600,
					"marker": "discovering:museum",
					"categories": [
						"discovering"
					],
					"parent_ids": [
						"city:362",
						"region:28582",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": null,
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:580958"
				},
				{
					"id": "poi:58117",
					"level": "poi",
					"rating": 0.017818897076998,
					"rating_local": 0.08909448538498999,
					"quadkey": "021230012221112223012",
					"location": {
						"lat": 48.0935278,
						"lng": -122.1881865
					},
					"bounding_box": {
						"south": 48.0917423,
						"west": -122.1894765,
						"north": 48.0952734,
						"east": -122.1869932
					},
					"name": "Seattle Premium Outlets",
					"name_suffix": "Washington, United States",
					"original_name": "Seattle Premium Outlets",
					"url": "https://go.sygic.com/travel/place?id=poi:58117",
					"duration": 3600,
					"marker": "shopping:centre:mall",
					"categories": [
						"shopping"
					],
					"parent_ids": [
						"region:28564",
						"region:196",
						"country:43",
						"continent:6"
					],
					"perex": null,
					"customer_rating": null,
					"star_rating": null,
					"star_rating_unofficial": null,
					"thumbnail_url": "https://media-cdn.sygictraveldata.com/media/poi:58117"
				}
			]

			let points: any[] = [];

			for(let poi of tempTopTenTampa) {
				points.push(
					
					<Card className={classes.Container}>
						
						<Typography className={classes.title} >{poi.name}</Typography>
						<div className={classes.details}>
							<div >
								<Card raised={true} className={classes.media}>
									<img src={poi.thumbnail_url} alt="UNAVAILABLE"/>
								</Card>
							</div>

							<div className={classes.details}>
								<Typography>test</Typography>
							</div>
						</div>	
						<Button href={poi.url} target="_blank" className={classes.link}>
							MAP
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