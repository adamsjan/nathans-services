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

        console.log("REPONSE", response)

        if (response.ok) {
          const text = await response.text(); // Get response body as text
  console.log("Response text:", text); // Log text to see what's being received
  if (text) {
          this.post = await response.json();
          JSON.parse(text);
          this.$nextTick(() => {});
          console.log("Post get successfully");
  }
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
