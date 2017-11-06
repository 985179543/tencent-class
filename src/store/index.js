import Vue from 'vue'
import Vuex from 'vuex'
import classes from './modules/classes'
import Classitems from './modules/Classitems'

Vue.use(Vuex)


const state = {
    banners: [
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/f854943e493e49259daad99aaea1ba5e/0?tp=webp'},
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/463ec4664b0440c089e1c20599abe3e3/0?tp=webp'},
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/cdc4cd3a49e64ba18305028a3df956d8/0?tp=webp'},
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/f854943e493e49259daad99aaea1ba5e/0?tp=webp'},
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/d8fe05d1ad9741168724b283f9abc8f8/0?tp=webp'},
        {imageurl: 'http://p.qpic.cn/qqconadmin/0/97fc29c1a61449fd815dd02a4d788690/0?tp=webp'},
    ]
}
export default new Vuex.Store ({
    state,
    modules: {
        classes,
        Classitems
    }
})