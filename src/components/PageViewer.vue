<template>
    <div class="body" :style="{
        height: '100%',
        backgroundColor: theme === 'dark' ? '#37474F' : 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        color: theme === 'dark' ? 'white' : 'black',
    }">
        <h1 style="margin-top: 30px;">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template> 

<script>

export default {
    props: ['theme', 'page']
}
</script>