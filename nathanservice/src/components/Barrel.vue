<template>
  <div class="barrel">
    <Show :id="ids[0]"/>

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
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";

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
  }
};
</script>

<style scoped>

@media screen and (min-width: 0px){
.barrel {
  background-color: var(--light);
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.text {
  height: fit-content;
  padding: 10% 10% 20% 10%;
}

.text p {
  flex: 1; /* Flex grow to take available space */
  display: flex; /* Nested flex container for vertical centering */
  align-items: stretch; /* Stretch children vertically */
}

img {
  width: auto;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 0%;
}

.partner img {
  height: 150px;
}

}
</style>
