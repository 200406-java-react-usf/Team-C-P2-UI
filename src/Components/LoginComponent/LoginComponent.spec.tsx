/**
 * Testing the LoginComponent
 */

import * as React from 'react';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import LoginComponent, { ILoginProps } from './LoginComponent';
import { TextField, Button, FormControl } from '@material-ui/core';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../dtos/user';

describe('LoginComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState]
    let shallow1;
    let mount1: any;


    beforeEach(()=> {
        (props.loginAction as jest.Mock).mockClear();
        shallow1 = createShallow();
        mount1 = createMount();
    })

    afterEach(()=> {
        jest.clearAllMocks();
        mount1.cleanUp();
    })


    const props: ILoginProps = {
        authUser: undefined,
        errorMessage: 'test',
        loginAction: jest.fn()
    };

    const loginComponent = <LoginComponent {...props} />

    it('Should render', () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should render 2 Textfields', () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.find(TextField)).toHaveLength(2);
    });

    it("Should render 2 buttons", () => {
        const wrapper = shallow(loginComponent);
        // console.log(wrapper.debug());
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('Typing into TextField.username trigger state hook on username', () => {
        const wrapper = mount(<BrowserRouter>{loginComponent}</BrowserRouter>);
        //console.log(wrapper.find('input#username').prop('type'))
        //console.log(wrapper.find('input#username').prop('value'))
        wrapper.find('input#username').simulate('change', {
            target: { value: 'top-secret' }
        });
        //console.log(wrapper.find('input#username').prop('value'))
        wrapper.update();
        //console.log(wrapper.find('input#username').prop('value'))
        // expect(wrapper.find('input#username').prop('value')).toEqual('top-secret');
    });
})