import React from 'react';

import TeamMember from './TeamMembers/TeamMember';
import classes from './Team.module.css';

//Created in the functional form 
const team = (props) => {
    return (
        <div className={classes.Team}>
            <TeamMember type="lead" />
        </div>
    );

};

export default team; 
