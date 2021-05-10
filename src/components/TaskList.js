import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as action from "./../action/index";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  // bắt sự kiện OnChange của name và status
  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var filterName =
      name === "filterName" ? value : this.props.valueFilter.name;
    var filterStatus =
      name === "filterStatus" ? value : this.props.valueFilter.status;
    // set state for filter in table
    this.props.onFilter(filterName, filterStatus);
  }
  render() {
    var tasks = this.props.tasks;
    var valueFilter = this.props.valueFilter;
    var status_int = parseInt(valueFilter.status);
    var key = this.props.key1;

    // kiểm tra nếu filter name khác mặc định
    if (valueFilter.name !== "") {
      tasks = tasks.filter(
        (task) =>
          task.name
            .toLowerCase()
            .indexOf(valueFilter.name.toLocaleLowerCase()) !== -1
      );
    }

    // filter status
    if (status_int !== -1) {
      let filer_status = status_int === 0 ? false : true;
      tasks = tasks.filter((task) => task.status === filer_status);
    }

    if (key !== "") {
      // filter task java script
      tasks = tasks.filter(
        (task) =>
          task.name.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      );
    }

    var sort = this.props.sort;

    // hàm sort trong java script
    if (sort.sortBy === "name") {

      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.sortValue;
        else if (a.name < b.name) return -sort.sortValue;
        else {
          return 0;
        }
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.sortValue;
        else if (a.status < b.status) return sort.sortValue;
        else {
          return 0;
        }
      });
    }

    // trả về element
    var elements = tasks.map((task, index) => {
      return <TaskItem key={task.id} task={task} index={index} />;
    });

    return (
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={valueFilter.name}
                onChange={this.onChange}
              ></input>
            </td>
            <td>
              <select
                name="filterStatus"
                id="input"
                class="form-control"
                required="required"
                value={valueFilter.status}
                onChange={this.onChange}
              >
                <option value={-1}>All</option>
                <option value={0}>Hide</option>
                <option value={1}>Show</option>
              </select>
            </td>
            <td></td>
          </tr>

          {elements}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    valueFilter: state.onFilter,
    key1: state.onSearch,
    sort : state.onSort
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // reutrn list function , call
  return {
    onFilter: (name, status) => {
      dispatch(action.onFilter(name, status));
    },
  };
};

// kết nối bộ lọc mapStateToProps đến store để lấy ra state
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
