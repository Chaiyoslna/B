<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

.header {
  padding: 30px;
  text-align: center;
  background: url(https://www.mxphone.com/wp-content/uploads/2020/10/iphone_12_pro_og_202009.jpg);
}
.header h1 {
  font-size: 50px;
  color: #fff;
}
.header p {
  font-size: 20px;
  color: #fff;
}
.menu {
  overflow: hidden;
  background-color: #333;
}

.menu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #ddd;
  color: black;
}

.leftcolumn {
  float: left;
  width: 75%;
}

.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}

.img {
  background-color: #aaa;
  width: 100%;
  height: auto;
  padding: 10px;
}

.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.column1 {
  float: left;
  width: 200px;
  padding: 10px;
}

.column2 {
  float: left;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 400px) {
  .menu a {
    float: none;
    width: 100%;
  }
}
</style>
