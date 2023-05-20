<template>
    <a class="nav-link" :class="{ active: active }" aria-current="page" :href="url" :title="`This link goes to the ${text}`"
        :style="{
            fontSize: '17',
        }">
        {{ text }}</a>
</template>

<script>
export default {
    props: ['active', 'url', 'text'],
}
</script>
