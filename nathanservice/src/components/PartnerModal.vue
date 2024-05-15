<template>
  <!-- The Modal -->
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <ImageUpload v-if="edit" :id="ids[0]" :alt="'Partner'"></ImageUpload>
      <Show v-else :id="ids[0]" :alt="'Partner'"></Show>

      <div class="modal-text">
        <h1>
          <PostToEdit v-if="edit" :postId="ids[1]"></PostToEdit>
          <PostToShow v-else :postId="ids[1]"></PostToShow>
        </h1>
        <p>
          <PostToEdit v-if="edit" :postId="ids[2]"></PostToEdit>
          <PostToShow v-else :postId="ids[2]"></PostToShow>
        </p>
        <a href="google.com" class="button cta-contact-partner">Tutvu partneriga!</a>
      </div>

      <span class="close">&times;</span>
    </div>
  </div>
</template>


<script>
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";
import PostToEdit from "@/components/PostToEdit.vue";
import ImageUpload from "@/components/ImageUpload.vue";

export default {
  components: {
    Show,
    PostToShow,
    PostToEdit,
    ImageUpload
  },
  props: {
    ids: {
      type: Array,
      required: true,
    },
    edit: Boolean
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Get the button that opens the modal
    let partners;
    if (this.edit) {
     partners = document.querySelectorAll(".open-modal");
    } else {
      partners = document.querySelectorAll(".partner");
    }

    // Get the <span> element that closes the modal
    var closeBtns = document.querySelectorAll(".close");

    // When the user clicks on the button, open the modal
    document.addEventListener("click", (e) => {
      import('../assets/partnermodal.css');
      partners.forEach((partner) => {
        if (partner.contains(e.target)) {
          partner.nextElementSibling.style.display = "block";
        }
      });
    });

    // When the user clicks on <span> (x), close the modal
    closeBtns.forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".modal").forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });
  },
};
</script>
