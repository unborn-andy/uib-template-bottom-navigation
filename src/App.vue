<template>
  <div id="btn-app">
    <h1>Vue-Bottom-Navigation with uibuilder</h1>

    <div>
      <div class="color-picker-container">
        <span>Foreground</span>
        <input type="color" name="foreground" value="#42A5F5" id="foreground" v-model="foregroundColor" />
        <span class="pick-color">{{ foregroundColor }}</span>
      </div>

      <div class="color-picker-container">
        <span>Badge</span>
        <input type="color" id="badge" name="badge" value="#FBC02D" v-model="badgeColor" />
        <span class="pick-color">{{ badgeColor }}</span>
      </div>
    </div>

    <div class="form-check form-switch mt-5">
      <input class="form-check-input" type="checkbox" id="checkbox" v-model="showTitles" />
      <label class="form-check-label" for="checkbox">
        Show button titles
      </label>
    </div>

    <BottomNavigation :options="options" :badge-color="badgeColor" :foreground-color="foregroundColor" :show-titles="showTitles" v-model="selected" />
  </div>
</template>

<script>
import BottomNavigation from "./components/BottomNavigation";

export default {
  name: "App",
  components: { BottomNavigation },
  data: () => ({
    showTitles: true,
    selected: 1,
    options: [
      {
        id: 1,
        icon: "fas fa-home",
        title: "Home",
        childs: [
          { id: 101, icon: "fas fa-tshirt", title: "Products" },
          { id: 102, icon: "fas fa-tag", title: "Discount" },
          { id: 103, icon: "fas fa-gifts", title: "Gifts", badge: 7 },
        ],
      },
      { id: 2, icon: "fas fa-wallet", title: "Wallet" },
      {
        id: 3,
        icon: "fas fa-plus",
        title: "Setting",
        childs: [
          { id: 301, icon: "fas fa-bookmark", title: "Bookmarks" },
          { id: 302, icon: "fas fa-tasks", title: "Tasks" },
          { id: 303, icon: "fas fa-tachometer-alt", title: "Dashboard" },
          { id: 304, icon: "fas fa-ticket-alt", title: "Tickets" },
          { id: 305, icon: "fas fa-file-signature", title: "Contract" },
        ],
      },
      { id: 4, icon: "fas fa-bell", title: "Notifcation", badge: 15 },
      { id: 5, icon: "fas fa-user", title: "Account" },
    ],

    foregroundColor: "#42A5F5",
    badgeColor: "#FBC02D",
  }), // END OF data

  methods: {},
  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in App:", newMsg);
    });
  },
};
</script>

<style scoped>
#btn-app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
}

.color-picker-container {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.color-picker-container input {
  width: 150px;
  height: 40px;
  margin: 20px 10px;
  border: 2px solid #eee;
  border-radius: 8px;
  cursor: pointer;
}

.pick-color {
  border: 1px solid #eee;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 #eee;
  color: gray;
}
</style>
