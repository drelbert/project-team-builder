import React from 'react';

import classes from './BuildControl.module.css';

//Built in the functional style
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Remove} 
            onClick={props.remove} 
            disabled={props.disabled}>REMOVE</button>
        <button 
            className={classes.Add} 
            onClick={props.add}>ADD</button>
    </div>
);

export default buildControl;