<template>
  <div id="app">
    <video-background
      id="video-background"
      :src="randomVideo()"
      overlay="linear-gradient(180deg,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.9))"
    >
      <navbar />
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">
              <b>Rein.app</b><small>eldoorn</small>
            </h1>
            <h2 class="mx-auto mt-2 mb-5">
              <vue-typer
                :repeat="0"
                :type-delay="20"
                caret-animation="blink"
                text="Full stack robotics software developer"
              ></vue-typer>
            </h2>
          </div>
        </div>
      </header>
      <footerbar />
    </video-background>
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player";
import { VueTyper } from "vue-typer";

import Navbar from "./components/Navbar";
import Footerbar from "./components/Footerbar";

export default {
  name: "App",
  components: {
    VideoBackground,
    Navbar,
    Footerbar,
    VueTyper,
  },
  data() {
    return {
      videos: [
        require("@/assets/video/demo.mp4"),
        require("@/assets/video/demo2.mp4"),
      ],
    };
  },
  methods: {
    randomVideo() {
      return this.videos[Math.floor(Math.random() * this.videos.length)];
    },
  },
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
  background-color: black;
  overflow: hidden;
  height: 100%;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

#video-background {
  max-height: 100%;
  height: 100vh;
}

.masthead {
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
}

.masthead h1 {
  font-family: "Varela Round";
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.2rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.masthead h2 {
  max-width: 20rem;
  font-size: 1rem;
}

.vue-typer .custom.char.typed {
  color: rgba(255, 255, 255, 0.5);
}

.vue-typer .caret {
  background-color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  margin-left: 10px;
  width: 10px;
}

@media (min-width: 768px) {
  .masthead h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
}

@media (min-width: 992px) {
  .masthead {
    height: 100vh;
    padding: 0;
  }
  .masthead h1 {
    font-size: 6rem;
    line-height: 6rem;
  }
  .masthead h2 {
    max-width: 30rem;
    font-size: 1.25rem;
  }
}
</style>
