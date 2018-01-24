import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => {
 return { giphys: state.giphys };
};

const mapDispatchToProps = dispatch => {
 return {
  fetchSearchGiphys: searchWord => dispatch(fetchSearchGiphys(searchWord))
 };
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(GiphysSearch);