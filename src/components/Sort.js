import React from "react";
import {connect} from "react-redux";
import * as action from "./../action/index";

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(sortBy, sortValue) {
    this.props.onSort(sortBy,sortValue);
  }

  render() {
    var sortBy = this.props.sort.sortBy;
    var sortValue = this.props.sort.sortValue;
    var check_sort = 1;
    if(sortBy === 'name' && sortValue === -1){
      check_sort = 2;
    }else if (sortBy === 'status' && sortValue === 1){
      check_sort = 3;
    }else if(sortBy === 'status' && sortValue === -1){
      check_sort = 4;
    }else{
      check_sort = 1;
    }
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Sort by &nbsp;
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li onClick={this.onClick.bind(this, "name", 1)}>
              <a role="button" className={check_sort === 1 ? "sort_selected" : ""} >
                <span
                  className="fa fa-sort-alpha-asc "
                  aria-hidden="true"
                ></span>
                {""}
                &nbsp;A to Z
              </a>
            </li>
            <li onClick={this.onClick.bind(this, "name", -1)}>
              <a role="button" className={check_sort === 2 ? "sort_selected" : ""}>
                <span className="fa fa-sort-alpha-desc"></span>&nbsp; Z to A
              </a>
            </li>
            <li role="separator" class="divider"></li>
            <li onClick={this.onClick.bind(this, "status", 1)}>
              <a role="button" className={check_sort === 3 ? "sort_selected" : ""} >Show status</a>
            </li>
            <li onClick={this.onClick.bind(this, "status", -1)}>
              <a role="button" className={check_sort === 4 ? "sort_selected" : ""}>Hide status</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort : state.onSort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // reutrn list function , call
  return {
    onSort : (sortBy,sortValue) => {
      dispatch(action.onSort(sortBy,sortValue));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
