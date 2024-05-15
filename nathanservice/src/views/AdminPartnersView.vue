<template>
  <div>
    <AdminHeader></AdminHeader>

    <main>
      <div class="divider-section heading">
        <h1><PostToEdit :id="42"></PostToEdit></h1>
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
    <AdminFooter></AdminFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/AdminHeader.vue";
import AdminFooter from "@/components/AdminFooter.vue";
import PostToEdit from "@/components/PostToEdit.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import Barrel from "@/components/Barrel.vue";
import PartnerModal from "@/components/PartnerModal.vue";

export default {
  name: "PartnersView",
  components: {
    AdminHeader,
    AdminFooter,
    ImageUpload,
    PostToEdit,
    Barrel,
    PartnerModal,
  },
  mounted() {},
};
</script>
<style scoped>

@import '../assets/partners.css';

</style>