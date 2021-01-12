import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea, Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1.5em",
    // maxHeight: 750,
  },
  media: {
    height: 150,
  },
  // textContent: {
  //   overflowY: 'scroll',
  //   height: 300,
  // },
  consoles: {
    textAlign: 'right',
    marginTop: '0.7em',
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const bigImage = props.cover === undefined ? null : props.cover.replace('t_thumb', 't_cover_big');
  const gameRelease = new Date(props.release * 1000).getFullYear();
  let consoleList = '';

  const getPlatforms = (a) => {
    a.forEach((c) => {
      if (c.abbreviation !== 'Stadia' && c.abbreviation !== 'psn' && c.abbreviation !== undefined) {
        consoleList += `${c.abbreviation} `
      }
    })
  }

  if (props.platforms) {
    getPlatforms(props.platforms);
  }

  return (
    <Card className={classes.root} raised>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bigImage}
          title={props.title}
        />
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              {gameRelease > 0 ? <Typography paragraph>
                {gameRelease}
              </Typography> : null}
              <Typography  paragraph>
                {props.genre}
              </Typography>
            </Grid>
            <Grid item xs container direction="column">
              <Typography variant="caption" className={classes.consoles} color="primary">
                {consoleList}
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Typography paragraph
              variant="body2"
              color="textSecondary"
              component="p">
              {props.summary}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
