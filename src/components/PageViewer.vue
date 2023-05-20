<template>
    <div class="body" :style="{
        height: '100%',
        backgroundColor:  theme === 'dark' ? '#37474F' : 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
    }">
        <h1 :style="{
            marginTop: '20px',
            color: theme === 'dark' ? 'white' : 'black',
        }">{{ page.pageTitle }}</h1>
        <p :style="{
            color: theme === 'dark' ? 'white' : 'black',
        }">{{ page.content }}</p>
    </div>
</template> 

<script>

export default {
    props: ['theme', 'page']
}
</script>