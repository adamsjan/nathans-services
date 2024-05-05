<template>
    <footer>

        <div class="footerButtons">

            <a href="terms.html">
                <button class="terms">
                    Teenusetingimused
                </button>
            </a>

        </div>

        <hr class="solid"/>

        <div class="general-info">
            <PostToEdit :postId="23"></PostToEdit>
            <PostToEdit :postId="24"></PostToEdit>
            <PostToEdit :postId="25"></PostToEdit>
        </div>
    </footer>
</template>

<script>
import PostToEdit from "@/components/PostToEdit.vue";

export default {
  name: 'AdminFooter',
  props: {
    msg: String
  },
  components: {
    PostToEdit
  }
}
</script>

<style scoped>

footer {
    min-height: fit-content;
    height: 20vh;
    background-color: var(--dark);
    padding: 1% 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

hr.solid {
    border-left: 2px solid #fff;
    height: 80%;
}

footer button {
    cursor: pointer;
    background: var(--dark);
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
}

footer .general-info .PostToEdit-container {
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    width: 100%;
}

</style>