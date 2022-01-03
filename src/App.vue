<template>
  <div id="app">
    <div id="background">
      <navbar />
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">
              <b>Rein.app</b><small>eldoorn</small>
            </h1>
            <h2 class="mx-auto mt-2 mb-5">
              <vue-typer
                  :repeat="Infinity"
                  :shuffle="false"
                  :type-delay="20"
                  caret-animation="blink"
                  :pre-erase-delay="4000"
                  erase-style='clear'
                  :text="text"
              ></vue-typer>
            </h2>
          </div>
        </div>
      </header>
      <footerbar />
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

import Navbar from "./components/Navbar";
import Footerbar from "./components/Footerbar";

export default {
  name: "App",
  components: {
    Navbar,
    Footerbar,
    VueTyper,
  },
  data() {
    return {
      text: [
        "Full stack robotics developer",
        "Home automation fanatic",
        "Open source software enthusiast",
      ]
    };
  },
  mounted() {
    window.VANTA.NET({
      el: "#background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff3fd1,
      backgroundColor: 0x0,
      points: 11.00,
      maxDistance: 21.00,
      spacing: 16.00
    })
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

#background {
  max-height: 100%;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
}

.masthead {
  width: 100%;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
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
