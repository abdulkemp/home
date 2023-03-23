<template>
    <div v-if="products">
      <!-- <NavBar /> -->
      <!-- <Spinner /> -->
      <Admin/>
       <EditProduct/>
       <EditUser/>
       <AddProduct/>
       <AddUser/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </template>
      <script>
  import Admin from "@/components/Admin.vue";
  import EditProduct from "../components/EditProduct.vue";
  import EditUser from "../components/EditUser.vue";
  import AddProduct from "../components/AddProduct.vue";
  import AddUser from "../components/AddUser.vue";
  import Spinner from '../components/Spinner.vue'
  // import NavBar from "../components/NavBar.vue";
  export default {
    name: "admin-comp",
    components: {
      Admin,
      EditProduct,
      EditUser,
      AddProduct,
      AddUser,
      Spinner
      // NavBar
    },

  //   data() {
  //   return {
  //     product: [],
  //   };
  // },
  // created() {
  //   this.getProducts();
  // },

  mounted() {
    this.$store.dispatch("fetchProducts")
  },

  computed: {
    products() {
      return this.$store.state.products
    }
  },
  
  // methods: {
  //   async getProducts() {
  //     try {
  //       const response = await axios.get(
  //         "https://lagom-project.onrender.com/products"
  //       );
  //       this.product = response.data.results;
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // }
}
  </script>
      <style scoped>
  </style>