<script lang="ts">
    import { clusterApiUrl } from "@solana/web3.js";
    import { walletStore } from "@svelte-on-solana/wallet-adapter-core";
    import { goto } from "$app/navigation";

    import {
        workSpace,
        WalletProvider,
        ConnectionProvider,
        WalletModal,
    } from "@svelte-on-solana/wallet-adapter-ui";

    import {
        PhantomWalletAdapter,
        BackpackWalletAdapter,
        GlowWalletAdapter,
    } from "@solana/wallet-adapter-wallets";

    const wallets = [
        new PhantomWalletAdapter(),
        new BackpackWalletAdapter(),
        new GlowWalletAdapter(),
    ];

    const localStorageKey = "walletAdapter";

    const network = clusterApiUrl("mainnet-beta");

    let showConnectWallet = false;

    const connectWallet = async (event:CustomEvent) => {
        showConnectWallet = false;
        await $walletStore.select(event.detail);
        await $walletStore.connect();
    };
    const shortenAddress = (address:string) => `${address.slice(0, 4)}...${address.slice(-4)}`;

    const disconnect = () => {
        if(confirm("Disconnect wallet?")) {
            $walletStore.disconnect();
            goto("/");
        }
    };

</script>

{#if $walletStore.connected}
    <button
        class="btn bg-card-gradient rounded-md px-2 mr-2"
        on:click={disconnect}>
        <img
            class="h-5 mr-2"
            alt=""
            src="https://raw.githubusercontent.com/qudo-code/demo--tiplink/main/static/phantom.svg">
        {shortenAddress($walletStore.publicKey?.toBase58() || "")}
    </button>
{:else}
    <button
        class="btn btn-primary rounded-full px-2 mr-2"
        on:click={() => (showConnectWallet  = true)}>
        <!-- <img
            class="h-5 mr-2"
            alt=""
            src="https://raw.githubusercontent.com/qudo-code/demo--tiplink/main/static/phantom.svg"> -->
        Connect Wallet
    </button>
{/if}

<WalletProvider
    autoConnect={false}
    {localStorageKey}
    {wallets} />
<ConnectionProvider {network} />

{#if showConnectWallet}
    <WalletModal
        maxNumberOfWallets="6"
        on:connect={connectWallet}
        on:close={() => (showConnectWallet = false)}
    />
{/if}
