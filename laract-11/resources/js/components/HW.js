import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function HW() {

    // default value
    const [dv, setDv] = useState({
        name: "Hooman",
        family: "Radmanesh",
    });

    const resetForm = () => {
        setDv({
            name: "Hooman",
            family: "Radmanesh",
        });
    };

    const updateFormName = (x) => {
        setDv((previousState) => {
            return { ...previousState, name: x };
        });
    };

    const updateFormFamily = (x) => {
        setDv((previousState) => {
            return { ...previousState, family: x };
        });
    };

    return (


        <div className="container">

            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="alert alert-warning">
                        Please enter your information in the fields below :)
                    </div>
                </div>
            </div>


            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>Form</h2></div>

                        <div className="card-body">

                        <div className="card-body">My name is {dv.name} {dv.family}</div>


                            <div className="form-group row my-2">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={dv.name}
                                            onChange={(e) => updateFormName(e.target.value)}>
                                    </input>
                                </div>
                            </div>

                            <div className="form-group row my-2">
                                <label className="col-sm-2 col-form-label">Family</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={dv.family}
                                            onChange={(e) => updateFormFamily(e.target.value)}>
                                    </input>
                                </div>
                            </div>


                            <button className="btn btn-primary mb-2" onClick={resetForm}>Reset Form</button>


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default HW;

// DOM element
if (document.getElementById('hw')) {
    ReactDOM.render(<HW />, document.getElementById('hw'));
}
