<template>
  <Header></Header>
  
    <div class="hero">
      <div class="logo-container" id="MainLogo">
        <img class="logo" src="" alt="Nathan's Services" />
      </div>
    </div>
    <main>
    <div class="ctas">
      <a class="button" href="#/teenused">
        <svg>
          <rect x="0" y="0"/>
        </svg>
        Tutvu teenustega</a
      >
      <a class="button" href="#/kontakt">
        <svg>
          <rect x="0" y="0"/>
        </svg>
        Võta ühendust</a
      >
    </div>

    <div class="catch">
      Oleme kõige parem firma üldse<br />Mingi päris tekst
    </div>

    <div class="services">
      <p>Kütusemahutite puhastus</p>
      <p>Tanklate hooldus</p>
      <p>Jäätmete käitlus</p>
    </div>

    <div class="ctas">
      <a class="button" href="#/teenused">
        <svg>
          <rect x="0" y="0"/>
        </svg>
        Tutvu lähemalt</a
      >
      <a class="button" href="#/kontakt">
        <svg>
          <rect x="0" y="0"/>
        </svg>
        Võta ühendust</a
      >
    </div>
  </main>
  <div class="overlay"></div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LandingView",
  components: {
    Header,
    Footer,
  },
  beforeMount() {
    import('../assets/landing.css');
  },
  mounted() {
    const btns = document.querySelectorAll(".button");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        var overlay = document.querySelector(".overlay");
        overlay.classList.add("ripple");
        setTimeout(() => {
          window.location.href = btn.href;
        }, 2000);
      });
    });
  },
};
</script>

</style>
