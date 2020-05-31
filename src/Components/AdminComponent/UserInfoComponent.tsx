import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//adding material alert box
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TextField, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { forwardRef } from 'react';
import MaterialTable, { MTableToolbar, MTablePagination, MTableBody } from 'material-table';
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



const useStyles = makeStyles((theme: Theme) => 
	createStyles({
	
	
}));


function UserInfoComponent() {

    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    const [open, setOpen] = React.useState(false);

    const [rowDataId, setRowDataId] = useState(null);

    //@ts-ignore
    const handleClickOpen = (id) => {
      console.log(id)
      setRowDataId(id)
      setOpen(true);
    };
  
    //@ts-ignore
    const handleClose = () => {
      setOpen(false);
    };



	const classes = useStyles();


	return (
    
		<div style={{backgroundColor:'#FAFDFC'}}>
    <h1 style={{textAlign:'center'}}> USER </h1>
    <Container>
    {/* adding material Table */}
    <MaterialTable
        //add the component
        components={{
            Toolbar: props => (
                <div style={{ backgroundColor: 'white' }}>
                    <MTableToolbar {...props} />
                </div>
            )
        }}
          columns={[
            { title: "ID", field: "id" },
            { title: "USERNAME", field: "username" },
            { title: "PASSWORD ", field: "password" },
            { title: "FIRSTNAME", field: "firstname"},
            { title: "LASTNAME", field: "lastname"},
            { title: "EMAIL", field: "email"},
            { title: "ROLE", field: "role"},
          ]}
          icons={tableIcons}
          data={[
            { id: "1", username: "Kind", password: "password", firstname: "Cat", lastname: "Tom", email: "lala@gmail.com", role: "Admin"},
            { id: "2", username: "Hope", password: "password", firstname: "Cat", lastname: "Tom", email: "lala@gmail.com", role: "User"},
            { id: "3", username: "Happy", password: "password", firstname: "Cat", lastname: "Tom", email: "lala@gmail.com", role: "User"},
            { id: "4", username: "Love", password: "password", firstname: "Cat", lastname: "Tom", email: "lala@gmail.com", role: "User"}
          ]}
          title=""
          //to add select row to change color
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
            //to provide the action on the table
            actions={[
              rowData => ({
                icon: () => <DeleteOutline/>,
                tooltip: 'Delete User',
                //@ts-ignore
                onClick: (event, rowData) => {handleClickOpen(rowData.id)}
                // {window.confirm("You want to delete " + rowData.name); console.log(event)}
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
    </Container>
    {/* dialog box */}
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Data Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are want to delete {rowDataId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

		</div>
	)
}

export default UserInfoComponent;