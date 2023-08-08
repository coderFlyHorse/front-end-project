import { createApp } from 'vue'
import "@/style/reset.scss"
// 引入根组件
import App from '@/App.vue'
// 路由
import router from '@/router'
// 挂在在app上 的 全局组件
import HostitalTop from '@/components/hospital_top/index.vue'
import HostitalBottom from '@/components/hospital_bottom/index.vue'
// 全部引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('HostitalTop',HostitalTop)
app.component('HostitalBottom',HostitalBottom)
// UI库
app.use(ElementPlus)
app.use(router)
app.mount('#app')