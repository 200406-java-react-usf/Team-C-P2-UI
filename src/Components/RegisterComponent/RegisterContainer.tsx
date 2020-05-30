import { IState } from '../../reducers';
import { registerAction } from '../../actions/register-action';
import RegisterComponent from '../RegisterComponent/RegisterComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.register.authUser,
		errorMessage: state.register.errorMessage
	}	
}

const mapDispatchToProps = {
	registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);