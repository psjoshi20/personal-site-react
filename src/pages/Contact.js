import React from 'react';
import {contactItems} from '../services/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "8px",
    display: "flex",
    width: "100%",
    color: "black",
  },
  text: {
    margin: "8px"
  }
})

export default function Contact() {
  const classes = useStyles();
  const items = contactItems

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="space-evenly" xs={12} >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h2" component="h2" gutterBottom>
              Contact Me
            </Typography>
          </Paper>
        </Grid>
        {items.map(item => <Grid item>
          <Paper className={classes.paper}>
            <Link className={classes.paper} href={item.href} underline="none">
              <Avatar><Icon className={item.icon} /></Avatar>
            <Typography variant="body1" className={classes.text} gutterBottom>  
            {item.text}
            </Typography>
            </Link>
          </Paper>
        </Grid>)}
      </Grid>
    </div>
  );
}