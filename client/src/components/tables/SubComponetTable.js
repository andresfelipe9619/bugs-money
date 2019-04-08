import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import _ from "lodash";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import ActionsCell from "./ActionsCell";

class App extends React.Component {
  getColumns = data => {
    const columns = [];
    const sample = data[0];
    const { handlers, actions } = this.props;
    Object.keys(sample).forEach(key => {
      if (key !== "_id" && key !== "id") {
        if (sample[key] && typeof sample[key] !== "object") {
          let column = {
            accessor: key,
            Header: key,
            className: "center"
          };
          columns.push(column);
        }
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
          defaultPageSize={10}
          pivotBy={["category"]}
          filterable
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
