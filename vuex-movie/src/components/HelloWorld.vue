<template>
<div>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  <ul>
    <li v-for="(toDo, id) in toDos" :key="id">{{toDo.text}} {{toDo.done}}</li>
  </ul>
  <p>Done tasks:{{doneToDosCount}}</p>
  <p>Id task {{getToDoById()}}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      toDos: this.$store.state.toDos,
      doneToDosCount: this.$store.getters.doneToDosCount
    }
  },
  computed: {
    count () {
	    return this.$store.state.count;
    },
    doneToDosLength() {
      return this.$store.state.doneToDosLength;
    }
  },
  methods: {
    increment () {
      this.$store.commit({type: 'increment', amount: 5})
    },
    decrement () {
    	this.$store.commit('decrement')
    },
    getToDoById () {
      const task = this.$store.getters.getToDoById(2);
      return task.text;
    }
  }
}
</script>