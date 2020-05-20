import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { formatDate } from "../utils";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  cardMedia: {
    height: 150,
    flexBasis: 300,
    flexGrow: 0,
    flexShrink: 0,
  },
  cardContent: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

export default function SearchResult({ video }) {
  const classes = useStyles();
  const image = video.snippet.thumbnails.high.url;
  const channelTitle = video.snippet.channelTitle.substr(0, 80);
  const live = video.snippet.liveBroadcastContent === "live";
  const date = formatDate(video.snippet.publishedAt);
  const description = video.snippet.description;

  return (
    <Card className={classes.card}>
      <CardMedia image={image} className={classes.cardMedia} />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1" component="h6">
          {video.snippet.title}
        </Typography>
        <Typography variant="caption" component="p">
          {channelTitle} · {live ? "Live" : date}
        </Typography>
        <Typography variant="caption" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

// TODO: live button
