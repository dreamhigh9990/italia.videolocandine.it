<style scoped>
	
</style>

<template>
	<v-app>
		<sidebar-component></sidebar-component>
		<v-content>
            <!-- <v-container fluid> -->
                <router-view></router-view>
            <!-- </v-container> -->
            <footer-component></footer-component>
		</v-content>
	</v-app>
</template>

<script>
    export default {
        props: ['locale'],
        data () {
            return {
            }
        },
        created() {
            localStorage.setItem('locale', this.locale);
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