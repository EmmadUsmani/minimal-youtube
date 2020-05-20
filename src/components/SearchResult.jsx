import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { formatTitle, formatDate } from "../utils";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 20,
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  cardMedia: {
    height: 150,
    flexBasis: 300,
    flexGrow: 0,
    flexShrink: 0,
  },
  cardContent: {
    height: 142,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  span: {
    color: "#CD5C5C",
    fontSize: "0.9em",
  },
}));

export default function SearchResult({ video }) {
  const classes = useStyles();
  const image = video.snippet.thumbnails.high.url;
  const title = formatTitle(video.snippet.title);
  const channelTitle = video.snippet.channelTitle;
  const live = video.snippet.liveBroadcastContent === "live";
  const date = formatDate(video.snippet.publishedAt);
  const description = video.snippet.description;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia image={image} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" component="h6">
            {title}
          </Typography>
          <Typography variant="caption" component="p">
            {`${channelTitle} · `}
            {live ? <span className={classes.span}>LIVE</span> : date}
          </Typography>
          <Typography variant="caption" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
