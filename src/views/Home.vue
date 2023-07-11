<template>
    <div class="flex justify-center items-start h-full">
        <div class="flex flex-col items-start" :style="{
            margin: isScreenSmall? '60px 20px 0px 20px' : '250px 20px 0px 20px',
            maxWidth: '700px'
        }">
            <h4 class="text-2xl">Hi, it's me</h4>
            <h1 class="mt-3 text-4xl font-bold">Riad Safowan</h1>
            <p class="mt-3" :style="{
                textAlign: 'justify'
            }">A student of computer science and engineering. I am passionate about technology and enjoy exploring
                various aspects of
                software development. With a strong foundation in both web and mobile application development, I strive to
                create seamless and user-friendly experiences. I believe in the power of continuous learning and staying
                updated with the latest industry trends. Through my projects and experiences, I have developed expertise in
                full-stack development, enabling me to work on end-to-end solutions. Feel free to explore my portfolio and
                reach out if you have any questions or collaboration opportunities.</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['theme', 'isScreenSmall']
}

</script>