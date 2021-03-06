import React, { Component } from 'react';

import { SearchBar, VideoList, VideoDetail } from './components';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('Neffex');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const { data: { items: videos } } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: '[API_KEY]',
        q: searchTerm
      }
    });

    this.setState({ videos, selectedVideo: videos[0] });
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid container spacing={10} justify='center' >
        <Grid item xs={10}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;