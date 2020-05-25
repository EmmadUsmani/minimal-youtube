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
    width: "100%",
    marginBottom: 5,
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    height: 150,
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
    <Card elevation={0} className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => handleWatch(resultId)}
      >
        <CardMedia image={image} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
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
          <Typography
            variant="caption"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
