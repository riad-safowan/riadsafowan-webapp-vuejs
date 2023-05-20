<template>
  <nav-bar :theme="theme" :themeChanged="changeTheme" :pages="pages" :active-page="activePage"
    :nav-link-click="(index) => activePage = index">
  </nav-bar>
    <page-viewer v-if="pages.length > 0" :theme="theme" :page="pages[activePage]"></page-viewer>




</template>

<script>
import NavBar from './components/NavBar.vue'
import PageViewer from './components/PageViewer.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    PageViewer,
  },
  created() {
    this.getPages()
    this.getThemeSettings()
  },
  data() {
    return {
      activePage: 0,
      pages: [],
      theme: 'light'
    }
  }
  , methods: {
    async getPages() {
      let res = await fetch('pages.json')
      let data = await res.json()
      this.pages = data
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
    }
  }
}
</script>

