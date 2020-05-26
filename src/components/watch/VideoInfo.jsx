import React from "react";
import {
  Typography,
  LinearProgress,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatTitle, formatDate, addCommas } from "../../utils";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 15,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  rowText: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
  },
  text: {
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
    marginTop: 20,
  },
}));

export default function VideoInfo({ video }) {
  const classes = useStyles();

  const title = formatTitle(video.snippet.title);
  const channelTitle = video.snippet.channelTitle;
  const views = addCommas(video.statistics.viewCount);
  const date = formatDate(video.snippet.publishedAt);
  const likes = parseInt(video.statistics.likeCount);
  const dislikes = parseInt(video.statistics.dislikeCount);

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <div className={classes.row}>
        <div className={classes.rowText}>
          <Typography
            variant="subtitle1"
            className={classes.text}
          >{`${channelTitle} ·`}</Typography>
          <span>&nbsp;</span>
          <Typography variant="subtitle1" className={classes.text}>
            {`${views} views ·`}
          </Typography>
          <span>&nbsp;</span>
          <Typography
            variant="subtitle1"
            className={classes.text}
          >{`${date}`}</Typography>
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
      <Divider className={classes.divider} />
    </>
  );
}
