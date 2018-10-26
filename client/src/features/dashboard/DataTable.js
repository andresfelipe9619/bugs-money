import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import Chance from "chance";
import checkboxHOC from "react-table/lib/hoc/selectTable";

const CheckboxTable = checkboxHOC(ReactTable);

function getColumns(data) {
  const columns = [];
  const sample = data[0];
  Object.keys(sample).forEach(key => {
    if (key !== "_id") {
      columns.push({
        accessor: key,
        Header: key
      });
    }
  });
  return columns;
}

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data;
    const columns = getColumns(data);
    this.state = {
      data,
      columns,
      selection: [],
      selectAll: false
    };
  }

  toggleSelection = (key, shift, row) => {
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  };

  toggleAll = () => {
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach(item => {
        selection.push(item._original);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = key => {
    return this.state.selection.includes(key);
  };

  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  render() {
    const { toggleSelection, toggleAll, isSelected, logSelection } = this;
    const { data, columns, selectAll } = this.state;

    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        if (r) {
          const selected = this.isSelected(r.original._id);
          return {
            style: {
              backgroundColor: selected ? "lightgreen" : "inherit"
              // color: selected ? 'white' : 'inherit',
            }
          };
        } else return {};
      }
    };

    return (
      <div>
        <button onClick={logSelection}>Log Selection</button>
        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          {...checkboxProps}
        />
      </div>
    );
  }
}

// const DataTable = () => {
//   const data = getData();
//   return <Table data={data} />;
// };
