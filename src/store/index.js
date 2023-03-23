import { createStore } from "vuex";
import axios from "axios";
const arraylists = document.querySelector(".array-lists");
const lagomURL = "https://lagom-project.onrender.com/";
// import router from '../router/index'
export default createStore({
  state: {
    products: null,
    users: null,
    user: null,
    product: null,
    showSpinner: null,
    message: null,
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setUsers(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setMessage(state, value) {
      state.products = value;
    },
    setUser(state, value) {
      state.products = value;
    },
    setSpinner(state, value) {
      state.products = value;
    },
    // post(state, value) {
    //   state.addProduct = value;
    // },
  },
  actions: {
    async fetchProducts(context) {
      const res = await axios.get(`${lagomURL}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit(err);
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${lagomURL}product/${id}`);
      const { results } = await res.data;
      context.commit("setProduct", results[0]);
      console.log(results);
    },
    async addProduct(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteProduct(context, id, dispatch) {
      const res = await axios.get(`${lagomURL}product/${id}`);
      console.log(res);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setProduct", msg[0]);
        console.log(msg);
        dispatch('fetchProducts')
      } else {
        context.commit('setMessage',err);
      }
    },
    async register(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async updateProduct(context, payload) {
      console.log(payload);
      let res = await axios.put(`${lagomURL}products/${payload.id}`, payload);
        console.log(res.data);
        let msg = await res.data.msg;
        if(msg){
          context.commit('setMessage', msg)
        }
    },
    async updateUser(req, res,context, payload) {
      const data = req.body;
      fetch(`https://lagom-project.onrender.com/user`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
      // if (data.password !== null || data.password !== undefined)
      //     data.password = hashSync(data.password, 15);

      // const updateQuery = `UPDATE Users SET ? WHERE userID = ?;`;

      db.query(updateQuery, [data, req.params.id], (err) => {
          if (err) throw err, console.log(err);
          res.status(200).json({
              msg: 'A row was affected.'
          });
      });
  },
    // async updateUser(context, payload) {
    //   console.log(payload);
    //   fetch(`https://lagom-project.onrender.com/user`, {
    //     method: "PUT",
    //     mode: "cors",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //     body: JSON.stringify(payload),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    async login(context, payload) {
      console.log(payload);
      fetch(`https://lagom-project.onrender.com/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // console.log(err);
        });
      if (msg) {
        context.commit("setMessage", msg);
        router.push("/");
      } else {
        context.commit("setMessage", err);
      }
    },
    
  },
  
  modules: {},
});
