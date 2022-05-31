import React from 'react';

export default function Form(props){
    const {values} = props;
    return (
        <div className='form container'>
            <h2>Daily Report Form</h2>
            <form action="">
                <div className='site-info container'>
                    <h3>Site Information</h3>
                    <label htmlFor="">Date 
                        <input 
                            type="date" 
                            name="date" 
                            id="date" />
                    </label>
                    <label htmlFor="">Job Name
                        <input 
                            type="text" 
                            name="name" 
                            id="name" />
                    </label>
                    <label htmlFor="">Project Manager 
                        <input 
                            type="text" 
                            name="project-manager" 
                            id="project-manager" />
                    </label>
                    <label htmlFor="">Superintendent 
                        <input 
                            type="text" 
                            name="superintendent" 
                            id="superintendent" />
                    </label>
                </div>
                <div className='site-conditions container'>
                    <h3>Site Conditions</h3>
                        <label htmlFor="">Weather
                            <select name="weather" id="weather">
                                <option value="">-Select the Weather-</option>
                                <option value="Sunny">Sunny</option>
                                <option value="Partly Cloudy">Partly Couldy</option>
                                <option value="Cloudy">Cloudy</option>
                                <option value="Rainy">Rain</option>
                                <option value="Snow">Snow</option>
                            </select>
                        </label>
                        <label htmlFor="">Precipitation
                            <select name="precipitation" id="precipitation">
                                <option value="0">None</option>
                                <option value="0-1">0"- 1"</option>
                                <option value="1-2">1" - 2"</option>
                                <option value="2-3">2" - 3"</option>
                                <option value="3+">3"+</option>
                            </select>
                        </label>
                        <label htmlFor="">Site Condition
                            <select name="condition" id="condition">
                                <option value="Dry">Dry</option>
                                <option value="Muddy">Muddy</option>
                                <option value="Dusty">Dusty</option>
                                <option value="Frozen">Frozen</option>
                            </select>
                        </label>
                </div>
                <div className='deliveries container'>
                    <h3>Material Deliveries</h3>
                        <label htmlFor="">Supplier
                            <input 
                                type="text"
                                name='supplier'
                                id='supplier' />
                        </label>
                        <label htmlFor="">Description
                            <input 
                                type="text-field"
                                name='material-description'
                                id='material-description' />
                        </label>
                </div>
            </form>
            
            
        </div>
    )
};