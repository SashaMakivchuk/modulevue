import Vue from "vue";
import Router from "vue-router";
import Home from "../views/HomePage.vue";
import FriendsList from "../views/FriendsList.vue";
import AddFriend from "../components/AddFriend.vue";
import FriendDetails from "../components/FriendDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/friends",
      name: "FriendsList",
      component: FriendsList,
    },
    {
      path: "/add-friend",
      name: "AddFriend",
      component: AddFriend,
    },
    {
      path: "/friend/:id",
      name: "FriendDetails",
      component: FriendDetails,
      props: true,
    },
  ],
});
