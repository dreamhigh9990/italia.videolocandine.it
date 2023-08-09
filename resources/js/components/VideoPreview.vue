<template>
    <video width="640" height="480" controls autoplay muted loop :src="src"></video>
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