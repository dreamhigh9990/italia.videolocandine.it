<template>
	<v-app>
		<sidebar-component></sidebar-component>
		<v-content>
            <router-view></router-view>
            <footer-component></footer-component>
		</v-content>
	</v-app>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        created() {
            localStorage.setItem('locale', 'it');
        },
        methods :{
            func(name){
            }
        },
        components: {
        },
        mounted() {
        }
    }
</script>