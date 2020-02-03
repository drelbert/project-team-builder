import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


//Non-exported array for looping through the controls
const controls = [
    {label: 'Lead', type: 'lead'},
    {label: 'Dev', type: 'dev'}
];


//Built in the functional style
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Hourly Rate Amount: {props.cost}</p>

        {controls.map(ctrl => (
            //Set of properties in the BuildControl
           <BuildControl 
             key={ctrl.label} 
             label={ctrl.label}
             add={() => props.memberAdded(ctrl.type)} 
             remove={() => props.memberRemoved(ctrl.type)} 
             disabled={props.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;