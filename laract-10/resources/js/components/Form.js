import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            family: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);

        this.validator = new SimpleReactValidator();
    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitButton(e) {

        e.preventDefault();

        if (!this.validator.allValid()) {
            this.validator.showMessages();
            this.forceUpdate();
            return;
        }

        axios.post('/submit', {
            name: this.state.name,
            family: this.state.family
        })
            .then(function (response) {
                let data = response.data;
                if (! data.status) {
                    alert(data.errors[Object.keys(data.errors)[0]][0]);
                } else {
                    alert("register !")
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        // this.setState({
        //     name: '',
        //     family: ''
        // })

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card text-center">
                            <div className="card-header"><h2>Form</h2></div>

                            <div className="card-body">

                                <form onSubmit={this.onSubmitButton}>

                                    <div className="form-group row my-2">
                                        <label className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="name" className="form-control"
                                                   value={this.state.name} onChange={this.onChangeValue}>
                                            </input>
                                            <span
                                                className="text-danger">{this.validator.message('name', this.state.name, 'required')}</span>
                                        </div>
                                    </div>

                                    <div className="form-group row my-2">
                                        <label className="col-sm-2 col-form-label">Family</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="family" className="form-control"
                                                   value={this.state.family} onChange={this.onChangeValue}>
                                            </input>
                                            <span
                                                className="text-danger">{this.validator.message('family', this.state.family, 'required')}</span>
                                        </div>
                                    </div>

                                    <a href="/" className="btn btn-secondary mx-1">Back</a>
                                    <button className="btn btn-success mx-1">Add</button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;

if (document.getElementById('form')) {
    ReactDOM.render(<Form/>, document.getElementById('form'));
}
