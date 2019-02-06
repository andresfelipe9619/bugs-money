import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button, Icon } from "semantic-ui-react";

const ActionsCell = ({ handleOnEdit, handleOnDelete, handleOnView }) => (
  <Button.Group>
    <Button icon onClick={handleOnView}>
      <Icon name="eye" />
    </Button>
    <Button icon>
      <Icon name="edit" onClick={handleOnEdit} />
    </Button>{" "}
    <Button icon>
      <Icon name="trash" onClick={handleOnDelete} />
    </Button>
  </Button.Group>
);

export default class DataTable extends React.Component {
  getColumns = data => {
    const columns = [];
    const sample = data[0];
    Object.keys(sample).forEach(key => {
      if (key !== "_id" && key !== "id") {
        let column = {
          accessor: key,
          Header: key
        };
        columns.push(column);
      }
    });
    if (this.props.actions) {
      columns.push({
        Header: "",
        Cell: cellInfo => <ActionsCell {...this.props.hanlers} {...cellInfo} />
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
          className="-striped -highlight"
        />
      </div>
    );
  }
}
