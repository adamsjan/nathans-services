<template>
  <header class="sticky-header">
    <nav class="web-nav">
      <router-link class="nav-button" to="/admin-home" exact>MEIST</router-link>
      <router-link class="nav-button" to="/admin-services"
        >TEENUSED</router-link
      >
      <router-link class="nav-button" to="/admin-previous-work"
        >TEHTUD TÖÖD</router-link
      >
      <router-link class="nav-button" to="/admin-contact">KONTAKT</router-link>
      <router-link class="nav-button" to="/admin-partners"
        >PARTNERID</router-link
      >
      <span class="logOutButton"
        ><svg class="logout-svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"
          />
          <path
            d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"
          /></svg
      ></span>
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
      <router-link class="mobile-button" to="/admin-home" exact
        >MEIST</router-link
      >
      <router-link class="mobile-button" to="/admin-services"
        >TEENUSED</router-link
      >
      <router-link class="mobile-button" to="/admin-previous-work"
        >TEHTUD TÖÖD</router-link
      >
      <router-link class="mobile-button" to="/admin-contact"
        >KONTAKT</router-link
      >
      <router-link class="mobile-button" to="/admin-partners"
        >PARTNERID</router-link
      >
      <span class="logOutButton"
        ><svg class="logout-svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"
          />
          <path
            d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"
          /></svg
      ></span>
    </nav>
  </header>

  <!-- The Modal -->
  <div id="logoutModal" class="modal">
    <div class="modal-content">
      <h3>Kas kõik on salvestatud?</h3>
      <p>Välja logides ei salvestata muudatusi automaatselt</p>
      <button type="button" @click="LogOut">Logi välja</button>
      <button type="button" class="cancel-button">Tühista</button>
    </div>
  </div>
</template>

<script defer>
export default {
  name: "AdminHeader",
  beforeMount() {
    import("../assets/header.css").then((cssModule) => {
      const css = cssModule.default || cssModule;
      const head = document.head || document.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      head.appendChild(style);
    });
  },
  mounted() {
    // Get the modal
    var modal = document.getElementById("logoutModal");
    var btn = document.querySelector(".logOutButton");

    // Get the elements that closes the modal
    var cancel = document.querySelector(".cancel-button");

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    cancel.onclick = function () {
      modal.style.display = "none";
    };
  },
  methods: {
    LogOut() {
      var data = {
        email: this.email,
        password: this.password,
      };
      fetch("/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.assign("#/admin-login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
</script>
