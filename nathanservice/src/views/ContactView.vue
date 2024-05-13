<template>
  <div>
    <Header></Header>

    <main>
      <div class="flex-column">
        <div class="title">
          <h1>VÕTA MEIEGA ÜHENDUST!</h1>
          <p>Küsi hinnapakkumist ja arutame sinu ideed!</p>

          <p><PostToShow :postId="38"></PostToShow></p>
          <p><PostToShow :postId="39"></PostToShow></p>

          <p>Või võta meiega ühendust kontaktvormi kaudu!</p>
          <!--<img src="@/assets/arrow-right.png">-->
        </div>
        <div class="form-fields">
          <form ref="form" id="contact_form" @submit.prevent="sendEmail">
            <div class="contact-field">
              <input type="text" name="user_name" placeholder="John Smith" />
            </div>
            <div class="contact-field">
              <input
                type="email"
                name="user_email"
                placeholder="example@example.com"
              />
            </div>
            <div class="contact-field">
              <input type="text" name="topic" placeholder="Sinu teema..." />
            </div>
            <div class="contact-field">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Sinu sõnum..."
              ></textarea>
            </div>
            <div class="button-container">
              <button class="button">
                <svg width="100%" height="100%">
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                SAADA KIRI
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <div class="notification hiddenElement">
      <p><b>Email saadetud!</b></p>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import emailjs from "emailjs-com";

export default {
  name: "ContactView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      (function () {
        emailjs.init("FZG1mXWjxkNibIWvF");
      })();
      emailjs
        .sendForm("service_2rgvnti", "template_u9m7hlg", this.$refs.form)
        .then(
          () => {
            console.log("SUCCESS!");
            // To fade "data copied" message
            var notification = document.querySelector(".notification");

            // Show the notification
            notification.classList.add("background-success");
            notification.classList.remove("hiddenElement");

            // After a delay, hide the notification
            setTimeout(function () {
              notification.classList.add("hiddenElement");
            }, 3000); 
          },
          (error) => {
            console.log("Failed to send:", error.text);
            // To fade "data copied" message
            var notification = document.querySelector(".notification");
            notification.classList.add("background-error");
            notification.textContent =
              "Viga saatmisel! Võtke ühendust omanikuga!";

            // Show the notification
            notification.classList.remove("hiddenElement");
          }
        );
      document.querySelector('[name="user_name"]').value = "";
      document.querySelector('[name="user_email"]').value = "";
      document.querySelector('[name="topic"]').value = "";
      document.querySelector('[name="message"]').value = "";
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  main {
    position: relative;
    margin-top: 15%;
    background-image: linear-gradient(130deg, var(--darker) 54%, white 46%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 5% 5% 0 5%;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    width: 100%;
    margin: 2% 3%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .title > h1 {
    font-size: 3em;
    color: white;
    margin: 5% 0%;
  }

  .title > p {
    font-size: 1.25em;
    color: white;
  }

  .form-fields {
    width: 100%;
    margin: 5% 0%;
  }

  .contact-field {
    display: block;
    margin-bottom: 3%;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 90%;
    padding: 1em;
    border: 2px solid var(--darker);
    border-radius: 4px;
    display: block;
    resize: none;
    background-color: #fff !important;
  }

  #message {
    background-color: #fff;
  }

  input[type="text"]::placeholder,
  input[type="email"]::placeholder,
  textarea::placeholder {
    color: var(--darker);
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .button-container {
    margin: 6% auto;
    width: 50%;
  }

  .button {
    color: var(--darker);
    background: rgba(255, 0, 0, 0);

    rect {
      stroke: var(--darker);
    }
  }

  .button:hover {
    color: white;
    background: var(--darker);

    rect {
      stroke: white;
    }
  }

  /* For sent message */
  .notification {
    opacity: 1;
    display: block;
    width: 100%;
    padding: 2%;
    margin: 2% 0%;
    transition: opacity 3s ease-out;
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
}


@media screen and (min-width: 670px) {
  main {
    margin-top: 7%;
  }

  .flex-column {
    flex-direction: row;
    align-items: start;
  }

  .title {
    max-width: 40%;
    margin: 0% 10% 0% 0%;
    overflow-wrap: break-word;
  }

  .form-fields {
    width: 60%;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
  }

  .button-container {
    width: 80%;
  }
}

@media screen and (min-width: 674px) {
  main {
    margin-top: 5%;
  }
}
</style>
