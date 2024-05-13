<template>
  <div class="barrel">
    <Show :id="ids[0]" :loadingType="index > 2 ? 'lazy' : 'eager'" />

    <div class="text">
      <h2>
        <PostToShow :postId="ids[1]"></PostToShow>
      </h2>
      <p>
        <PostToShow :postId="ids[2]"></PostToShow>
      </p>
    </div>
  </div>
</template>

<script>
import PostToShow from '@/components/PostToShow.vue';
import Show from '@/components/Show.vue';

export default {
  name: "Barrel",
  components: {
    PostToShow,
    Show,
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
  beforeMount() {
    import('../assets/barrel.css')
    
  }
};
</script>

<style scoped>

</style>
