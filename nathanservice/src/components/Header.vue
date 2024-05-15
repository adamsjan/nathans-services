<template>
    <header class="sticky-header">
      <nav class="web-nav">
        <router-link class="nav-button" to="/meist" exact>MEIST</router-link>
        <router-link class="nav-button" to="/teenused">TEENUSED</router-link>
        <router-link class="nav-button" to="/tehtud-tood"
          >TEHTUD TÖÖD</router-link
        >
        <router-link class="nav-button" to="/kontakt">KONTAKT</router-link>
        <router-link class="nav-button" to="/partnerid">PARTNERID</router-link>
      </nav>

      <div class="menu-toggle">
        <svg class="menu-svg">
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
</template>

<script>
export default {
  name: "HeaderComponent",
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

  @import '../assets/header.css';

</style>

<style scoped>
@media screen and (min-width: 0px) {
    .sticky-header {
      width: 100%;
      transition: top 0.3s;
      position: fixed;
      z-index: 100;
      top: 0;
      background-color: var(--darker);
      height: 15%;
    }
  
    .web-nav {
      display: none;
    }
  
    a {
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 0.9em;
      color: #fff;
    }
  
    .menu-toggle {
      display: block;
      cursor: pointer;
      padding: 4% 4%;
      height: 100%;
    }
  
    svg {
      height: 100%;
      width: 20%;
    }
  
    line {
      stroke: white;
      stroke-width: 3;
    }
  
    .mobile-nav {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding: 5em 0;
    }
  
    .mobile-nav > .mobile-button {
      padding: 0.3em 0.5em 0.3em 1em;
      text-decoration: none;
      font-size: 1.5em;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
  
    .mobile-nav > .mobile-button:hover {
      color: #f1f1f1;
    }
  
    .mobile-nav .close-button {
      position: absolute;
      top: 1em;
      right: 0.5em;
      font-size: 36px;
      margin-left: 1em;
      cursor: pointer;
    }
  }
  
  @media screen and (min-width: 600px) {
    .nav-button.router-link-exact-active {
      text-decoration: underline;
    }
  
    .sticky-header {
      height: fit-content;
      padding: 2% 1%;
    }
  
    .web-nav {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;
    }
  
    .nav-button {
      position: relative;
      display: flex;
      text-align: center;
      cursor: pointer;
      height: 100%;
      width: 15%;
      justify-content: center;
      align-items: center;
    }
  
    .nav-button:hover {
      color: var(--light);
      transform: translateY(-5px);
    }
  
    .menu-toggle {
      display: none;
    }
  }
  </style>
