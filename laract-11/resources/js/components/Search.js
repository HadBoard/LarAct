import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import {text} from "react-table/src/filterTypes";

class Search extends Component {
    constructor(props) {
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        this.test(e.target.value)
    }

    test(ss) {
        axios.post('/getS', {
            name: ss
        })
            .then(function (response) {
                let data = response.data;

                console.log(response.data);

                let trHTML = '<table class="table mt-5">';
                trHTML += '<tr><th>ID</th><th>Name</th><th>Family</th></tr>';
                data.forEach((item) => {
                    console.log(item);
                    trHTML += '<tr><td>' + item._id + '</td><td>' + item.name + '</td><td>' + item.family + '</td></tr>';
                });
                trHTML += '</table>';

                document.getElementById("tbl").innerHTML = trHTML;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">

                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a href="/" className="page-link">Back</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="card text-center">
                            <div className="card-header"><h2>Search</h2></div>

                            <div className="card-body">


                                <div className="form-group row my-2">
                                    <label className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="name" className="form-control"
                                               defaultValue="" onChange={this.onChangeValue}>
                                        </input>
                                    </div>
                                </div>

                                <div id="tbl">

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.test("");
    }

}

export default Search;

if (document.getElementById('search')) {
    ReactDOM.render(<Search/>, document.getElementById('search'));
}
