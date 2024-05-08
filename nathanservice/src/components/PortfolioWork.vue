<template>
    <!-- Container for the image gallery -->
    <div :id="gallery" :class="['container', gallery]">
            <!-- Full-width images with number text -->
            <div class="image">
              <img src="@/assets/partner.jpg" />
              <div class="overlay">
                <h2 class="button"><PostToShow :postId="ids[0]"></PostToShow>
                <svg width="100%" height="100%">
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
              </h2>
              </div>
            </div>
          </div>
</template>

<script>
// @ is an alias to /src
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";

export default {
  components: {
    PostToShow,
    Show
  },
  props: {
    gallery: { 
        type: String,
        required: true,
    },
    ids: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  background-color: var(--bold);
}

.image:hover .overlay {
  opacity: 0.9;
  cursor: pointer;
}

.overlay>h2 {
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.overlay .button {
    width: fit-content;
    color: white;
    background: var(--bold);

    rect {
      stroke: white;
    }
  }

  .button:hover {
    color: white;
    background: var(--bold);

    rect {
      stroke: white;
    }
  }

</style>