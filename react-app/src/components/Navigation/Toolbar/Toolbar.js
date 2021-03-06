import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../../logo.svg'
import NavigationItems from '../Navigationitems/Navigationitems'
import DrawerToggle from '../SideDarwer/DrawerToggle/DrawerToggle'
import SearchBar from '../SearchBar/SearchBar'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <img src={Logo} alt="Logo" width="75" height="75"  className={classes.Logo}/>
        <SearchBar/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar