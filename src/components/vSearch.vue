<template>
  <div class="container">
    <div class="image">
      <img src="http://p.qpic.cn/qqcourse/QFzQYCgCrxn1BGn5w1eAJHwicicMuz2VolBXTC4YQKpEL5lSeI1LWd1ibPgTsmEmKR7/" alt="">
    </div>
    <div class="search-box" @click="searchClasses()" >
      <span></span>
      <input type="text" placeholder="搜索老师、机构、课程">
    </div>
  </div>
</template>
<script>
    export default {
      methods: {
        searchClasses () {
            this.$router.push({
                name: 'search'
            })
        }
      }
    }
</script>
<style scoped>
  .container {
    position: fixed;
    z-index: 100;
    background-color: #fff;
    width: 100%;
    /* height: 1.0555556rem; */
    display: flex;
  }
  .container .image {
    width: .555556rem;
    /* height: .694444rem; */
    margin: .25rem .3055556rem .25rem .3611111rem;
  }
  .container .image img {
    width: 100%;
    height: 100%;
  }
  .search-box {
    margin-right: .333333rem;
    flex: 1;
  }
  .search-box span {
    position: absolute;
    top: .3755556rem;
    left: 3rem;
    width: .5rem;
    height: .5rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJlSURBVFhH7ZfRShRRHMb3Jkqzm7wJSrqIIDBxX6C0a62H6C7oqq4ixYreQMmMHkXbjLQeIYgyQuqiyIuotKDt923fyLCszv/MzF5EDnzs2T3/7zffOXNm5myjcXDUOAOtVquJ7qOn6AP6ZamtQ33NGk/ZG8VJJtEaagf1XJ7agwEdRI9zIT7RnkdT6Iz7VaO2flPf51z9I9oDtQQDNIxeGv6Nz9voaBFcNa79bu8LsYp8+/Z75FmYN3w/nwqUB204lFiDqYzd+txlek37RFkQ3pNIjDZaKsXBeMkATfloKUjOBGMMifUbXUzmYVp3oFvJ5j0M8GbNXEtiYtJzRtOru6lwAUfhsIZQdveNR30NTPccaD5sChbCXTD7btDSUCAdmqGpsClYCHPa7CdBSyeQXgEKNBI2BQthnjX7Y9DSCfTTpkNhU7AQ7jGzd4KWvgc67EDbKYH6eclOO9BmSqBsUU+HTcFCwJcdaCVo6Vyy7LZfCJuChbAfONCdoKUTKHsw6iE2FDYWFIqFthxoLImLSZsr3fqzScZ9isUyczWZiXEC6UWoF2LaaHqcDcY4+mHmheRAMmBe8oje8nmqFOQvZwS9N2uxLEcgbUuzDdpGmZnyzLxzGG3yqm1lARxH2VZEUz6DChc6NXoia83I087pRukZyozAjqCHvv6Cf0GL6Ao655MrgNr6TX1bDqF1qO/Xcv7qobymJoA+6xpxfvTd7VVqdxcw7au1h3IwbUfn0DJ6hb6ibbSJVtzX8w9B30JVWQf/QqibVQZYm7drpg5C7TmzuZnSI6JZ2yWoAnKo61UY/5f3Dy7dC4CdAEhQAAAAAElFTkSuQmCC
);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .search-box input {
    width: 100%;
    height: 0.666667rem;
    border: none;
    border-radius: .1rem;
    font-size: .30555556rem;
    line-height: 0.666667rem;
    font-weight: 800;
    margin-top: .25rem;
    background-color: #f2f2f2;
    text-align: center;
  }
</style>
