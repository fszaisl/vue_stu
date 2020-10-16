<template>
	<div class="home">{{message}}</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: "login-page",
	components: {},
	beforeCreate() {
		console.log(`beforeCreate`);
	},
	created() {
		// this.axios.get('/')
	},
	data() {
		return {
			message: "这是一个login页面",
		};
	},
	methods: {
		handleClick: (evt) => {
			console.log(evt);
		},
	},
};
</script>
