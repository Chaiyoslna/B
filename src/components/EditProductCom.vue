<template>
  <div>
    <form @submit.prevent="EditProduct()">
      <p>
        <label>ชื่อสินค้า : </label><br /><input
          type="text"
          style="width: 100%"
          v-model="formProduct.name"
        />
      </p>
      <p>
        <label>รูปภาพ : </label><br /><input
          type="text"
          style="width: 100%"
          v-model="formProduct.photo"
        />
      </p>
      <p>
        <label>ราคา: </label><br /><input
          type="text"
          style="width: 100%"
          v-model="formProduct.price"
        />
      </p>
      <p>
        <label>รายฃะเอียดสินค้า: </label><br /><textarea
          style="width: 100%"
          v-model="formProduct.detail"
        ></textarea>
      </p>
      <p>สินค้าแนะนำ</p>
      <p>
        <input
          type="radio"
          id="isRecommand"
          v-model="formProduct.isRecommand"
          value="true"
        />เป็นสินค้าแนะนำ
      </p>

      <p>
        <input
          type="radio"
          id="isRecommand"
          v-model="formProduct.isRecommand"
          value="false"
        />ไม่เป็นสินค้าแนะนำ
      </p>
      <p><input type="submit" value="บีันทึกรายการสินค้า" /></p>
    </form>
  </div>
</template>


<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      formProduct: {
        id: "",
        name: "",
        price: 0,
        detail: "",
        photo: "",
      },
    };
  },
  mounted() {
    this.formProduct = this.$route.params.product;
  },
  methods: {
    EditProduct() {
      const ref = db.collection("products").doc(this.formProduct.id);
      ref.update({
        name: this.formProduct.name,
        price: this.formProduct.price,
        detail: this.formProduct.detail,
        photo: this.formProduct.photo,
        isRecommand: this.formProduct.isRecommand,
      });
      this.$router.push({ name: "ManageProduct" });
    },
  },
};
</script>



<style scoped>
</style>