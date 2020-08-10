import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from '../VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  if (videos) {
    console.log('Video list videos', videos);

    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />);
    return (
      <Grid container spacing={10}>
        {listOfVideos}
      </Grid>
    );
  } else {
    return 'Loading.....';
  }
}

export default VideoList;