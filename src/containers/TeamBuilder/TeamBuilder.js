import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Team from '../../components/Team/Team';
class TeamBuilder extends Component{
    //Lifecycle render method here
    render () {
        //Returning the JSX code 
        return (
            <Auxiliary>
                <Team />
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default TeamBuilder;