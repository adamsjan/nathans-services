<template>
  <div>
    <Header></Header>

    <main>
      <div class="divider-section heading">
        <h1>PARTNERID</h1>
      </div>

      <section class="three-divs">
        <div class="partner">
          <Barrel :ids="[4, 26, 27]"></Barrel>

          <PartnerModal :ids="[4, 26, 28]"></PartnerModal>
        </div>

        <div class="partner">
          <Barrel :ids="[5, 29, 30]"></Barrel>

          <PartnerModal :ids="[5, 29, 31]"></PartnerModal>
        </div>

        <div class="partner">
          <Barrel :ids="[6, 32, 33]"></Barrel>

          <PartnerModal :ids="[6, 32, 34]"></PartnerModal>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";
import Barrel from "@/components/Barrel.vue";
import PartnerModal from "@/components/PartnerModal.vue";

export default {
  name: "PartnersView",
  components: {
    Header,
    Footer,
    Show,
    PostToShow,
    Barrel,
    PartnerModal,
  },
  mounted() {},
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  main {
    margin-top: 15%;
  }

  .divider-section {
    width: 100vw;
    margin: 5% 0%;
    padding: 8% 5%;
  }

  .heading {
    background-color: var(--darker);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .heading h1 {
    font-size: 3em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
  }

  .three-divs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10% 5%;
  }

  .partner {
    width: 100%;
    margin-bottom: 10%;
  }

  .barrel {
    cursor: pointer;
  }

  img {
  width: 100%;
  height: 30%;
  object-fit: cover;
  object-position: 50% 0%;
}
}

@media screen and (min-width: 500px) {
  .three-divs {
    flex-flow: row wrap;
    gap: 5%;
  }

  .partner {
    width: 47%;
  }
}

@media screen and (min-width: 544px) {
  main {
    margin-top: 0%;
  }

  .heading h1 {
    font-size: 4em;
  }
}

@media screen and (min-width: 700px) {
  
  .partner {
    width: 30%;
    margin-bottom: 0%;
  }
}
</style>
