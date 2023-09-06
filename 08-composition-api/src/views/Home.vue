<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>

    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>

    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>

    <h3>Ironman isAlive: {{ ironmanIsAlive }}</h3>
    <h3>Hulk isAlive: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
  name: 'Home',

  setup() {
    const ironman = ref({ name: 'Tony', edad: 50 });
    const hulk = ref({ name: 'Bruce', edad: 50 });
    const ironmanIsAlive = ref(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
      ironmanIsAlive.value = !ironmanIsAlive.value;
    };

    return {
      ironman, hulk, ironmanIsAlive, hulkIsAlive,

      changeIronman: () => {
        ironman.value.name = 'Tony start';
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.value.name = 'Bruce Banner';
        hulk.value.edad = 45;
      },
      changeStatus
    };
  }
};
</script>
