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
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}

.masthead {
  width: 100%;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  padding: 15rem 0;
}

.masthead h1 {
  font-family: "Varela Round";
  font-size: 1.9rem;
  line-height: 1.9rem;
  letter-spacing: 0.2rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  padding: 0;
}

.masthead h2 {
  max-width: 20rem;
  font-size: 0.8rem;
}

.vue-typer .custom.char.typed {
  color: rgba(255, 255, 255, 0.5);
}

.vue-typer .caret {
  background-color: rgba(255, 255, 255, 0.5) !important;
  display: inline-block !important;
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
