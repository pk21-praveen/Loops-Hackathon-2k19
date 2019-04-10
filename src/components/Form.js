// Imports React
import React from "react";

/*
 * Input text boxes and button
 */
const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <div className="row">
            <div className="col-6">

                <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                    <div className="row no-gutters">
                        <div className="form-group col-md-4">
                            <input className="form-control" type="text" name="city" placeholder="City...."/>
                            <input type="text" name="country" placeholder="Country...."/>
                            <button>Get Weather</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
)

export default Form;