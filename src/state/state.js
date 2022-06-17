// store.js
import { reactive } from 'vue'

export const keranjang = reactive({
  data : [],
  saveKeranjang(productDetails) {
    for (const [key, value] of Object.entries(this.data)) {
     if (value.id == productDetails.id) {
       return key;
     }
   }
   let memoriProduk = {
     id: productDetails.id,
     name: productDetails.name,
     price: productDetails.price,
     // image: ''
     image: productDetails.galleries[0].image
   };
   this.data.push(memoriProduk);
   // dataKucing diserialisasi menjadi string JSON
   const parsed = JSON.stringify(this.data);
   localStorage.setItem("data", parsed);
   // window.location.reload();
 }
})