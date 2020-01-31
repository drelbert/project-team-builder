import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './TeamMember.module.css';

//This has been converted to a class based comp to use Prop-types
//Note the capitalization of the class name
class TeamMember extends Component {
    render () {
        let member = null;
                //In a class access to props is with 'this'
        switch ( this.props.type ) {
            case ("lead"):
                member = <div className={classes.Lead}></div>;
                break;
            case ('dev'):
                member = <div className={classes.Dev}></div>;
                break;
            default:
                member = null;
        }
    
        return member;
    }
}

TeamMember.propTypes = {
    member: PropTypes.string
};

export default TeamMember;