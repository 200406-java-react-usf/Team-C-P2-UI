import { IState } from '../../reducers';
import NavBarComponent from '../LoginComponent/LoginComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser,
		errorMessage: state.login.errorMessage
	}
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);