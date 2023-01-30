<script>
    import "../app.postcss";
    
    import Nav from "$lib/components/nav.svelte";

</script>

<Nav />

<main class="flex justify-center">
    <div class="max-w-4xl w-full py-10 px-5 lg:px-0">
        <slot />
        <!-- <article class="prose">
            <slot />
            <i>Written by <a href="https://chat.openai.com/">ChatGPT</a></i>
        </article> -->
    </div>
</main>

