import { connect } from "react-redux";
import addtoCart, { RemovefromCart } from "../services/Actions/actions.js";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  data: state
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addtoCart(data)),
  removefromCartHandler: (data) => dispatch(RemovefromCart(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
