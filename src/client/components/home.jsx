import React, { PropTypes } from "react";
import { connect } from "react-redux";
/**/
import { toggleCheck, incNumber, decNumber, saveName } from "../actions";

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = { name: '' };
  }


  render() {
    const props = this.props;
    const { checked, value } = props;


    return (
      <div>
        {/**/}
        <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a></h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked} />
            Checkbox
          </label>
          <div>
            <button type={"button"} onClick={props.onDecrease}>-</button>
            &nbsp;{value}&nbsp;
            <button type={"button"} onClick={props.onIncrease}>+</button>
          </div>
          <div>
            <input type="text" onChange={e => this.setState({ name: e.target.value })} />
            <button onClick={e => this.props.onAddNameClick(this.state.name)}>Add Name</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked,
    value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    },
    onAddNameClick: name => {
      debugger
      dispatch(saveName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
