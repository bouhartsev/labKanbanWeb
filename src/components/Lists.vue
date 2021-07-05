<template>
  <section class="columns">
    <div
      v-for="list in listNames"
      :key="list.id"
      @drop="onDrop($event, list.id)"
      @dragover.prevent
      @dragenter.prevent
    >
      <h2>{{ list.title }} {{ list.length }}</h2>
      <div
        class="card"
        v-for="item in itemsData.filter((x) => x.listId === list.id)"
        @dragstart="onDragStart($event, item)"
        draggable="true"
        :key="item.id"
      >
        <h3 class="head">Задача №{{ item.id + 1 }}</h3>
        <img
          :src="priorityImg(item.priority)"
          :alt="'Priority is ' + item.priority"
          class="priority"
          draggable="false"
        />
        <p class="text">{{ item.title }}</p>
        <br />
        <i class="text">{{ item.date }}</i>
        <button
          class="check"
          @click="changePos(item.id, list.id + 1)"
          v-if="list.id != 2"
        ></button>
        <button class="cross" @click="deleteItem(item.id)" v-else></button>
        <button class="pencil" @click="editItem(item.id)"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Lists",
  data: function () {
    return {
      itemsData: [
        {
          id: 0,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a turpis velit. Aliquam egestas nulla ante, quis fringilla metus pellentesque.",
          priority: 2,
          date: "31.06.2021 16:00",
          listId: 0,
        },
        {
          id: 1,
          title: "Short text",
          priority: 3,
          date: "31.06.2021 16:00",
          listId: 0,
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit",
          priority: 3,
          date: "31.06.2021 16:00",
          listId: 1,
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit",
          priority: 1,
          date: "31.06.2021 16:00",
          listId: 2,
        },
      ],
      listNames: [
        {
          id: 0,
          title: "backlog",
          length: "",
        },
        {
          id: 1,
          title: "in progress",
          length: "",
        },
        {
          id: 2,
          title: "done",
          length: "q",
        },
      ],
    };
  },
  methods: {
    changelength: function () {
      this.listNames.forEach((list) => {
        let arr = this.itemsData.filter((x) => x.listId === list.id);
        if (arr.length > 0) list.length = "(" + arr.length + ")";
        else list.length = "";
      });
    },
    changePos: function (itemId, listId) {
      this.itemsData = this.itemsData.map((x) => {
        if (x.id == itemId) x.listId = listId;
        return x;
      });
      this.changelength();
    },
    onDragStart: function (e, item) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id.toString());
    },
    onDrop: function (e, listId) {
      const itemId = parseInt(e.dataTransfer.getData("itemId"));
      this.changePos(itemId, listId);
    },
    getDate: function () {
      let date = new Date();

      let dd = date.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      let yy = date.getFullYear() % 100;
      if (yy < 10) yy = "0" + yy;

      let h = date.getHours();
      if (h < 10) h = "0" + h;

      let m = date.getMinutes();
      if (m < 10) m = "0" + m;

      return dd + "." + mm + "." + yy + " " + h + ":" + m;
    },
    saveItem: function () {
      let input_title = document.getElementById("taskText").value;
      let input_date = this.getDate();
      let input_priority = Number(
        document.getElementById("taskPriority").value
      );
      let input_listId = Number(document.getElementById("taskList").value);
      let input_item = {
        title: input_title,
        priority: input_priority,
        date: input_date,
        listId: input_listId,
      };
      if (document.getElementById("taskID").value != "-1") {
        let input_id = document.getElementById("taskID").value;
        input_item.id = input_id;
        this.itemsData = this.itemsData.map((x) => {
          if (x.id == input_id) x = input_item;
          return x;
        });
      } else {
        let input_id = this.itemsData[this.itemsData.length - 1].id + 1;
        input_item.id = input_id;
        this.itemsData.push(input_item);
        this.changelength();
      }
    },
    editItem: function (input_id = -1) {
      let input_title = "";
      let input_priority = 0;
      let input_listId = 0;

      this.itemsData.map((x) => {
        if (x.id == input_id) {
          input_title = x.title;
          input_priority = x.priority;
          input_listId = x.listId;
        }
      });

      this.$parent.$refs.modalTask.openModal();

      setTimeout(function () {
        document.getElementById("taskID").value = input_id;
        document.getElementById("taskText").value = input_title;
        document.getElementById("taskPriority").value = input_priority;
        document.getElementById("taskList").value = input_listId;
      }, 100);
    },
    deleteItem: function (itemId) {
      this.itemsData = this.itemsData.filter((x) => x.id != itemId);
    },
    priorityImg: function (num) {
      let color = "000000"; //hex
      switch (num) {
        case 1:
          color = "f00000";
          break;
        case 2:
          color = "f0f000";
          break;
        case 3:
          color = "008000";
          break;
      }
      return "https://img.shields.io/badge/-" + num + "-%23" + color;
    },
  },
  mounted() {
    this.changelength();
  },
  created() {
    // console.log(localStorage['kanbanData'], JSON.parse(localStorage['kanbanData']));
    if (localStorage["kanbanData"])
      this.itemsData = JSON.parse(localStorage["kanbanData"]);
  },
  watch: {
    itemsData: function (val) {
      localStorage.setItem(["kanbanData"], JSON.stringify(val));
    },
  },
};
</script>
