import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatTitle, formatDate } from "../../utils";

const styles = {
  card: {
    marginBottom: 20,
  },
  cardActionArea: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  mediaContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexBasis: "20vh",
    flexGrow: 0,
    flexShrink: 0,
  },
  cardMedia: {
    flexBasis: "11.25vh",
    flexGrow: 0,
    flexShrink: 0,
  },
  cardContent: {
    height: "10.75vh",
    paddingTop: "0.5vh",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  title: {
    marginBottom: -5,
  },
  description: {
    marginTop: 5,
  },
};

const stylesAlt = {
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
};

export default function SearchResult({ handleWatch, result }) {
  // use vertical card on small screens
  const smallScreen = useMediaQuery("(max-width: 550px");
  const useStyles = makeStyles((theme) => (smallScreen ? stylesAlt : styles));
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
        <div className={classes.mediaContainer}>
          <CardMedia image={image} className={classes.cardMedia} />
        </div>
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
