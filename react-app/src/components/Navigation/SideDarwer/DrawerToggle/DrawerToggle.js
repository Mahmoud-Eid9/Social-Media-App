import React from 'react'
import classes from './DrawerToggle.module.css'
import MenuIcon from '@material-ui/icons/Menu';

const DrawerToggle = props => {
    return(
        <div className={classes.Container}>
         <MenuIcon onClick={props.clicked} className={classes.DrawerToggle} fontSize="large"/>
        </div>
    )
}

export default DrawerToggle