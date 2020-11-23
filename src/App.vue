<template>
  <div id="app">
    <video-background id="video-background"
      :src="randomVideo()"
    >
      <div id="fade"></div>
      <navbar />
      <footerbar />
    </video-background>
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";

import Navbar from "./components/Navbar"
import Footerbar from "./components/Footerbar"

export default {
  name: "App",
  components: {
    VideoBackground,
    Navbar,
    Footerbar
  },
  data () {
    return {
      videos: [
        require('@/assets/video/demo.mp4'),
        require('@/assets/video/demo2.mp4')
      ]
    }
  },
  methods: {
    randomVideo () {
      return this.videos[Math.floor(Math.random() * this.videos.length)]
    }
  }
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
  background-color: black;
}
#video-background {
  max-height: 100%;
  height: 100vh;
}
#fade {
  width: 100%; 
  height: 100%; 
  position: absolute;
  top: 0px;
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%); /* Chrome10+,Safari5.1+ */
}
</style>
