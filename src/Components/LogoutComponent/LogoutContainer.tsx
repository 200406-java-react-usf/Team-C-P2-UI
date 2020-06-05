import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { logoutAction } from '../../actions/logout-action';
import LogoutComponent from '../LogoutComponent/LogoutComponent';

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser,
		errorMessage: state.logout.errorMessage
	}
}

const mapDispatchToProps = {
	logoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);