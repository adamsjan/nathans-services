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

<style scoped>

@media ((min-width: 600px) and (max-width: 799px)) {
  .logo-container {
    height: 70%;
  }

  .logo {
    font-size: 7em;
  }
}

@media (min-width: 500px) {
  .ctas {
    flex-direction: row;
  }
}

@media screen and (min-width: 0px) {

  .hero {
    background-image: url("@/assets/hero-image.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 12%;
    height: 35vh;
  }

  .logo-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .logo {
    height: 100%;
    font-size: 4em;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 700;
    margin: 10% 15%;
    color: var(--white);
  }

  main {
    background-image: linear-gradient(#021a4d, var(--darker));
    color: white;
    padding-bottom: 2%;
    height: 100%;
  }

  .ctas {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin: 0% auto;
    padding: 10% 0%;
  }

  .ctas .button {
    margin: 15% 0%;
    padding: 4% 4%;
    font-size: 1.5em;
    align-content: center;
  }

  svg {
    width:100%;
    height:100%;
  }

  rect {
    fill:none;
    width:100%;
    height:100%;
  }

  .catch {
    padding: 10% 10% 20%;
    font-size: 3em;
  }

  .services > p {
    display: block;
    width: 80%;
    text-align: center;

    color: var(--darker);
    font-size: 1.75em;
    margin: 2% 0% 10% 10%;
    padding: 2%;
    background-color: white;
    border-radius: 5em;
  }

  .overlay {
    background: rgba(255, 0, 0, 0);
    border-radius: 50%;
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: 0%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    transition: all 0.5s;
  }

  .ripple {
    width: 100%;
    height: 300%;
    top: 0;
    margin-top: 0;
    left: 0;
    margin-left: 0;
    border-radius: 0;
    z-index: 1000;
    background: var(--bold);
  }
}

@media screen and (min-width: 400px) {
  .hero {
    height: 50%;
  }

  .logo {
    font-size: 4.5em;
  }

  .ctas {
    padding: 0 0;
  }

  .ctas .button {
    margin-left: 0;
    font-size: 1.8em;
    padding: 2% 5%;
  }
}

@media screen and (min-width: 600px) {
  .hero {
    margin-top: 5%;
  }

  .logo {
    font-size: 6em;
  }

  .ctas {
    flex-direction: row;
    gap: 10%;
  }

  .ctas .button {
    margin-top: 0;
    margin-bottom: 5%;
  }

  .catch {
    padding-bottom: 10%;
  }

  .services {
    margin-bottom: 10%;
  }

  .services p {
    width: fit-content;
    margin: 2% 0% 4% 2%;
  } 
   
  .services p:nth-child(1) {
    margin-left: 15%;
  }

  .services p:nth-child(2) {
  margin-left: 40%;
}
.services p:nth-child(3) {
  margin-left: 55%;
}
}



</style>
