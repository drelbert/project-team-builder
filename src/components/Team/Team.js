import React from 'react';

import TeamMember from './TeamMembers/TeamMember';
import classes from './Team.module.css';

//Created in the functional form 
//Here we are receiving members as props from TeamBuilder parent component
const team = (props) => {
    let objectToArrayMembers = Object.keys(props.members)
        .map(memberKey => {
          return [...Array( props.members[memberKey] )].map((_, i) => {
              return <TeamMember key={memberKey + i} type={memberKey} />;
          });
      })
    //Using reduce to flatten the array to pull out values of inner arrays
    //Trandform the array into 
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (objectToArrayMembers.length === 0) {
        objectToArrayMembers = <p>No Team Members Yet</p>
    }
    console.log(objectToArrayMembers);

    return (
        <div className={classes.Team}>
           {objectToArrayMembers}
        </div>
    );

};

export default team; 
