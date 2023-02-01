<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import ConnectWallet from "$lib/components/connect-wallet.svelte";
    import { walletStore } from "@svelte-on-solana/wallet-adapter-core";
    import { onMount } from "svelte";

    onMount(() => {
        if($page.url.pathname !== "/" && !$walletStore.connected) {
            goto("/");
        }
    });

</script>

<nav class="flex justify-center relative z-50">
    <div class="max-w-4xl w-full py-3 px-5 md:px-0">
        <div
            class="flex justify-end w-full"
            class:justify-between={$page.url.pathname !== "/"}
        >
            {#if $page.url.pathname !== "/"}
                <a
                    class="link no-underline flex items-center"
                    href="/">
                    <img
                        class="h-4 m-0 mr-2"
                        alt=""
                        src="/icons/tc-modern-logo.png"
                    />
                    <h1 class="text-xl">Trade Centre</h1>
                </a>
            {/if}
            <div class="flex justify-end">
                {#if $walletStore.connected && $page.url.pathname !== "/page/profile"}
                    <a
                        class="btn rounded-full btn-outline border-primary hover:bg-primary hover:text-white hover:border-primary mr-2"
                        href="/page/profile">
                        Go to profile
                    </a>
                {/if}
                <ConnectWallet />
            </div>
        </div>
    </div>
</nav>
