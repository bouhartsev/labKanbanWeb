<template>
  <div id="app">
    <Modal ref="modalTask" class="addTask">
      <template v-slot:header>
        <b>Task</b>
      </template>

      <template v-slot:body>
        <input type="hidden" value="-1" id="taskID" />
        <input type="hidden" value="0" id="taskList" />
        <label for="taskText" class="lblNew">Description</label>
        <input type="text" placeholder="About task" id="taskText" />
        <br />
        <label for="taskPriority" class="lblNew">Priority</label>
        <select id="taskPriority">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </template>

      <template v-slot:footer>
        <button
          class="btn--secondary"
          type="reset"
          @click="$refs.modalTask.closeModal()"
        >
          Cancel
        </button>
        <button
          class="btn--primary"
          @click="
            $refs.componentLists.saveItem();
            $refs.modalTask.closeModal();
          "
        >
          Save
        </button>
      </template>
    </Modal>

    <header>
      <div class="title">
        <a href="/">
          <img src="~@/assets/img/logo.png" alt="logo" class="logo" />
        </a>
        <h1>Task Manager</h1>
      </div>
      <ThemeToggle />
      <!-- <div class="description">
    		<img src="~@/assets/img/information-button-svgrepo-com.svg" alt="icon info" class="info">
    		<p>Kanban — метод управления разработкой, реализующий принцип «точно в срок».</p>
    	</div> -->
    </header>
    <main>
      <button @click="$refs.modalTask.openModal()" class="btn--primary addTask">
        New task
      </button>

      <Lists ref="componentLists" />
    </main>
    <footer>
      <p>Matvey Bouhartsev, 201-321</p>
      <p><time datetime="2021-07-01 09:00">01.07.2021</time></p>
      <p>
        <a href="https://github.com/bouhartsev/labKanbanWeb">GitHub link</a>
      </p>
      <!-- <p>*Примечание: перенос элементов реализован специально, в рамках адаптивной вёрстки.</p> -->
    </footer>
  </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";
import Lists from "@/components/Lists.vue";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    ThemeToggle,
    Lists,
    Modal,
  },
};
</script>

<style lang="scss">
@import url("~@/assets/styles/style.css");

#app {
  max-width: 2000px;
  margin: auto;
}

body {
  overflow: overlay;
}
</style>
