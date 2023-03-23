<template>
  <body class="sing">
    <div v-if="product">
      <NavBar />

      <div class="heading">
        <h1 class="animate__animated animate__zoomInUp line">
          {{ product.prodName }}
        </h1>
      </div>
      <div class="whole">
        <div class="whole1">
          <div class="cont-fluid">
            <div class="row img1">
              <div class="colu1">
                <div class="view-image">
                  <img :src="product.image" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="cont-fluid1">
            <div class="row desc1">
              <div class="col card">
                <div class="card-body">
                  <div class="name">
                    <h5>{{ product.prodName }}</h5>
                  </div>
                  <div class="description">
                    <p>{{ product.prodDesc }}</p>
                  </div>
                  <div class="price">
                    <p>
                      Cost Price <span class="rig">R {{ product.price }} </span>
                    </p>
                    <p>
                      Shipping Price
                      <span class="rig">R {{ product.shipPrice }} </span>
                    </p>
                  </div>
                  <div class="addp">
                    <a href="#" class="btn btn-success ad">Add to cart </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Spinner from "./SpinnerView.vue";
import axios from 'axios';
export default {
  name: "SingleProduct",
  components: {
    NavBar,
    Spinner,
  },
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods:{
    addToCart(){
      if(!this.token){
        swal({
          text: "please login to add item in cart",
          icon: "error"
        });
        return;
      }
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.id);
  },

  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.addp {
  margin-top: 3rem;
  border-top: 2px solid black;
}

.ad {
  float: right;
  margin-top: 1rem;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
}

.line {
  border: 3px solid black;
  /* border: none; */
}

.cont-fluid {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;

}

.cont-fluid1 {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  /* margin-bottom: 3rem; */
}

.whole {
  display: flex;
  justify-content: center;
  /* align-items: center; */

}

.view-image img {
  height: 35rem;
  max-width: 40rem;
  border-radius: 29% 71% 23% 77% / 77% 19% 81% 23%;
  border: 2px solid black;
}

.rig {
  float: right;
}

.desc1 {
  /* height: 30rem; */
  max-height: 100%;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid black;
}

.name h5 {
  font-size: 25px;
}

/* .img1 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
} */
@media screen and (max-width: 650px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .whole {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .whole1 {
    display: inline-block;
    justify-content: center;
    align-content: center;
  }

  .view-image img {
    width: 14rem;
    height: 18rem;
    border-radius: 5px;
    border: 2px solid black;
  }

  .cont-fluid {
    width: 150px;
    height: 300px;
    max-height: 100%;
  }

  .cont-fluid1 {
    /* width: 50%; */
    width: 150px;
    height: 300px;
    max-height: 100%;
  }

  .sing {
    display: block;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
  }

  .card {
    width: 14rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }


  .heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}  

.heading h1{
  font-size: 20px;
  text-align: center;
}

}

@media screen and (max-width: 1050px) {

}
</style>