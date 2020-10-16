<template>
	<div class="home">
		<div>
			{{ message }}
		</div>

    <button v-on:click="handleClick" >点击事件</button>

	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: "Home",
  components: {},
  beforeCreate(){
    console.log(`beforeCreate`)
  },
	created() {
		console.log(this);
		// this.axios.get('/')
  },
	data() {
		return {
			message: "message:123123123",
		};
  },
  methods:{
    handleClick:evt=>{
      console.log(evt)
    }
  }
};
</script>
