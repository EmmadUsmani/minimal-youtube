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
    justifyContent: "flex-start",
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
}));

export default function SearchResult({ handleWatch, result }) {
  const classes = useStyles();

  const image = result.snippet.thumbnails.high.url;
  const title = formatTitle(result.snippet.title);
  const channelTitle = result.snippet.channelTitle;
  const live = result.snippet.liveBroadcastContent === "live";
  const date = formatDate(result.snippet.publishedAt);
  const description = result.snippet.description;
  const resultId = result.id.videoId;

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => handleWatch(resultId)}
      >
        <CardMedia image={image} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="caption">
            {`${channelTitle} · `}
            {live ? (
              <Typography color="primary" variant="caption">
                LIVE
              </Typography>
            ) : (
              date
            )}
          </Typography>
          <Typography variant="caption" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
