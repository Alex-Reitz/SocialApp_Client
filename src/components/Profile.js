import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'

/* MUI */
import Buttom from "@material-ui/core/Button";
import MuiLink from '@material-ui/core/Link'
import { Typography } from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper'
/* Redux */
import { connect } from "react-redux";

/* Icons */
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles = {};

class Profile extends Component {
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
      },
    } = this.props;

let profileMarkup = !loading ? (authenticated ? (
    <Paper className={classes.paper}>
        <div className={classes.profile}>
            <div className="profile-image">
                <img src={imageUrl} alt="profile"/>
            </div>
            <hr/>
            <div className="profile-details">
            <MuiLink component={Link} to={`/users/$handle`} color="primary" variant="h5">
                @{handle}
            </MuiLink>
            <hr/>
            {bio && <Typography variant="body2">{bio}</Typography>
            <hr/>
            {location &&(
                <Fragment>
<LocationOn color="primary" /> <span>{location}</span>
<hr/>
                </Fragment>
                
            )}
            {website && (
                <Fragment>
                    <LinkIcon color="primary" />
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {''}{website}
                        </a> 
                        <hr/>
                </Fragment>
            )}
            <CalendarToday color="primary" />{''}
            <span>Joined {dayjs(createdAt).format('MMM YYY')}</span>
            </div>
        </div>
    </Paper>
) : (
    <Paper className={classes.paper}>
        <Typography variant="body2" align="center">
            No profile found. Please login again.
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" component={Link} to="/login">
                    Login
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/signup">
                    Signup
                </Button>
            </div>
        </Typography>
    </Paper>
)) : (<p>loading...</p>)

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
});

export default connect(mapStateToProps)(withStyles(styles)(Profile));
map;
