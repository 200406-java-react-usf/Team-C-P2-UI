import { IState } from "../../reducers";
import { connect } from "react-redux"
import RecommendationComponent from './RecommendationComponent';

const mapStateToProps = (state: IState) => {
	return {
		destination: state.recommend.destination,
		errorMessage: state.recommend.errorMessage
	}
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationComponent);