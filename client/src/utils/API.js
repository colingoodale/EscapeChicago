import axios from "axios";

export default {
  getPage: function (id) {
    return axios.get("/api/page/" + id);
  },
  getItems: function () {
    return axios.get("/api/items/");
  },
};
