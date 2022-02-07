import React from 'react';
import './form.css';

export function Form(props){

    let states = ['NSW', 'QLD', 'ACT', 'VIC', 'TAS', 'SA', 'WA', 'NT']

    return(
        <div> 
            <div className='form-container'>
                <div className="form-block">
                    <div className="form-item">
                        <label>First Name</label>
                        <input
                            className= {props.errors.firstName ? "form-input-danger" :"form-input" }
                            name='firstName'
                            value={props.user.firstName}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.firstName}</p>
                    </div>
                    <div className="form-item">
                        <label>Last Name</label>
                        <input
                            className= {props.errors.lastName ? "form-input-danger" :"form-input" }
                            name='lastName'
                            value={props.user.lastName}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.lastName}</p>
                    </div> 
                </div>
                <div className='form-block'>
                    <div className='form-item'>
                        <label>Email</label>
                        <input
                            className= {props.errors.email ? "form-input-danger" :"form-input" }
                            name='email'
                            type='email'
                            value={props.user.email}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.email}</p>
                    </div>
                    <div className='form-item'>
                        <label>Phone Number</label>
                        <input
                            className= {props.errors.phoneNo ? "form-input-danger" :"form-input" }
                            name='phoneNo'
                            type='number'
                            value={props.user.phoneNo}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.phoneNo}</p>
                    </div>
                </div>             
                <div className='form-block-small'>
                    <div className='form-item'>
                        <label>Postcode</label>
                        <input
                            className= {props.errors.postcode ? "form-input-danger" :"form-input" }
                            name='postcode'
                            type='number'
                            value={props.user.postcode}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                        />
                        <p className='form-feedback'>{props.errors.postcode}</p>
                    </div>
                    <div className='form-item'>
                        <label>State</label>
                        <select 
                            className= {props.errors.state ? "form-input-danger" :"form-input" }
                            name='state'
                            value={props.user.state} 
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}>
                            <option>Select state</option>
                            {states.map((s, index) => <option key={index}>{s}</option>)}
                        </select>
                        <p className='form-feedback'>{props.errors.state}</p>
                    </div>
                </div>
                <div className='form-block'>
                    <div className='form-item'>
                        <label>Company Name</label>
                        <input
                            className= {props.errors.companyName ? "form-input-danger" :"form-input" }
                            name='companyName'
                            value={props.user.companyName}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.companyName}</p>
                    </div>
                    <div className='form-item'>
                        <label>ABN</label>
                        <input
                            className= {props.errors.abn ? "form-input-danger" :"form-input" }
                            name='abn'
                            type='number'
                            value={props.user.abn}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.abn}</p>
                    </div>
                </div>
                <div className='form-block'>
                    <div className='form-item'>
                        <label>Hourly Rate</label>
                        <div className='form-currency-container'>
                            <i className= {props.errors.hourlyRate ? "form-input-icon-danger" :"form-input-icon" }>$</i>
                            <input
                                className= {props.errors.hourlyRate ? "form-input-currency-danger" :"form-input-currency" }
                                name='hourlyRate'
                                type='number'
                                value={props.user.hourlyRate}
                                onChange={props.onInputChange}
                                onBlur={props.onInputValidate}
                                disabled={props.edit ? false : true}
                            />
                        </div>
                        <p className='form-feedback'>{props.errors.hourlyRate}</p>
                    </div>
                    <div className='form-item'>
                        <label>Date of Birth</label>
                        <input
                            className= {props.errors.dob ? "form-input-danger" :"form-input" }
                            name='dob'
                            type='date'
                            value={props.user.dob}
                            onChange={props.onInputChange}
                            onBlur={props.onValidateInput}
                            disabled={props.edit ? false : true}
                            required
                        />
                        <p className='form-feedback'>{props.errors.dob}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
