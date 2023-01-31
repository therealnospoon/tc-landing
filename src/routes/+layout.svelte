<script>
    import "../app.postcss";
    
    import Nav from "$lib/components/nav.svelte";

</script>

<Nav />

<main class="flex justify-center ">
    <!-- <div class="w-screen h-screen bg-tc-hexagon bg-cover bg-bottom fixed top-0 left-0 z-[-10]">
    </div> -->
    <div class="max-w-4xl w-full py-10 px-5 lg:px-0">
        <slot />
    </div>
</main>

