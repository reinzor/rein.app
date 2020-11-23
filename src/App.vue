<template>
  <div id="app">
    <video-background id="video-background"
      :src="require('@/assets/video/demo.mp4')"
    >
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
</style>
