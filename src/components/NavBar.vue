<template>
    <nav class="navbar" :style="{
        backgroundColor: theme === 'dark' ? '#243036' : '#FAFAFA',
        height: '100px',
        padding: '20px',
    }">
        <p class="name" :style="{
            margin: '0',
            marginLeft: '30px',
            color: theme === 'dark' ? 'white' : 'black',
            fontSize: '35px',
            fontWeight: '400'
        }">Riad Safowan</p>
        <div style="flex: 1;"></div>
        <ul class="menus" :style="{
            padding: '0',
            margin: '0',
            display: 'flex',
            listStyleType: 'none',
            alignItems: 'center'
        }">
            <li v-for="(page, index) in pages" class="nav-item" :key="index"
         
            :style="{
                margin: '0',
                display: 'inline-block',
                paddingLeft: '10px',
                color: theme === 'dark' ? 'white' : 'black',
                cursor: 'pointer',
            }">
                <navbar-link class="nav-link" :active="activePage == index" :url="url" :text="text"
                    @click.prevent="navLinkClick(index)">
                    {{ page.link.text }}</navbar-link>
            </li>
            <button class="toggle-button" @click.prevent="themeChanged()" :style="{
                marginLeft: '25px',
                padding: '7px 14px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 'bold',
                backgroundColor: theme === 'dark' ? 'white' : 'black',
                color: theme === 'dark' ? 'black' : 'white',
            }">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
        </ul>
    </nav>
</template> 

<script>
import NavbarLink from './NavbarLink.vue'

export default {
    components: [
        NavbarLink
    ],
    created() {
        // this.getThemeSettings()
    },
    props: ['theme', 'pages', 'activePage', 'navLinkClick', 'themeChanged'],
    // data() {
    //     return {
    //         theme: 'light'
    //     }
    // },
    methods: {
        // changeTheme() {
        //     let theme = 'light'
        //     if (this.theme == 'light') {
        //         theme = 'dark'
        //     }
        //     this.theme = theme
        //     this.storeThemeSettings()
        // },
        // storeThemeSettings() {
        //     localStorage.setItem('theme', this.theme)
        // },
        // getThemeSettings() {
        //     let theme = localStorage.getItem('theme')
        //     if (theme) {
        //         this.theme = theme
        //     }
        // }
    }
}
</script>