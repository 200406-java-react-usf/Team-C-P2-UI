import * as React from 'react';
import { User } from '../../dtos/user';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import UserInfoComponent, { IAdminProps } from './UserInfoComponent';
import MaterialTable from 'material-table';
import { createFilterOptions } from '@material-ui/lab';

describe('UserInfoComponent', () => {

// const setState = jest.fn();
// const useStateMock: any = (initState: any) => [initState, setState]

// afterEach(()=> {
//     jest.clearAllMocks();
// })

const props: IAdminProps = {
    authUser: undefined
};

const userInfoComponent = <UserInfoComponent {...props} />

    it('Should render', () => {
        const wrapper = shallow(userInfoComponent);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Renders div role is Admin', () => {
        props.authUser = {id:1, username:'aanderson', role:'Admin', email: 'df@h', password: 'pass', firstName: "john", lastName: "Eng"};
        const wrapper = shallow(<UserInfoComponent {...props}/>);
        expect(wrapper.find('h1').text()).toEqual(" USER ");
    });

    it('Renders div role is Admin', () => {
        props.authUser = undefined;
        const wrapper = shallow(<UserInfoComponent {...props}/>);
        expect(wrapper.find('Redirect')).toHaveLength(1);
    });

    it('should have 5 buttons delete(3), update(2)', () => {
        props.authUser = {id:1, username:'aanderson', role:'Admin', email: 'df@h', password: 'pass', firstName: "john", lastName: "Eng"};
        const wrapper = mount(<UserInfoComponent {...props}/>)
        console.log(wrapper.debug());
        expect(wrapper.find('button')).toHaveLength(5)
    });

    it('should have 5 buttons delete(3), update(2)', () => {
        props.authUser = {id:1, username:'aanderson', role:'Admin', email: 'df@h', password: 'pass', firstName: "john", lastName: "Eng"};
        const wrapper = mount(<UserInfoComponent {...props}/>);
        expect(wrapper.find('button')).toHaveLength(5)
    });


})