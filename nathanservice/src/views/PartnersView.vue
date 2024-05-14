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

  @import '../assets/partners.css';

</style>
