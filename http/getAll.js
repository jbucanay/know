import home from "../data/Know.postman_collection.json";

export default {
  async getData() {
    try {
      const res = await fetch(home.item[0].item[0].request.url.raw);
      const data = await res.json();
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
};
