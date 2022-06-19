import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataTable from "./DataTable";

export default class ReactDataTableApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const columns = ['id', 'name', 'email'];
        return (
            <DataTable url="/getL" columns={columns} />
        );
    }
}


// DOM element
if (document.getElementById('list')) {
    ReactDOM.render(<ReactDataTableApp />, document.getElementById('list'));
}
