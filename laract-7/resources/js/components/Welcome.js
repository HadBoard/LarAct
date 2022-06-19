import React from 'react';
import ReactDOM from 'react-dom';

function Welcome() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>Welcome To LarAct 😊</h2></div>
                        <div className="card-body">

                            I'm tiny React component in Laravel app!

                            <div className="row mt-4">
                                <div className="form-group mx-auto">
                                    <a href="/sample" className="btn btn-danger mx-1 w-25">Sample page</a>
                                    <a href="/hw" className="btn btn-success mx-1 w-25">HW page</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

// DOM element
if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
