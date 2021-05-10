import "./App.css";
import React from "react";
import TaskForm from "./components/TaskForm";
import SearchAndSort from "./components/SearchAndSort";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as action from "./action/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showForm = this.props.showForm.bind(this);
  }


  showForm() {
    // this.props.clearTaskEditting();
    this.props.showForm();
  }


  render() {
    // var tasks = this.state.tasks;
    var isDisplayForm = this.props.isDisplayForm;
    var checkDisplayForm = "";
    var classForm = "";
    var classTaskList = "";

    

    if (isDisplayForm) {
      //  nếu mà bắt thằng function bên component con thì nó sẽ ko chạy vào render luôn mà làm các thứ rồi mới render , nên nó sẽ ko chạy vào đây
      checkDisplayForm = (
        <TaskForm/>
      );
      classForm = "col-xs-4 col-sm-4 col-md-4 col-lg-4";
      classTaskList = "col-xs-8 col-sm-8 col-md-8 col-lg-8";
    } else {
      checkDisplayForm = "";
      classForm = "";
      classTaskList = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
    }

    

    return (
      <div className="container">
        <div className="text-center">
          <h1>To Do Task By VuNB</h1>
          <hr />
        </div>
        <div className="row">
          <div className={classForm}>{checkDisplayForm}</div>
          <div className={classTaskList}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.showForm}
            >
              <span className="fa fa-plus"></span> &nbsp;Add Task
            </button>
            <br></br>
            <br></br>
            <SearchAndSort />
            <br></br>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  // reutrn list function , call
  return {
    showForm: () => {
      dispatch(action.showForm());
      dispatch(action.clearTaskEditting());
      dispatch(action.clearFilter());
      dispatch(action.clearKey());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
