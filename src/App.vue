<template>
  <div id="app">
    <ul class="navdown">
      <li>
        <router-link class="nav-down" to="/">首页</router-link>
      </li>
      <li>
        <router-link class="nav-down" to="/classify">分类</router-link>
      </li>
      <li>
        <router-link class="nav-down" to="/classlist">课程表</router-link>
      </li>
      <li>
        <router-link class="nav-down" to="/mine">我的</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
 @media screen and (-webkit-min-device-pixel-ratio: 2) {
   .border { border: 0.5px solid #999 }
   }
 @media screen and (-webkit-min-device-pixel-ratio: 3) {
   .border { border: 0.333333px solid #999 }
   }
*, html, body {
  margin: 0;
  padding: 0;
}
.navdown {
    z-index: 1000;
    position: fixed;
    bottom: 0;
    height: 1.32666667rem;
    width: 100%;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid #333;
}
.navdown li {
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style-type:none;
}
.navdown li .nav-down {
  text-decoration: none;
  color: #8c8c8c;
}
</style>
