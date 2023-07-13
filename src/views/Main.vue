<template>
   <div :class="[theme, 'h-screen', 'flex', 'flex-col']">
        <nav-bar :theme="theme" :isScreenSmall="isScreenSmall" :themeChanged="changeTheme" :pages="pages"
            :active-page="activePage" :nav-link-click="route">
        </nav-bar>
        <router-view :style="{
        height: '100%',
        overflow: 'auto',
        backgroundImage: theme === 'dark' ? 'url(@/../images/cover.jpg)' : '',
        backgroundColor: theme === 'dark' ? '#37474F' : '#FAFAFA',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: theme === 'dark' ? 'white' : 'black',
    }"></router-view>

    </div>
</template>
  
<style scoped></style>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar,
    },
    mounted() {
        this.checkScreenWidth();
        window.addEventListener('resize', this.checkScreenWidth);
    },
    created() {
        this.getThemeSettings()
    },
    data() {
        return {
            activePage: 'home',
            pages:  ['home', 'about', 'contact'],
            theme: 'light',
            isScreenSmall: false,
        }
    }
    , methods: {
        route(name) {
            this.activePage = name
            switch (name) {
                case 'about':
                    this.$router.push('/about');
                    break;

                case 'contact':
                    this.$router.push('/contact');
                    break;
                default: this.$router.push('/');
            }
        },
        changeTheme() {
            let theme = 'light'
            if (this.theme == 'light') {
                theme = 'dark'
            }
            this.theme = theme
            this.storeThemeSettings()
        },
        storeThemeSettings() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSettings() {
            let theme = localStorage.getItem('theme')
            if (theme) {
                this.theme = theme
            }
        },
        checkScreenWidth() {
            this.isScreenSmall = window.innerWidth < 600;
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenWidth);
    }
}
</script>
