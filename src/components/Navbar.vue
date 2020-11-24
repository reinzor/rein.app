<template>
  <div id="navbar">
    <b-navbar type="dark" sticky>
      <b-container>
        <b-navbar-brand href="https://rein.app">
          <b>rein</b>.app
        </b-navbar-brand>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
#navbar nav {
  background-color: rgba(0, 0, 0, 0.4) !important
}
</style>
