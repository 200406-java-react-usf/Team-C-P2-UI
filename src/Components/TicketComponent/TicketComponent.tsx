import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//adding material alert box
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Card } from '@material-ui/core';
import { forwardRef } from 'react';
import MaterialTable, { Column } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { deleteTicketByID, getUserTickets } from '../../remote/ticket-service';
import { Ticket } from '../../dtos/ticket';
import { Alert } from '@material-ui/lab';
import { User } from '../../dtos/user';

export interface ITicketProps {
	authUser: User;
}

export interface TableState {
	columns: Array<Column<Ticket>>;
	data: Ticket[];
}

const tableIcons = {
  Add: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref:React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles({
	Container: {
		display: "flex",
        justifyContent: "center",
        margin: 'auto',
        marginTop: 40,
		padding: 20,
		maxWidth: '85%',
		backgroundColor:'#48967D',
	}
  });

function TicketComponent(props: ITicketProps) {
	
	const classes = useStyles();

	const { useState } = React;
	const [selectedRow, setSelectedRow] = useState(null);
	const [open, setOpen] = React.useState(false);
	const [rowDataId, setRowDataId] = useState(null);
	const [ticketsState, setTicketsState] = useState([] as Ticket[]);
	const [errorMessage, setErrorMessage] = useState('');


	const handleClickOpen = (id: any) => {
		console.log(id);
		setRowDataId(id);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const confirmClose = async () => {
		//@ts-ignore
		await deleteTicketByID(rowDataId);
		setOpen(false);
		await fetchTickets();
		
	};

	const [state, setState] = React.useState<TableState>({
		columns: [
			{title: 'Id', field: "id", editable: 'never'},
			{title: 'Author', field: "author_id", editable: 'never'},
			{title: 'Cost', field: "cost", type: 'currency', editable: 'never'},
			{title: 'Origin', field: 'origin', editable: 'never'},
			{title: 'Destination', field: 'destination', editable: 'never', type: 'date'},
			{title: 'Departure', field: 'departureTime', editable: 'never', type: 'date'},
			{title: 'Arrival', field: 'arrivalTime', editable: 'never'}
		],
			data: [],
		});

	let tickets: any[] = [];
	
		let fetchTickets = async () => {
			let result = await getUserTickets(props.authUser.id);
			
			for(let ticket of result) {
				let depart = (new Date(ticket.departureTime).toDateString());
				let arrive = (new Date(ticket.arrivalTime).toDateString());
				ticket.departureTime = depart;
				ticket.arrivalTime = arrive;

				tickets.push(ticket);
			}		
			setTicketsState(tickets);
		}

	useEffect(() => {
		fetchTickets();	
	},[]);	
	
	return (
		<> 
		<Card raised={true} className={classes.Container}>
			<MaterialTable 
				title="Tickets"
				columns={state.columns}
				data={ticketsState}
				icons={tableIcons}
				//@ts-ignore
				onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow?.tableData.id))}
				options={{
					headerStyle: {
						backgroundColor: '#0A3729',
						color: '#FFF'
					},
					rowStyle: rowData => ({
						backgroundColor: (selectedRow === rowData.tableData.id) ? '#83C3AF' : '#FFF'
					})
				}}
				actions={[
					rowData => ({
						icon: () => <DeleteOutline/>,
						tooltip: 'Delete Ticket',
						//@ts-ignore
						onClick: (event, rowData) => {handleClickOpen(rowData.id)}
					})
				]}
				localization={{
					header: {
						actions: 'DELETE'
					},
					body: {
						emptyDataSourceMessage: 'No Records to Display',
						filterRow: {
							filterTooltip: 'Filter'
						},
					}
				}}

				/>
				<Card>
					{errorMessage ? <Alert severity="error">{errorMessage}</Alert> : <></> }
				</Card>
		</Card>	

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Delete Data Confirm"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to delete ticket id: {rowDataId}?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={confirmClose} color="primary" autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default TicketComponent;