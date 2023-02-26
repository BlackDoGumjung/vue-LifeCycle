const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

// 프록시?
// 자바스크립트는 반응형이 아닌데, 변경사항을 변화 시키지 않기 때문임
// proxy의 set을 사용해서 자바스크립트를 반응형으로 만들어주는 작업과 동일!!

// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! vue!'
// };

// const handler = {
//   set(target, key, value) {
//     if( key === 'message ' ){
//       target.longMessage = value + 'World'
//     }
//     target.message = value;
//   }
// };
// const proxy = new Proxy(data, handler);
// proxy.message = 'Hello!!!!'
// console.log(proxy.longMessage);
