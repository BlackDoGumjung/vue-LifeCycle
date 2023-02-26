<template>
  <div id="app">
    <header>
      <h1>vue behind the scenes</h1>
    </header>
    <section>
      <h2>how vue works</h2>
      <!-- <input type="text" @input="saveInput" v-model="currentInput" /> -->
      <!-- v-model을 사용할 경우 @input을 삭제해도 됨 -->
      <input type="text" ref="userText" />
      <!-- 여기 엑서스 하려는 걸 저장 -->
      <button @click="setText">Set Text</button>
      <p>{{ msg }}</p>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  data() {
    return {
      currentUserInput: '',
      msg: 'Vue is Great!',
    };
    // vue 역할 : data에서 정의한 내용을 지속적으로 추적
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
      // 모든 프로퍼티와 메서드가 객체화되므로, this는 전역객체를 가리키게 됨
    },
    setText() {
      // this.msg = this.currentUserInput;
      // this.msg = this.$refs.userText;
      // input 요소의 DOM element에 접근
      this.msg = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    // 자주사용1
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    // 자주사용2
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    // 자주사용3
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    // 자주사용4
    console.log('unmounted');
  },
  //source > console.log 부분에 breakpoint를 걸고 resume을 움직여주면
  //각각의 구간에서 console.log가 실행된다는 것을 알 수 있다!
  //쓰는 순서는 상관없음
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
