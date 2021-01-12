import React, { useState } from 'react';
import useSWR from 'swr';
import { Typography, Grid, TextField, Button, Divider, makeStyles } from "@material-ui/core";
import axios from 'axios';
import Link from 'next/link';
import AppBar from "../components/AppBar";
import GameCard from "../components/GameCard";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: 5,
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 2,
    minWidth: '30%',
  }
}));


const HomePage = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetcher(`https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/?search=${searchTerm}&fields=name,summary,cover.url,genres.name,first_release_date,platforms.abbreviation`)
  }

  const fetcher = (url, term) => axios({
    method: 'POST',
    url: url,
    headers: {
      "Accept": 'application/json',
      "Access-Control-Allow-Origin": 'true',
      "Client-ID": "urs071f1x74smywcowgwbphgjfdk4n",
      "Authorization": "Bearer 305h0sq7p4222dktekwil0mistsuy1",
    },
  })
    .then((res) => {
      setSearchResult(res.data);
      // console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })

  return (
    <div>
      <AppBar />
      <Typography
        variant="h2"
        className={classes.title}>
        GameRate
      </Typography>
      <Grid container
        justify="center"
        alignItems="center"
        direction="column">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Search Games"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            className={classes.searchBar}
            onInput={handleInput}
            value={searchTerm}
            autoComplete="off"
          />
        </form>
        <Button
          color="primary"
          onClick={handleSubmit}>
          Search
      </Button>
      </Grid>
      <Grid container
        justify="center"
        alignItems="center">
        {searchResult.map((game) => {
          if (game.cover === undefined || game.summary === undefined) {
            return null
          } else if (game.genres === undefined) {
            return <GameCard title={game.name} summary={game.summary} cover={game.cover.url} platforms={game.platforms} release={game.first_release_date} />
          } else {
            return <GameCard title={game.name} summary={game.summary} cover={game.cover.url} platforms={game.platforms} release={game.first_release_date} genre={game.genres[0].name} />
          }
        })}
      </Grid>
    </div>
  )
}

export default HomePage