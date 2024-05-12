<template>
  <Header></Header>

  <main>
    <div class="divider-section heading">
      <h1>TEHTUD TÖÖD</h1>
    </div>

    <div class="images">
      <div class="content">
        <PortfolioWork :gallery="'first'" :ids="[20,6]"></PortfolioWork>

        <PortfolioModal :gallery="'first'" :ids="[20, 21, 41, 42, 6,7]"></PortfolioModal>
      </div>

      <div class="content">
        <PortfolioWork :gallery="'second'" :ids="[22,8]"></PortfolioWork>

        <PortfolioModal :gallery="'second'" :ids="[22, 23,43, 44,8,9]"></PortfolioModal>
      </div>

      <div class="content">
        <PortfolioWork :gallery="'third'" :ids="[24,10]"></PortfolioWork>

        <PortfolioModal :gallery="'third'" :ids="[24, 25,45,46,10,11]"></PortfolioModal>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PortfolioModal from "@/components/PortfolioModal.vue";
import PortfolioWork from "@/components/PortfolioWork.vue";

export default {
  name: "PreviousWorkView",
  components: {
    Header,
    Footer,
    PortfolioModal,
    PortfolioWork,
  },
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
    justify-content: center;
    position: relative;
    text-align: center;
  }

  .heading h1 {
    font-size: 3em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
  }

  .images {
    margin: 5% 5%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .content {
    width: 100%;
    margin: 5% auto;
  }

}

@media screen and (min-width: 400px) {
  main {
    margin-top: 15%;
  }
  .content {
    width: 80%;
  }
}


@media screen and (min-width: 600px) {
  main {
    margin-top: 0%;
  }

  .heading h1 {
    font-size: 4em;
  }

  .images {
    display: flex;
    flex-flow: row wrap;
  }

  .content {
    width: 46%;
    margin: 1% 3% 3% 1%;
  }
}
</style>
