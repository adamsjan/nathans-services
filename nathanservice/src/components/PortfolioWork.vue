<template>
    <!-- Container for the image gallery -->
    <div :id="gallery" :class="['container', gallery]">
            <!-- Full-width images with number text -->
            <div class="image">
              <Show :id="ids[1]"></Show>
              <div class="portfolioOverlay">
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
  import PostToShow from '@/components/PostToShow.vue';
  import Show from '@/components/Show.vue';

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
  },
  beforeMount() {
    import('../assets/portfoliowork.css')
  }
}
</script>

<style scoped>

</style>