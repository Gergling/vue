<template>

	<div>
		{{ msg }}
		<router-link to="/module1">Module root</router-link>
		<router-link to="/module1/sub1">Go to Sub 1</router-link>
		<router-link to="/module1/sub2">Go to Sub 2</router-link>
		<router-view></router-view>
	</div>



</template>

<script>
	export default {
	  data: () => ({
	      msg: 'Module 1 index page message.'
	  })
	}
</script>
