<template>
  <!-- The Modal -->
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <Show :id="ids[0]" :alt="'Partner'"></Show>

      <div class="modal-text">
        <h1>
          <PostToShow :postId="ids[1]"></PostToShow>
        </h1>
        <p>
          <PostToShow :postId="ids[2]"></PostToShow>
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

export default {
  components: {
    Show,
    PostToShow,
  },
  props: {
    ids: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Get the button that opens the modal
    var partners = document.querySelectorAll(".barrel");

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
