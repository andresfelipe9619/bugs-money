import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button, Icon } from "semantic-ui-react";
import "./styles/data.table.css";
const ActionsCell = ({
  handleOnEdit,
  handleOnDelete,
  handleOnView,
  original
}) => (
  <Button.Group>
    {handleOnView && (
      <Button icon onClick={handleOnView(original)}>
        <Icon name="eye" />
      </Button>
    )}
    {handleOnEdit && (
      <Button icon>
        <Icon name="edit" onClick={handleOnEdit(original)} />
      </Button>
    )}{" "}
    {handleOnDelete && (
      <Button icon>
        <Icon name="trash" onClick={handleOnDelete(original)} />
      </Button>
    )}
  </Button.Group>
);

export default class DataTable extends React.PureComponent {
  getColumns = data => {
    const columns = [];
    const sample = data[0];
    Object.keys(sample).forEach(key => {
      if (key !== "_id" && key !== "id") {
        let column = {
          accessor: key,
          Header: key,
          className: "center"
        };
        columns.push(column);
      }
    });
    if (this.props.actions) {
      columns.push({
        Header: "",
        Cell: cellInfo => <ActionsCell {...this.props.handlers} {...cellInfo} />
      });
    }
    return columns;
  };

  render() {
    const { data } = this.props;
    console.log("table data", data);
    if (!data) return null;
    const columns = this.getColumns(data);
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
