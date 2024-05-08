<template>
  {{ post.value }}
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
  this.getPost();
},
  props: ["postId"],
  methods: {
    async getPost() {
      try {
       
        const response = await fetch(
          `/api/posts/${this.postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include"
          }
        );

        console.log("REPONSE", response);

        if (response.ok) {
          this.post = await response.json();
          this.$nextTick(() => {});
          console.log("Post get successfully");
        } else {
          console.error("Failed to get post");
        }
      } catch (error) {
        console.error("Error getting post:", this.postId, error);
      }
    },
  },
};
</script>
