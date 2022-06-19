import React from 'react';
import ReactDOM from 'react-dom';

function Welcome() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-body">

                            <img src="/image/inbox.png" className="w-75 mx-auto" alt=""/>

                            <p>I'm tiny React component in Laravel app !</p>

                            <div className="row mt-4">
                                <div className="form-group mx-auto">
                                    <a href="/list" className="btn btn-secondary mx-1 w-25">List User</a>
                                    <a href="/search" className="btn btn-secondary mx-1 w-25">Search User</a>
                                    <a href="/form" className="btn btn-info mx-1 w-25">Add User</a>
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
