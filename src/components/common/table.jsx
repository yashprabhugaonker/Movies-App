import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { data, columns, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={data} columns={columns} />
      </table>
    );
  }
}

export default Table;
