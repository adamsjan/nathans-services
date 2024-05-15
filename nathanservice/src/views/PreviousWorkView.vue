<template>
  <Header></Header>

  <main>
    <div class="divider-section heading">
      <h1><PostToShow :postId="47"></PostToShow></h1>
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
import PostToShow from "@/components/PostToShow.vue";

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

  @import '../assets/portfolio.css';

</style>
