import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Team from '../../components/Team/Team';
import BuildControls from '../../components/Team/BuildControls/BuildControls';

const MEMBER_RATES = {
    lead: 60,
    dev: 80
};

class TeamBuilder extends Component {
    //Adding state 
    state = {
        members: {
            lead: 0,
            dev: 0
        },
        baseRate: 50
    }

    addMemberHandler = (type) => {
        const oldCount = this.state.members[type];
        const updatedCount = oldCount + 1;
        const updatedMembers = {
            ...this.state.members
        };
        updatedMembers[type] = updatedCount;
        const rateAddition = MEMBER_RATES[type];
        const oldTotal = this.state.baseRate;
        const newTotal = oldTotal + rateAddition;
        this.setState({baseRate: newTotal, members: updatedMembers});
    }

    removeMemberHandler = (type) => {
        const oldCount = this.state.members[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedMembers = {
            ...this.state.members
        };
        updatedMembers[type] = updatedCount;
        const rateDeduction = MEMBER_RATES[type];
        const oldTotal = this.state.hourlyRateTotal;
        const newTotal = oldTotal - rateDeduction;
        this.setState({rateAddition: newTotal, members: updatedMembers});
    }

    //Lifecycle render method here
    render () {
        const disabledInfo = {
            ...this.state.members
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        //Returning the JSX code each with a set of properties
        return (
            <Auxiliary>
                <Team members={this.state.members} />
                <BuildControls
                    memberAdded={this.addMemberHandler} 
                    memberRemoved={this.removeMemberHandler} 
                    disabled={disabledInfo}
                    cost={this.state.baseRate}/>
            </Auxiliary>
        );
    }
}

export default TeamBuilder;