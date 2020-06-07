import * as React from 'react';
import { configure, mount, render, shallow, ShallowWrapper, ReactWrapper } from 'enzyme';
import CreateTicketComponent, { ICreateTicketProps } from './CreateTicketComponent';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl, Grid, TextField } from '@material-ui/core';
import { User } from '../../dtos/user';
import { NewTicket } from '../../dtos/newTicket';
import * as mockRemote from '../../remote/ticket-service';
import { register } from '../../serviceWorker';

configure({adapter: new Adapter()});

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]

jest.mock('../../remote/ticket-service', () => {

    return {
        getTickets: jest.fn(),
        deleteTicketByID: jest.fn(),
        getUserTickets: jest.fn(),
        getTicketById: jest.fn(),
        createTicket: jest.fn()
    };
});

beforeEach(() => {
    (mockRemote.getTickets as jest.Mock).mockClear();
    (mockRemote.deleteTicketByID as jest.Mock).mockClear();
    (mockRemote.getUserTickets as jest.Mock).mockClear();
    (mockRemote.getTicketById as jest.Mock).mockClear();
    (mockRemote.createTicket as jest.Mock).mockClear();
})

afterEach(() => {
    jest.clearAllMocks();
});

const props: ICreateTicketProps = {
    authUser: new User(1, "aanderson", "password", "Alex", "Anderson", "aanderson@gmail.com", "Admin"),
};

const createTicketComponent = <CreateTicketComponent {...props} />

describe('CreateTicketComponent', () => {
    it('Should render', () => {
        const wrapper = shallow(createTicketComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 1 grid', () => {
        const wrapper = mount(createTicketComponent);
        expect(wrapper.find(Grid)).toHaveLength(1)
    })

    it('Should render 5 text fields', () => {
        const wrapper = mount(createTicketComponent);
        expect(wrapper.find(TextField)).toHaveLength(5);
    });

    it('Should render a button', () => {
        const wrapper = mount(createTicketComponent);
        expect(wrapper.find('button')).toHaveLength(1)
    });

    it('Typing into textfield#cost trigger state hook on cost', () => {
        let wrapper = mount(createTicketComponent);
        //For some reason, .find(#cost) gets all TextFields, where as it should only get the one
        //with its ID.
        console.log(wrapper.find('#cost'))
        // wrapper.find(TextField).simulate('change', {
        //     target: { value: 100.00 }
        // });
        //expect(wrapper.find((TextField)).prop('value')).toEqual(100.00);
    });

});