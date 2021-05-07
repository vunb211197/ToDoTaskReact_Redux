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
    this.state = {
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyWord: "",
      sort: {
        by: "name",
        value: 1,
      },
    };

    this.showForm = this.props.showForm.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  // gọi khi các component được gắn vào ( tải lại trang - gọi vào 1 lần duy nhất)
  // componentDidMount() {
  //   //  có thể thực hiện gán giá trị state ở đây hoặc gắn khi khởi tạo
  // }

  showForm() {
    this.props.showForm();
    this.setState({
      taskEditing: null,
      keyWord: "",
    });
  }
  // hideForm() {
  //   console.log("123");
  //   this.setState({
  //   });
  // }



  updateTask(id) {
    var index = this.findIndex(id);
    var tasks = this.state.tasks;
    this.setState({
      taskEditing: tasks[index],
    });
    this.showUpdateForm();
  }

  showUpdateForm() {
    this.setState({
      // isDisplayForm: true,
    });
  }

  onFilter(filterName, filterStatus) {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus,
      },
      keyWord: "",
    });
  }

  onSearch(keyWord) {
    this.setState({
      keyWord: keyWord,
    });
  }

  onSort(sortBy, sortValue) {
    console.log(sortBy, sortValue);
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue,
      },
    });
  }

  render() {
    // var tasks = this.state.tasks;
    var isDisplayForm = this.props.isDisplayForm;
    var checkDisplayForm = "";
    var classForm = "";
    var classTaskList = "";
    var filter = this.state.filter;
    var key = this.state.keyWord;
    var sort = this.state.sort;

    // // kiểm tra nếu filter name khác mặc định
    // if (filter.name !== "") {
    //   tasks = tasks.filter(
    //     (task) =>
    //       task.name.toLowerCase().indexOf(filter.name.toLocaleLowerCase()) !==
    //       -1
    //   );
    // }
    // // kiểm tra nếu filter status khác mặc định
    // if (filter.status !== -1) {
    //   let filer_status = filter.status === 0 ? false : true;
    //   tasks = tasks.filter((task) => task.status === filer_status);
    // }

    // //  kiểm tra nếu có search
    // if (key !== "") {
    //   // filter task java script
    //   tasks = tasks.filter(
    //     (task) =>
    //       task.name.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
    //   );
    // }

    if (isDisplayForm) {
      //  nếu mà bắt thằng function bên component con thì nó sẽ ko chạy vào render luôn mà làm các thứ rồi mới render , nên nó sẽ ko chạy vào đây
      checkDisplayForm = (
        <TaskForm
          // haha={this.hideForm}
          // onSubmit={this.onSubmit}
          task={this.state.taskEditing}
        />
      );
      classForm = "col-xs-4 col-sm-4 col-md-4 col-lg-4";
      classTaskList = "col-xs-8 col-sm-8 col-md-8 col-lg-8";
    } else {
      checkDisplayForm = "";
      classForm = "";
      classTaskList = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
    }

    // // hàm sort trong java script
    // if (sort.by === "name") {
    //   var points = [100, 40, 1, 5, 25, 10];
    //   points.sort(function (a, b) {
    //     return a - b;
    //   });
    //   console.log(points);

    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sort.value;
    //     else if (a.name < b.name) return -sort.value;
    //     else {
    //       return 0;
    //     }
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sort.value;
    //     else if (a.status < b.status) return sort.value;
    //     else {
    //       return 0;
    //     }
    //   });
    // }

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
            <SearchAndSort onSearch={this.onSearch} onSort={this.onSort} />
            <br></br>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  updateTask={this.updateTask}
                  onFilter={this.onFilter}
                />
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
