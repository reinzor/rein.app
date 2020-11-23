<template>
  <footer id="footerbar">
    <b-navbar type="dark" sticky>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Left aligned nav items -->
          <b-navbar-nav>
            <b-nav-item href="https://www.linkedin.com/in/reinzor/" title="Linkedin">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </b-nav-item>
            <b-nav-item href="https://www.github.com/reinzor/" title="Github">
              <font-awesome-icon :icon="['fab', 'github']" />
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://home.rein.app" title="Home assistant">
              <font-awesome-icon :icon="['fas', 'home']" />
            </b-nav-item>
            <b-nav-item href="https://soundboard.rein.app" title="Soundboard">
              <font-awesome-icon :icon="['fas', 'volume-up']" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </footer>
</template>

<script>
export default {
  name: "Footerbar",
};
</script>

<style>
#footerbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
#footerbar nav {
  background-color: rgba(0, 0, 0, 0.4) !important
}
</style>
