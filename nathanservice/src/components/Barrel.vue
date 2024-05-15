<template>
  <div class="barrel">
    <ImageUpload v-if="edit" :id="ids[0]"/>
    <Show v-else :id="ids[0]" :alt="Member" :loadingType="index > 2 ? 'lazy' : 'eager'" />

    <div class="text">
      <h2>
        <PostToEdit v-if="edit" :postId="ids[1]" />
        <PostToShow v-else :postId="ids[1]"></PostToShow>
      </h2>
      <p>
        <PostToEdit v-if="edit" :postId="ids[1]" />
        <PostToShow v-else :postId="ids[2]"></PostToShow>
      </p>
    </div>
  </div>
</template>

<script>
import PostToShow from '@/components/PostToShow.vue';
import Show from '@/components/Show.vue';
import PostToEdit from '@/components/PostToEdit.vue';
import ImageUpload from '@/components/ImageUpload.vue';

export default {
  name: "Barrel",
  components: {
    PostToShow,
    Show,
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
  beforeMount() {
    import('../assets/barrel.css')
    
  }
};
</script>

<style scoped>

</style>
