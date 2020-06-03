import { IState } from '../../reducers';
import { loginAction } from '../../actions/login-action';
import RegisterComponent from '../RegisterComponent/RegisterComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser,
	}	
}

const mapDispatchToProps = {
	loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);