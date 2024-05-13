<template>
  <div>
    <header class="sticky-header">
      <nav class="web-nav">
        <router-link class="nav-button" to="/meist" exact>MEIST</router-link>
        <router-link class="nav-button" to="/teenused">TEENUSED</router-link>
        <router-link class="nav-button" to="/tehtud-tood">TEHTUD TÖÖD</router-link>
        <router-link class="nav-button" to="/kontakt">KONTAKT</router-link>
        <router-link class="nav-button" to="/partnerid">PARTNERID</router-link>
      </nav>

      <div class="menu-toggle">
        <svg>
          <line x1="0" y1="5" x2="50" y2="5" />
          <line x1="0" y1="15" x2="50" y2="15" />
          <line x1="0" y1="25" x2="50" y2="25" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>

      <nav class="mobile-nav">
        <span class="mobile-button close-button">&times;</span>
        <router-link class="mobile-button" to="/meist" exact>MEIST</router-link>
        <router-link class="mobile-button" to="/teenused">TEENUSED</router-link>
        <router-link class="mobile-button" to="/tehtud-tood"
          >TEHTUD TÖÖD</router-link
        >
        <router-link class="mobile-button" to="/kontakt">KONTAKT</router-link>
        <router-link class="mobile-button" to="/partnerid"
          >PARTNERID</router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  beforeMount() {
  import('../assets/header.css').then((cssModule) => {
    const css = cssModule.default || cssModule;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  });
},
  mounted() {
    document.querySelector(".menu-toggle").addEventListener("click", () => {
      this.openNav();
    });
    document.querySelector(".close-button").addEventListener("click", () => {
      this.closeNav();
    });
  },
  methods: {
    openNav() {
      document.querySelector(".mobile-nav").style.width = "250px";
    },

    closeNav() {
      document.querySelector(".mobile-nav").style.width = "0";
    },
  },
};
</script>

<style scoped>

</style>
