<template>
	<v-img
      	:src="src" contain max-height="700" max-width="900"
    ></v-img>
</template>

<script>
  	export default {
  		props: ['src'],

  		data () {
			return {
				local_src: '',
			}
		},
		watch: {
			src(value){
				this.local_src = value;
			},
		},
  	}
</script>