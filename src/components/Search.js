import React from "react";
import { connect } from "react-redux";
import * as action from "./../action/index";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e) {
    var k = e.target.value;
    // set state
    this.setState({
      keyWord : k
    });
  }

  onSearch() {
    this.props.onSearch(this.state.keyWord);
  }

  render() {
    var keyWord = this.state.keyWord;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputAmount"
              placeholder="Enter your key"
              value={keyWord}
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onSearch}
              >
                <span className="fa fa-search"></span>&nbsp;Search
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // keyWord: state.onSearch,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // reutrn list function , call
  return {
    onSearch: (k) => {
      dispatch(action.onSearch(k));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
