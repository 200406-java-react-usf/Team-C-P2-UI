import React, { useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//adding material alert box
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TextField, Grid, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { forwardRef } from 'react';
import MaterialTable, { MTableToolbar, MTablePagination, MTableBody, Column } from 'material-table';
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
import { getTickets } from '../../remote/ticket-service';

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

function TicketComponent() {

	const classes = useStyles();

	const { useState } = React;
	const [selectedRow, setSelectedRow] = useState(null);

	const [open, setOpen] = React.useState(false);

	const [rowDataId, setRowDataId] = useState(null);

	const handleClickOpen = (id: any) => {
		console.log(id);
		setRowDataId(id);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	let tickets: any[] = [];

	useEffect(() => {
			async function fetchData() {
				const response = await getTickets();

				for(let ticket of response) {
					tickets.push(ticket);
				}
			}
	},[])

	return (
		<> 
		<Card raised={true} className={classes.Container}>
			<MaterialTable
				components={{
					Toolbar: props => (
						<div style={{ backgroundColor: 'white' }}>
							<MTableToolbar {...props} />
						</div>
					)
				}}
				columns={[
					{ title: "ID", field: "id" },
					{ title: "AUTHOR", field: "author" },
					{ title: "COST ", field: "cost" },
					{ title: "ORIGIN", field: "origin"},
					{ title: "DESTINATION", field: "destination"},
					{ title: "DEPARTURE", field: "departure"},
					{ title: "ARRIVAL", field: "arrival"},
				]}
				icons={tableIcons}
				data={tickets}
				title=""
				//Change row color when selected
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
					//Row delete action
					actions={[
					rowData => ({
						icon: () => <DeleteOutline/>,
						tooltip: 'Delete User',
						//@ts-ignore
						onClick: (event, rowData) => {handleClickOpen(rowData.id)}
					})
					]}
					//to change the 'Action' on the column
					localization={{
					header: {
					actions: 'DELETE'
					},
					body: {
						emptyDataSourceMessage: 'No records to display',
						filterRow: {
							filterTooltip: 'Filter'
						},
					}
					}} 
			/>
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
					<Button onClick={handleClose} color="primary" autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>

			
		</>
	)
}

export default TicketComponent;