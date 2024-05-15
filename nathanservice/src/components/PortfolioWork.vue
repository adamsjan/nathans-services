<template>
    <!-- Container for the image gallery -->
    <div v-if="edit" class="open-modal">Modaalakna muutmiseks vajuta pildile</div>
    <div :id="gallery" :class="['container', gallery]">
            <!-- Full-width images with number text -->
            <div class="image">
              <ImageUpload v-if="edit" :id="ids[1]" :alt="'Tehtud töö'"></ImageUpload>
              <Show v-else :id="ids[1]" :alt="'Tehtud töö'"></Show>
              <div v-if="!edit" class="portfolioOverlay">
                <h2 class="button">
                  <PostToEdit v-if="edit" :postId="ids[0]"></PostToEdit>
                  <PostToShow v-else :postId="ids[0]"></PostToShow>

                <svg width="100%" height="100%">
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
              </h2>
              </div>
            </div>
          </div>
</template>

<script>
  import PostToShow from '@/components/PostToShow.vue';
  import Show from '@/components/Show.vue';
import PostToEdit from '@/components/PostToEdit.vue';
import ImageUpload  from '@/components/ImageUpload.vue';

export default {

  components: {
    PostToShow,
    Show,
    PostToEdit,
    ImageUpload
  },
  props: {
    gallery: { 
        type: String,
        required: true,
    },
    ids: {
      type: Array,
      required: true,
    },
    edit: { 
        type: Boolean,
        required: false,
    },
  },
  beforeMount() {
    import('../assets/portfoliowork.css')
  }
}
</script>

<style scoped>

</style>