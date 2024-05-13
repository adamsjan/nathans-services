<template>
  <!-- The Modal -->
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <Show :id="ids[0]"></Show>

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

<style scoped>

@media screen and (min-width: 0px) {

img {
  max-width: 100%;
}

/* The Modal (background) */
.modal {
  display: none; 
  position: fixed; 
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
  background-color: #fff;
  margin: 20% auto;
  padding: 5%;
  border: 1px solid #888;
  width: 80%;
  max-height: 85vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-content > img {
  height: 60%;
}

.modal-text {
  max-height: 70vh;
  overflow: auto;
  padding: 2% 5%;
}

.modal-text > h1 {
  font-size: 30px;
  margin-bottom: 2%;
}

.cta-contact-partner {
  display: flex;
  justify-content: center;
  margin: 15% 0% 0%;
  border-radius: 5px;
  font-size: 1.25em;
  color: white;
  background-color: var(--darker);
  background-image: linear-gradient(45deg, var(--bold) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background-position 0.5s ease-in-out;
  &:hover {
    background-position: 0;
  }
}

.close {
  top: 0;
  right: .2em;
  font-size: 1.75em;
  position: absolute;
  margin-left: 1em;
  cursor: pointer;
  color: #aaa;
  align-self: right;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #575757;
}
}

@media screen and (min-width: 500px) {
 
  .modal-content {
    flex-direction: row;
    margin-top: 5%;
  }

  .modal-content img {
    height: 300px;
    width: 100%;
    object-fit: contain;
    max-width: 50%;
  }

  .cta-contact-partner {
    margin: 5% 0% 0%;
  }
}

</style>
