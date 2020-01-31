import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

//Using the higher order component Aux to allow for adjacent elements
//Which meets the requirement to have a wrapping root element
const layout = (props) => (
    <Auxiliary>
         <div>Tools - SideDrawer - B-Drop</div>
         <main className={classes.Content}>
             {props.children}
         </main>
    </Auxiliary>

);

export default layout;