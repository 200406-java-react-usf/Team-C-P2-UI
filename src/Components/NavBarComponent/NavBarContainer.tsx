import { IState } from '../../reducers';
import { connect } from 'react-redux';
import NavBarComponent from '../NavBarComponent/NavBarComponent';

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser
	}
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);