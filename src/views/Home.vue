<template>
  <div>
    <h2>Welcome home</h2>
    <PropertyIDList :propertyIds="propertyIds"/>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import PropertyIDList from "../components/PropertyIDList";
import { API, graphqlOperation } from "aws-amplify";
import { listPropertyIDS } from "../graphql/queries";

export default {
  name: "Home",
  components: {
    PropertyIDList,
  },
  data() {
    return {
      propertyIds: [],
    };
  },
  methods: {
    async fetchPropertyIds() {
      const response = await API.graphql(graphqlOperation(listPropertyIDS));
      const data = response.data.listPropertyIDS.items;

      return data;
    },
  },
  async created() {
    this.propertyIds = await this.fetchPropertyIds();
    console.log(this.propertyIds);
  },
};
</script>
