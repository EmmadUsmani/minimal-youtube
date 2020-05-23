import React from "react";
import {
  Typography,
  makeStyles,
  LinearProgress,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { formatTitle, formatDate, addCommas } from "../utils";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  viewsDate: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
  },
  views: {
    marginBottom: "-8px",
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    width: "25%",
  },
  linearProgress: {
    width: "100%",
  },
  divider: {
    marginTop: 10,
  },
}));

export default function VideoInfo({ video }) {
  const classes = useStyles();

  const title = formatTitle(video.snippet.title);
  const views = addCommas(video.statistics.viewCount);
  const date = formatDate(video.snippet.publishedAt);
  const likes = parseInt(video.statistics.likeCount);
  const dislikes = parseInt(video.statistics.dislikeCount);
  const channelTitle = video.snippet.channelTitle;

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.row}>
        <div className={classes.viewsDate}>
          <Typography variant="subtitle1" className={classes.views}>
            {`${views} views ·`}
          </Typography>
          <span>&nbsp;</span>
          <Typography variant="subtitle1">{`${date}`}</Typography>
        </div>
        <Tooltip
          title={`${addCommas(likes)} likes | ${addCommas(dislikes)} dislikes`}
          placement="top-start"
        >
          <div className={classes.progressContainer}>
            <LinearProgress
              variant="buffer"
              value={(likes / (likes + dislikes)) * 100}
              valueBuffer={100}
              className={classes.linearProgress}
            />
          </div>
        </Tooltip>
      </div>
      <Typography variant="subtitle1">{channelTitle}</Typography>
      <Divider className={classes.divider} />
    </>
  );
}
