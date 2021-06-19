<template>
  <div id="app">
    <header>
    	<div class="title">
    		<a href="/">
				  <img src="~@/assets/img/logo.png" alt="logo" class="logo">
			  </a>
			<h1>Task Manager</h1>
		</div>
    <ThemeToggle/>
    	<!-- <div class="description">
    		<img src="~@/assets/img/information-button-svgrepo-com.svg" alt="icon info" class="info">
    		<p>Kanban — метод управления разработкой, реализующий принцип «точно в срок».</p>
    	</div> -->
    </header>
    
  </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";

export default {
  name: "App",
  components: {
    ThemeToggle,
  },
};
</script>

<style lang="scss">
@import url('~@/assets/styles/style.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
