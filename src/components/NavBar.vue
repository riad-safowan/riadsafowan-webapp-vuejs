<template>
    <nav class="navbar" :style="{
        backgroundColor: theme === 'dark' ? '#081014' : 'white',
        height: 'auto',
        padding: '10px',
        display: 'flex',
        alignItems: 'center'
    }">



        <h1 class="name" :style="{
            margin: '0',
            marginLeft: isScreenSmall ? '15px' : '30px',
            color: theme === 'dark' ? 'white' : 'black',
            fontSize: isScreenSmall ? '25px' : '30px',
            transition: 'font-size 0.3s ease',
            userSelect: 'none'
        }">
            <span style="font-weight: 300;">Riad</span>
            <span style="font-weight: 450;">Safowan</span>
        </h1>
        <div style="flex: 1;"></div>



        <ul v-if="!isScreenSmall" class="menus" :style="{
            padding: '0',
            margin: '0',
            display: 'flex',
            listStyleType: 'none',
            alignItems: 'center'
        }">
            <li v-for="(page) in pages" @click.prevent="navLinkClick(page)" class="nav-item" :key="page" :style="{
                margin: '3px',
                padding: '5px 0px',
                display: 'inline-block',
                color: theme === 'dark' ? 'white' : 'black',
                cursor: 'pointer',
                width: '65px',
                display: 'flex',
                justifyContent: 'center',
                fontWeight: activePage == page ? '600' : 'normal'
            }">
                {{ getName(page) }}
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



        <i v-if="isScreenSmall" @click.prevent="toggleDropdown()" class="material-icons" :style="{
            fontSize: '30px',
            color: theme === 'dark' ? 'white' : 'black',
            cursor: 'pointer'
        }">menu</i>
    </nav>



    <div class="drop-down" v-if="(isScreenSmall)" :style="{
        backgroundColor: theme === 'dark' ? '#081014' : 'white',
        maxHeight: (isScreenSmall && showDropdown) ? '150px' : '0px',
        transition: 'max-height 0.3s'
    }">
        <ul class="menus" :style="{
            padding: '0',
            display: 'flex',
            listStyleType: 'none',
            flexDirection: 'column',
        }">
            <li v-for="(page) in pages" @click.prevent="clickNavLink(page)" class="nav-item" :key="page" :style="{
                margin: '0px',
                padding: '5px 0px',
                color: theme === 'dark' ? 'white' : 'black',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                fontWeight: activePage == page ? '600' : 'normal'
            }">
                {{ getName(page) }}
            </li>



            <button v-if="(showDropdown)" class="toggle-button" @click.prevent="themeChanged(); toggleDropdown()" :style="{
                padding: '7px 14px',
                marginLeft: 'auto',
                marginRight: '10px',
                borderRadius: '30px',
                fontSize: '13px',
                fontWeight: 'bold',
                backgroundColor: theme === 'dark' ? 'white' : 'black',
                color: theme === 'dark' ? 'black' : 'white',
            }">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
        </ul>
    </div>
</template> 

<style scoped>
.nav-item:hover {
    background-color: #00000020;
    border-radius: 5px;
}
</Style>

<script>


export default {
    components: [
    ],
    created() {
        // this.getThemeSettings()
    },
    props: ['theme', 'isScreenSmall', 'pages', 'activePage', 'navLinkClick', 'themeChanged'],
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        clickNavLink(name) {
            if (this.showDropdown) {
                this.showDropdown = false
            }
            this.navLinkClick(name);
        }
        , getName(page) {
            let result;

            switch (page) {
                case 'contact':
                    result = 'Contact';
                    break;
                case 'about':
                    result = 'About';
                    break;
                default:
                    result = 'Home';
            }

            return result;
        }
    }
}

</script>