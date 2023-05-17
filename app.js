const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      rand: undefined,
      rand2: undefined,
      // confirmedName: "",
    };
  },
  methods: {
    // confirmInput() {
    //   this.confirmedName = this.name;
    //   this.resetInput(); //additional made by me
    // },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      if (this.counter - number >= 0) {
        this.counter -= number;
      }
    },
    resetInput() {
      this.name = "";
    },
    getRandomNumber() {
      this.rand = Math.random();
    return this.rand;
    },
  },
  computed:{
    fullName(){
      let rand = Math.random();
      console.log(rand);
      if (this.name === "") {        
        return "";
      } else {
        return this.name + " " + "Lojko";
      }
    }
  },
});

app.mount("#events");
