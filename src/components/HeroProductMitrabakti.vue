<template>
  <!-- Women Banner Section Begin -->
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="products.length > 0">
          <carousel
            class="product-slider"
            :items="3"
            :autoplay="true"
            :nav="false"
            :dots="false"
            :loop="true"
          >
            <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
              <div class="pi-pic">
                <img v-bind:src="itemProduct.galleries.length ? itemProduct.galleries[0].image_url : ''" alt />
                <ul>
                  <li class="w-icon active">
                    <a @click="saveKeranjang(itemProduct)">
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link v-bind:to="/product/+itemProduct.slug">+ Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">{{itemProduct.type}}</div>
                <router-link v-bind:to="/product/+itemProduct.slug">
                  <h5>{{itemProduct.name}}</h5>
                </router-link>
                <div class="product-price">
                  {{$rupiah(itemProduct.price)}}
                  <span>$35.00</span>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="col-lg-12" v-else>
          <p>Produk Terbaru Belum Tersedia</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Women Banner Section End -->
</template>

<script>
// import banner slider owl carousel
import carousel from "vue-owl-carousel";
import { mapActions } from "vuex";
// import axios
import axios from "axios";
export default {
  name: "HeroProductMitrabakti",
  components: {
    carousel
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    ...mapActions(["addKeranjang"]),
    saveKeranjang(productDetails) {
      let memoriProduk = {
        id: productDetails.id,
        name: productDetails.name,
        price: productDetails.price,
        // image: ''
        image: productDetails.galleries[0].image,
        qty: 1
      };
      this.$store.dispatch('addKeranjang', memoriProduk);
      this.$swal.fire({
        icon: 'success',
        title: memoriProduk.name,
        text: 'Berhasil Masuk Keranjang'
      })
    }
  },
  mounted() {
    axios
      .get(`${this.$hostname}/products/`)
      .then(result => (this.products = result.data.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.product-item {
  margin-right: 25px;
}
</style>
