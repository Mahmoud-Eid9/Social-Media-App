import React from 'react'
import Logo from '../../../logo.svg'
import NavigationItems from '../Navigationitems/Navigationitems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses =[classes.SideDrawer, classes.Open]
    }
    return(
        <React.Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <img src={Logo} alt="Logo" width="150" height="150"  className={classes.Logo}/>
                <NavigationItems isAuthenticated={props.isAuth}/>
        </div>
        </React.Fragment>
    )
}

export default SideDrawer