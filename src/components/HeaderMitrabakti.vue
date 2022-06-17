<template>
  <!-- Header Section Begin -->
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="mail-service">
            <i class="fa fa-envelope"></i> hello.shayna@gmail.com
          </div>
          <div class="phone-service">
            <i class="fa fa-phone"></i> +628 22081996
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <router-link to="/">
                <img src="img/logo_website_shayna.png" alt />
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-7"></div>
          <div class="col-lg-3 text-right col-md-3">
            <ul class="nav-right">
              <li class="cart-icon">
                Keranjang Belanja &nbsp;
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>{{keranjang.length}}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table>
                      <tbody v-if="keranjang.length > 0">
                        <tr v-for="item in keranjang" :key="item.id">
                          <td class="si-pic">
                            <img :src="item.image" class="photo-item" />
                          </td>
                          <td class="si-text">
                            <div class="product-selected">
                              <p>{{$rupiah(item.price * item.qty)}}</p>
                              <h6>{{item.name}}</h6>
                            </div>
                          </td>
                          <td @click="removeItem(item.id)" class="si-close">
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td>Keranjang Kosong</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5>{{$rupiah(totalHarga)}}</h5>
                  </div>
                  <div class="select-button">
                    <router-link to="/cart" class="primary-btn view-card">VIEW CARD</router-link>
                    <router-link to="/cart" class="primary-btn checkout-btn">CHECK OUT</router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "HeaderMitrabakti",
  methods: {
    removeItem(id) {
        this.$store.dispatch('deleteItem', id);
    }
  },
  computed: {
    ...mapState(['keranjang']),
    totalHarga() {
      return this.keranjang.reduce(function(items, data) {
        return items + data.price;
      }, 0);
    }
  }
};
</script>

<style scoped>
.photo-item {
  width: 80px;
  height: 80px;
}
</style>