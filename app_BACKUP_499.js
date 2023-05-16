const app = Vue.createApp({
  data() {
    return {
      counter: 0,
<<<<<<< Updated upstream
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      if (this.counter - number >= 0) {
        this.counter -= number;
      }
    },
  },
});

app.mount("#events");
=======
    };
  },
});

app.mount('#events');
>>>>>>> Stashed changes
