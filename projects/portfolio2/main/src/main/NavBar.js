import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button/Button";


const styles = {
    root: {
        flexGrow: 1,
    },
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Button color="inherit"
                    component={Link}
                    to ='/'>Home
                    </Button>
                    <Button color="inherit" component={Link}
                            to = '/movie'>Movie
                    </Button>
                    <Button color="inherit"
                            component={Link}
                            to = '/tvshow'>T.V. Shows
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);