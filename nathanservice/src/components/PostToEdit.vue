<template>
  <div class="edit-container" ref="container">
    <textarea v-model="post.value" ref="textarea">{{ post.value }}</textarea>
    <button @click="updatePost" title="Salvesta muudatus">
      <svg class="saveButton" aria-label="Salvesta muudatus" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"/>
</svg>

    </button>
  </div>

  <div class="notification hiddenElement" ref="notification">
    <div class="col">
      <p><b>Salvestatud</b></p>
    </div>
  </div>
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
    autoResizeTextarea() {
      const textarea = this.$refs.textarea;
      textarea.style.height = 0; // Reset height to auto
      textarea.style.height = textarea.scrollHeight + "px"; // Set height to scrollHeight
    },

    async getPost() {
      try {
        const response = await fetch(
          `/api/posts/${this.postId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          this.post = await response.json();
          this.$nextTick(() => {
            this.autoResizeTextarea();
          });
        } else {
          console.error("Failed to get post");
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    },
    async updatePost() {
      try {
        const response = await fetch(
          `/api/posts/${this.postId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(this.post),
          }
        );

        if (response.ok) {
          console.log("Post updated successfully");

          this.$emit("post-updated", this.post); // Emit event with updated post data

          this.$nextTick(() => {
            this.autoResizeTextarea();
          });

          // Get the textarea element
          const container = this.$refs.container;

          // Get the notification element
          const notification = this.$refs.notification;

          // Position the notification above the textarea
          const textareaRect = container.getBoundingClientRect();
          notification.style.top =
            textareaRect.top - notification.offsetHeight - 10 + "px";
          notification.style.left = textareaRect.left + "px";

          // Show the notification
          notification.classList.remove("hiddenElement");
          notification.classList.add("background-success");

          // After a delay, hide the notification
          setTimeout(() => {
            notification.classList.add("hiddenElement");
          }, 3000);
        } else {
          console.error("Failed to update post");
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
  },
};
</script>

<style scoped>
/* For "copied data" message */
.notification {
  opacity: 1;
  display: block;
  width: 100%;
  padding: 2%;
  margin: 2% 0%;
  transition: opacity 3s ease-out;
  /* Add a transition for a smooth fade effect */
}

.hiddenElement {
  display: none;
}

.background-success {
  background-color: lightgreen;
}

.background-error {
  background-color: lightcoral;
}

.edit-container {
  display: flex;
  align-items: flex-start;
  background-color: white;
  border: solid 2px var(--darker);
  padding: 3px;
  margin: 0px 3px;
  width: 80%;
}

textarea {
  width: 100%;
  overflow: hidden;
  resize: none;
  font-size: inherit;
}

button {
  border: none;
  margin: 2px;
  background-color: var(--light);
  border-radius: 5px;
}

.saveButton {
  font-weight: 100;
  font-size: 20px;
  color: var(--darker);
  background-color: var(--light);
  border-radius: 5px;
  width: 100%;
  height: 100%;
}

.saveButton:hover {
  color: var(--light);
  background-color: var(--darker);
  cursor: pointer;
}
</style>
