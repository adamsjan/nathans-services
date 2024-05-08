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
        const baseurl = process.env.FRONTEND_URL;
        console.log("URL", `${baseurl}`);
        const response = await fetch(
          `${baseurl}/api/posts/${this.postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include"
          }
        );

        if (response.ok) {
          this.post = await response.json();
          this.$nextTick(() => {
      
      });
          console.log("Post get successfully");
        } else {
          console.error("Failed to get post");
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    },
  },
};
</script>
