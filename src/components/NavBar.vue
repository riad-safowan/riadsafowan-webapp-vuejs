<template>
    <nav class="bg-blue-100 dark:bg-black sm:h-14 md:h-20 lg:h-26 flex flex-col sm:flex-row sm:items-center">
        <div class="h-14 flex item-center justify-between p-3">
            <!-- Title-Logo -->
            <div class="m-0 ml-4 text-black dark:text-white text-2xl transition duration-300 ease-in-out select-none">
                <span style="font-weight: 300;">Riad</span>
                <span style="font-weight: 450;">Safowan</span>
            </div>
            <!-- Menu-button -->
            <i v-if="!$grid.sm" @click.prevent="toggleDropdown()"
                class="material-icons text-black dark:text-white cursor-pointer text-3xl">menu</i>
        </div>
        <div v-if="!sm" class="flex-1"></div>
        <!-- Menus -->
        <div :class="[!$grid.sm ? (showDropdown) ? 'max-h-44' : 'max-h-0' : '', 'bg-blue-100', 'dark:bg-black']"
            style="transition: max-height 0.3s;">
            <ul class="p-0 flex flex-col sm:flex-row sm:items-center list-none py-3 px-3">
                <!-- Menu Items -->
                <li v-for="(page) in pages" @click.prevent="clickNavLink(page)" class="nav-item m-0 sm:m-1 py-2 px-0 sm:px-3  w-full flex justify-center text-black dark:text-white
                    hover:bg-blue-200 dark:hover:bg-gray-600 rounded-md" :key="page" :style="{
                        fontWeight: activePage == page ? '600' : 'normal'
                    }">
                    {{ getName(page) }}
                </li>
                <!-- Theme-toggle -->
                <button
                    class="toggle-button ml-auto sm:ml-6  mr-0 py-2 px-4 rounded-full text-sm font-bold bg-black dark:bg-white text-white dark:text-black"
                    @click.prevent="themeChanged()">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
            </ul>
        </div>
    </nav>
</template> 

<style scoped></Style>

<script>

export default {
    components: [
    ],
    created() {
        // this.getThemeSettings()
    },
    props: ['pages', 'activePage', 'navLinkClick', 'themeChanged'],
    data() {
        return {
            showDropdown: false,
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