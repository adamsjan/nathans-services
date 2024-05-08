<template>
  <section>
    <div class="notification hiddenElement" ref="notification">
    </div>

    <div class="logincontent">
      <h1>This is administrator page. Please login to access content</h1>

      <div class="loginform" id="loginform">
        <div class="logininput">
          <label for="email">User name: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="User name"
            required
            v-model="email"
          />
        </div>
        <div class="logininput">
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            pattern="^(?=^[A-Z])(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d)(?=.*[_]).{8,15}$"
            title="Password must follow the following rules: 
                            Length is between 8-15 characters.   
                            Starts with an uppercase letter.       
                            Includes at least one uppercase letter.
                            Includes at least one number.  
                            Includes at least two lowercase letters.
                            Includes the '_' character."
            required
            v-model="password"
          />
        </div>
        <div class="login-container">
          <button @click="LogIn" class="login-button">Log In</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password,
      };
      if (this.email == "" || this.password == "") {
        return;
      }
      fetch("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // KOOKID
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); 
          } else {
            throw new Error("Wrong username or password!");
          }
        })
        .then((data) => {
          location.assign("#/admin-home");
        })
        .catch((e) => {
          console.log(e);
          const notification = document.querySelector(".notification")
          notification.textContent = e.message;

          // Show the notification
          notification.classList.remove("hiddenElement");

          // After a delay, hide the notification
          setTimeout(() => {
            notification.classList.add("hiddenElement");
          }, 3000);

        });
    },
  },
};
</script>

<style scoped>
.error {
  display: none;
}

.notification {
  opacity: 1;
  display: block;
  width: 100%;
  padding: 2%;
  margin: 2% 2%;
  transition: opacity 3s ease-out;
  background-color: lightcoral;
  font-weight: bold;
}

.hiddenElement {
  display: none;
}

.container {
  display: flex;
  justify-content: center;
}

.logincontent {
  margin: 5% 5%;
}

.loginform {
  margin: 2% 2%;
}

input {
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: block;
  resize: none;
  background-color: #fff !important;
}

.login-button {
  background-color: var(--bold);
}

.login-button:hover {
  background-color: var(--dark);
}
</style>
