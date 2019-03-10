import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
// import "./styles/data.table.css";
import ActionsCell from "./ActionsCell";
export default class DataTable extends React.PureComponent {
  decamelize = (str, separator) => {
    separator = typeof separator === "undefined" ? " " : separator;

    return str
      .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
      .toLowerCase();
  };

  isNotVisibleKey = key => {
    let notVisibleKeys = ["_id", "id", "user", "budget"];
    return notVisibleKeys.includes(key);
  };

  canBeHeader = (sample, key) =>
    sample[key] !== undefined &&
    sample[key] !== null &&
    typeof sample[key] !== "object" &&
    !Array.isArray(sample[key]);

  getColumns = data => {
    const columns = [];
    const sample = data[0];
    const { handlers, actions } = this.props;
    Object.keys(sample).forEach(key => {
      if (!this.isNotVisibleKey(key) && this.canBeHeader(sample, key)) {
        let decamel = this.decamelize(key);
        let header = decamel.charAt(0).toUpperCase() + decamel.slice(1);
        let column = {
          accessor: key,
          Header: header,
          className: "left"
        };
        columns.push(column);
      }
    });
    if (actions) {
      columns.push({
        Header: "",
        Cell: cellInfo => <ActionsCell {...handlers} {...cellInfo} />
      });
    }
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
          defaultPageSize={6}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
