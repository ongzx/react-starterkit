import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import styles from './Navbar.css';
import cx from 'classnames';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             drawerOpen: false
        }
        this.triggerDrawer = this.triggerDrawer.bind(this);
    }
    
    triggerDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    render() {

        const ListItems = (
            <div>
                <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Send mail" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <List className={styles.list} disablePadding>
                    { ListItems }
                </List>
            </div>
        )

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={this.triggerDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={styles.flex}>
                        RN Start
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
                <Drawer
                    open={this.state.drawerOpen}
                    onRequestClose={this.triggerDrawer}
                    onClick={this.triggerDrawer}
                    >
                    {sideList}
                </Drawer>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    
}

export default Navbar;