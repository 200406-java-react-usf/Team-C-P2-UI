import { IState } from "../../reducers"
import { connect } from "react-redux"
import TicketComponent from "./TicketComponent"
import { recommendAction } from "../../actions/recommend-action"

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser
	}
}

const mapDispatchToProps = {
	recommendAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketComponent)