import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class DataTable extends React.Component {
  getColumns = data => {
    const columns = [];
    const sample = data[0];
    Object.keys(sample).forEach(key => {
      if (key !== "_id" && key !== "id") {
        columns.push({
          accessor: key,
          Header: key
        });
      }
    });
    return columns;
  };

  render() {
    const { data } = this.props;
    if (!data) return null;
    const columns = this.getColumns(data);
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
