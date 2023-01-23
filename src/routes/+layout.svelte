<script>
    import "../app.postcss";

    import Nav from "../components/nav.svelte";

</script>

<Nav />

<main class="flex justify-center min-h-screen">
    <div class="max-w-4xl w-full py-10">
        <slot />
        <!-- <article class="prose">
            <slot />
            <i>Written by <a href="https://chat.openai.com/">ChatGPT</a></i>
        </article> -->
    </div>
</main>

