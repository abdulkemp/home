<!-- <template>
    <div class="container">
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>Edit Product</h1>
        <label class="label">Product Name</label>
        <input type="text" v-model="item.prodName">
        <label class="label">Price</label>
        <input type="text" v-model="item.price">
        <label class="label">Category</label>
        <input type="text" v-model="item.category">
        <label class="label">Quantity</label>
        <input type="text" v-model="item.quantity">
        <label class="label">Image</label>
        <input type="text" v-model="item.Image">
        <button class="btn btn-success mt-3" @click="($event) => updateProduct()">Update</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>

    export default {
      props: ['item'],
      methods:{
        updateProduct(){
          this.$store.dispatch("updateProduct", this.item)
        }
      }
    }
</script>
<style scoped>
.modal-body{
    display: flex;
    flex-direction: column;
}
</style> -->

<template>
  <div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>