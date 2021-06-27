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
          @click="changePos(item.id, 2)"
          v-if="list.id != 2"
        ></button>
        <button class="cross" @click="deleteItem(item.id)" v-else></button>
        <button class="pencil"></button>
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

    saveItem: function () {
        console.log('save');
    //   let input_id = (document.getElementById("taskID").value!="-1") ? document.getElementById("taskID").value : this.itemsData[this.itemsData.length-1].id + 1;
    //   let input_title = document.getElementById("taskText").value;
    //   let today = new Date();
    //   let input_date = today; //change!
    //   let input_priority = document.getElementById("input_priority").value;
    //   let input_listId = document.getElementById("taskList").value;
    //   this.itemsData.push({
    //     id: input_id,
    //     title: input_title,
    //     priority: input_priority,
    //     date: input_date,
    //     listId: 0,
    //   });
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
};
</script>
