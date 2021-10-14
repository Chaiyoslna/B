<template>
  <div>
    <!-- เริืิ่ม -->
    <div class="row">
      <div class="leftcolumn">
        <!-- Proouctlist -->
        <ProductList :products="productData" />
        <!-- จบ Proouctlist -->
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h3>เพิ่มสินค้าใหม่</h3>
          <form @submit.prevent="addProduct()">
            <p>
              <label>บาร์โค้ด : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.id"
              />
            </p>
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
                v-model="formProduct.img"
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
              <label>ราคา: </label><br /><textarea
                style="width: 100%"
                v-model="formProduct.detail"
              ></textarea>
            </p>
            <p><input type="submit" value="บีันทึกรายการสินค้า" /></p>
          </form>
        </div>
        <!-- sidebar -->
        <SideBar />
        <!-- จบ sidebar -->
      </div>
    </div>
    <!-- จบ-->
  </div>
</template>


<script>
import ProductList from "./ProductList";
import SideBar from "./SideBar";
export default {
  components: {
    ProductList,
    SideBar,
  },
  data() {
    return {
      formProduct: {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      },
      productData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addProduct() {
      this.productData.push({
        id: this.formProduct.id,
        name: this.formProduct.name,
        detail: this.formProduct.detail,
        price: this.formProduct.price,
        img: this.formProduct.img,
      });
      alert("Ok saved");
      this.formProduct = {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      };
    },
    loadData() {
      this.productData.push(
        {
          id: 1,
          name: "iPhone XS",
          detail:
            "รายละเอียดสินค้า: จอภาพ · จอภาพ Super Retina HD · จอภาพ Multi-Touch แบบ OLED ทั้งหน้าจอ ขนาด 5.8 นิ้ว (แนวทแยง) · จอภาพ HDR · ความละเอียด 2436 x 1125 พิกเซลที่ 458 ppi ",
          price: "เริ้มต้นที่ 25000$",
          img:
            "https://th-live-01.slatic.net/p/1b38bb3f399ff09a00cd45214bfde087.jpg",
        },
        {
          id: 2,
          name: "iPhone 11",
          detail:
            "รายละเอียดสินค้า:  6.1 นิ้ว แบบ Liquid Retina HD Display ความละเอียด 828 x 1792 พิกเซล ชิปเซ็ต Apple A13 Bionic แบบ Hexa-Core Processor ความเร็ว 2.65 GHz. RAM 4GB",
          price: "เริ้มต้นที่ 22000$",
          img:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/109D6/production/_108745086_gettyimages-1173663868.jpg",
        },
        {
          id: 3,
          name: "iPhone 13  ",
          detail:
            "รายละเอียดสินค้า: 5G. BlackWhiteRedPinkBlue. ขนาด: 146.7 × 71.5 × 7.7 มม. น้ำหนัก 174 กรัม. Apple. 6.1นิ้ว1170 x 2532 พิกเซล. 12 MP + 12MP (Ultrawide) กล้องหน้า 12MP",
          price: "เริ้มต้นที่ 32000$",
          img:
            "https://www.flashfly.net/wp/wp-content/uploads/2021/08/iphone-13-rumors-feature.jpeg",
        }
      );
      console.log(this.productData);
    },
  },
};
</script>


<style scoped>
</style>