import React from "react";
import Search from "./Search";
import Sort from "./Sort";

class SearchAndSort extends React.Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <Search  />

        {/* Sort */}
        <Sort  />
        </div>
    );
  }
}

export default SearchAndSort;
