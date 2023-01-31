<script>
    import { page } from "$app/stores";
    import ConnectWallet from "$lib/components/connect-wallet.svelte";

</script>

<nav class="flex justify-center relative z-50">
    <div class="max-w-4xl w-full py-3 px-5 md:px-0">
        <div
            class="flex justify-end w-full"
            class:justify-between={$page.url.pathname !== "/"}
        >
            {#if $page.url.pathname !== "/"}
                <a
                    class="link flex items-center"
                    href="/">
                    <img
                        class="h-4 m-0 mr-2"
                        alt=""
                        src="icons/tc-modern-logo.png"
                    />
                    <h1 class="text-xl">Trade Centre</h1>
                </a>
            {/if}
            <div class="flex justify-end">
                <ConnectWallet />
            </div>
        </div>
    </div>
</nav>
