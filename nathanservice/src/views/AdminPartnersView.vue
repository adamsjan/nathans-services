<template>
    <div>
      <Header></Header>
  
      <main>
        <section class="three-divs">
          <div class="partner">
            <ImageUpload :id="4"></ImageUpload>


            <div class="shown" id="first">
  
              <div class="center text">
                <h1>
                  
                  <PostToEdit :postId="28"></PostToEdit>
                  <p>Partner tanklate hoolduses</p>
                </h1>
              </div>
            </div>
  
            <!-- The Modal -->
            <div id="first-modal" class="modal">
              <!-- Modal content -->
              <div class="modal-content">
                <Show :id="4"></Show>
                <p>Pilti saad muuta päris lehel (vmt)</p>
  
                <div class="modal-text">
                  <h1>
                    <PostToEdit :postId="28"></PostToEdit>
                  </h1>
                  <p>
                    <PostToEdit :postId="29"></PostToEdit>
                  </p>
                  <a class="cta-contact-partner">Tutvu partneriga!</a>
                </div>
  
                <span class="close">&times;</span>
              </div>
            </div>
          </div>
  
          <div class="partner">
            <ImageUpload :id="5"></ImageUpload>
  
            <div class="shown" id="second">
                
  
              <div class="center text">
                <h1>
                  <PostToEdit :postId="30"></PostToEdit>
                  <p>Partner kütuste juures</p>
                </h1>
              </div>
            </div>
  
            <!-- The Modal -->
            <div id="second-modal" class="modal">
              <!-- Modal content -->
              <div class="modal-content">
                <Show :id="5"></Show>
  
                <div class="modal-text">
                  <h1>
                    <PostToEdit :postId="30"></PostToEdit>
                  </h1>
                  <p>
                    <PostToEdit :postId="32"></PostToEdit>
                  </p>
                  <a class="cta-contact-partner">Tutvu partneriga!</a>
                </div>
  
                <span class="close">&times;</span>
              </div>
            </div>
          </div>
  
          <div class="partner">
            <div class="shown" id="third">
                <ImageUpload :id="6"></ImageUpload>
  
              <div class="center text">
                <h1>
                  <PostToEdit :postId="33"></PostToEdit>
                  <p>Partner jäätmekäitluses</p>
                </h1>
              </div>
            </div>
            <!-- The Modal -->
            <div id="third-modal" class="modal">
              <!-- Modal content -->
              <div class="modal-content">
                <Show :id="6"></Show>
  
                <div class="modal-text">
                  <h1>
                    <PostToEdit :postId="33"></PostToEdit>
                  </h1>
                  <p>
                    <PostToEdit :postId="34"></PostToEdit>
                  </p>
                  <a class="cta-contact-partner">Tutvu partneriga!</a>
                </div>
  
                <span class="close">&times;</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import PostToEdit from "@/components/PostToEdit.vue";
  import ImageUpload from "@/components/ImageUpload.vue";
  import NewImage from "@/components/NewImage.vue";
  import Show from "@/components/Show.vue";
  
  export default {
    name: "HomeView",
    components: {
      Header,
      Footer,
      PostToEdit,
      NewImage,
      ImageUpload,
      Show
    },
    mounted() {
      // Get the button that opens the modal
      var partners = document.querySelectorAll(".shown");
  
      // Get the <span> element that closes the modal
      var closeBtns = document.querySelectorAll(".close");
  
      // When the user clicks on the button, open the modal
      document.addEventListener("click", (e) => {
        partners.forEach((partner) => {
          if (partner.contains(e.target)) {
            console.log(partner);
            document.getElementById(partner.id + "-modal").style.display =
              "block";
          }
        });
      });
  
      // When the user clicks on <span> (x), close the modal
      closeBtns.forEach((button) => {
        button.addEventListener("click", () => {
          document.querySelectorAll(".modal").forEach((modal) => {
            modal.style.display = "none";
          });
        });
      });
  
      // When the user clicks anywhere outside of the modal, close it
      window.addEventListener("click", () => {
        if (event.target.classList.contains("modal")) {
          document.querySelectorAll(".modal").forEach((modal) => {
            modal.style.display = "none";
          });
        }
      });
    },
  };
  </script>
  
  <style scoped>
  body {
    width: 100%;
    height: 100vh;
  }
  
  .three-divs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 7% 5%;
  }
  
  .partner {
    background-color: var(--bold);
    width: 27%;
    height: 50%;
  }
  
  .shown {
    cursor: pointer;
  }
  
  img {
    width: 100%;
  }
  
  .text {
    height: fit-content;
    padding: 10% 10% 20% 10%;
  }
  
  .center {
    display: flex;
    align-items: center;
  }
  
  .text > h1 {
    font-size: 40px;
    color: white;
  }
  
  h1 > p {
    color: white;
  }
  
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }
  
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 10% auto; /* 15% from the top and centered */
    padding: 2%;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: row;
  }
  
  .modal-content > img {
    height: 60%;
  }
  
  .modal-text {
    height: fit-content;
    padding: 2% 5%;
  }
  
  .modal-text>h1 {
    font-size: 30px;
    margin-bottom: 2%;
  }
  
  .cta-contact-partner {
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 2%;
    margin: 5% 0%;
    border-radius: 5px;
    width: 100%;
    font-size: 20px;
    color: white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    text-transform: uppercase;
    border-color: var(--darker);
    background-color: var(--darker);
    background-image: linear-gradient(45deg, var(--bold) 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    transition: background-position 0.5s ease-in-out;
    &:hover {
      background-position: 0;
    }
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    .three-divs {
      flex-direction: column;
    }
    .partner {
      width: 90%;
      height: 500px;
    }
  }
  </style>
  