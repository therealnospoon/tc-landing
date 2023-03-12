<script lang="ts">
    import Saos from "saos";
    // import ConnectWallet from "$lib/components/connect-wallet.svelte";
    // import { walletStore } from "@svelte-on-solana/wallet-adapter-core";

    // import users from "$lib/data/users";

    const inspoCards = [
        {
            title    : "Monthly Cash Competitions",
            body     : "Holders will get access to monthly trading competitions and reap a % of The Bank for each winner.",
            altTxt   : "Cash competitions",
            iconPath : "icons/cash-prizes.png",
        },
        {
            title    : "Airdrops of SOL/NFT to delisted holders",
            body     : "Every Month, lucky delisted holders will be airdropped a % of The Bank",
            altTxt   : "Airdrop",
            iconPath : "icons/airdrop.png",
        },
        {
            title    : "Rarity Bonus",
            body     : "Gamified rarity system meaning holders of higher ranked NFTs get a bonus on each payout",
            altTxt   : "Rarity bonus",
            iconPath : "icons/raritybonus.png",
        },
        {
            title    : "Phase II Expansion",
            body     : "A campaign to provide even more immense value for holders. TBA!",
            altTxt   : "Phase II Expansion",
            iconPath : "icons/expansion.png",
        },
    ];

    const infoCards = [
        {
            title    : "1-on-1 tutoring",
            body     : "Whether you're a beginner looking to get started in the crypto world, or an experienced trader looking to improve your skills, our one-on-one tutoring sessions are tailored to your specific needs.",
            altTxt   : "Tutor teaching",
            iconPath : "icons/tc-tutoring.png",
        },
        {
            title    : "Weekly calls",
            body     : "Join weekly calls with our experienced trader who will provide analysis on the current market trends, share their trading techniques, and answer any questions you may have.",
            altTxt   : "Web camera",
            iconPath : "icons/tc-weeklycalls.png",
        },
        {
            title    : "Premium educational content",
            body     : "Covering topics such as market analysis, trading strategies, and risk management. Our education is crafted by experienced traders and updated regularly to reflect the latest market trends and insights.",
            altTxt   : "Media content",
            iconPath : "icons/tc-educontent.png",
        },
        {
            title    : "Premium trading signals",
            body     : "Holders get access to premium trading signals from proved profitable traders specializing in crypto futures, SPX, stocks, & SOL NFTs.",
            altTxt   : "Trading signals",
            iconPath : "icons/trade-signals.png",
        },
    ];

// const dummyCompData = users;

</script>

<div class="flex flex-col justify-center mb-10 md:flex-row-reverse md:mb-5 relative">
    <div class="w-[120vw] h-screen bg-tc-hexagon bg-contain bg-no-repeat bg-left absolute top-0 -left-1/3 z-[-10] mix-blend-plus-lighter">
    </div>
    <div class="flex justify-center md:justify-end mb-5 md:m-auto">
        <Saos
            animation={"fade-in 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 250ms"}
            once>
            <div class="max-w-[70%] md:max-w-full m-auto">
                <img
                    class="max-w-[70%] md:max-w-full m-auto"
                    alt="rocketship-graphic"
                    src="images/tc-rocketship.png"
                />
            </div>
        </Saos>
    </div>
    <div class="md:grow flex flex-col justify-center w-full md:mt-0">
        <Saos
            animation={"from-below 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 300ms"}
            once
        >
            <div class="flex items-center mb-3">
                <img
                    class="h-4 m-0 mr-2"
                    alt=""
                    src="icons/tc-modern-logo.png"
                />
                <h1 class="md:text-xl">Trade Centre NFT Collection</h1>
            </div>
        </Saos>
            
        <div class="mb-6">
            <Saos
                animation={"from-below 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 400ms"}
                once>
                <h1 class="text-5xl font-semibold mb-3">Make your own luck.</h1>
            </Saos>
            <Saos
                animation={"from-below 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 600ms"}
                once>
                <p class="max-w-xs text-xs md:text-lg">
                    Stack Your Capital With Ease at Trade Centre.
                </p>
            </Saos>
        </div>
        <div class="flex">
            <a
                class="btn btn-outline border-primary hover:bg-primary hover:text-white hover:border-primary rounded-full mr-2"
                href="https://discord.gg/tradecentre">
                Join Discord
            </a>
               
            <a
                class="btn btn-outline rounded-full"
                href="https://tradecentrenft.gitbook.io/trade-centre/"
            >
                READ WHITEPAPER
            </a>
    
        </div>
    </div>
    
</div>
<div class="mb-16 relative">
    <div class="w-[120vw] h-screen bg-tc-hexagon bg-contain bg-no-repeat bg-right absolute top-0 -left-full z-[-10] mix-blend-plus-lighter">
    </div>
    <Saos
        animation={"from-below 900ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 900ms"}
        once
    >
        <h2 class="max-w-md text-3xl font-medium mb-16">
            Gain access to premium trading signals & gamified revenue share
        </h2>
    </Saos>
    <div class="grid grid-cols-1 gap-y-6 md:px-0 sm:gap-x-3 md:gap-x-4 md:grid-cols-2 my-3 items-center">
        <Saos
            animation={"fade-in 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 500ms"}
            once
        >
            <div class="flex items-center justify-center md:p-5">
                <img
                    class="rounded-md"
                    alt="trade-centre nft example"
                    src="/images/pfp4.png" />
            </div>
        </Saos>
        <div class="grid grid-flow-row md:h-full">
            <Saos
                animation={"fade-in 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 300ms"}
                once
            >
                <h2 class="text-2xl font-medium mb-4 md:mb-0">Trade Centre NFT</h2>
            </Saos>
            <Saos
                animation={"fade-in 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 500ms"}
                once
            >
                <p>Trade Centre NFT grants you access to everything in the world of trading like never seen before.<br>
                    Holders get access to premium trading signals from proved profitable traders specializing in crypto futures, SPX, stocks, & SOL NFTs. Premium educational content, 1-on-1 tutoring, weekly calls are also provided for holders.<br>
                    We will be utilizing multiple passive income streams to generate sustainable and substantial passive income for our holders.<br>
                </p>
            </Saos>
            <Saos
                animation={"fade-in 700ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both 700ms"}
                once
            >
                <ul class="list-disc mt-2 pl-5">
                    <li>referral income</li>
                    <li>subscription revenue</li>
                    <li>trading profits</li>
                    <li>secondary royalties</li>
                </ul>
            </Saos>
        </div>
    </div>
   
    <div class="grid grid-cols-1 gap-y-6 md:px-0 sm:gap-x-4 md:grid-cols-4 justify-between mt-16">
        {#each inspoCards as card, idx}
            <Saos
                animation={`fade-in 750ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both ${300 * idx}ms`}
                once>
                <div class="grid grid-flow-row min-h-[350px] card card-bordered border-primary p-2">
                    <figure class="m-3">
                        <img
                            class="h-12"
                            alt={card.altTxt}
                            src={card.iconPath}
                        />
                    </figure>
                    <h2 class="card-title">{card.title}</h2>
                    <p>{card.body}</p>
                </div>
            </Saos>
        {/each}
    </div>
    
</div>
<div class="my-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-0 justify-between mt-3">
        {#each infoCards as card, idx}
            <Saos
                animation={`from-below 750ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both ${300 * idx}ms`}
                once>
                <div class={"grid grid-flow-row min-h-[450px] p-5 card card-bordered border-primary bg-card-gradient"}>
                    <figure class="p-10 m-3">
                        <img
                            class="max-w-auto max-h-12"
                            alt={card.altTxt}
                            src={card.iconPath}
                        />
                    </figure>
                    <h2 class="card-title">{card.title}</h2>
                    <p>{card.body}</p>
                </div>
            </Saos>
        {/each}
    </div>
</div>

<div class="flex justify-center items-center">
    <p>Made by</p>
    <a
        class="btn btn-link"
        href="https://www.matr.world"
    >
        Matr
    </a>
</div>

<!-- <div class="relative">
    <div class="w-[120vw] h-screen bg-tc-hexagon bg-contain bg-no-repeat bg-left absolute top-0 -left-1/3 z-[-10] mix-blend-plus-lighter">
    </div>
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Win money in monthly competitions
    </h2>
    <div class="flex flex-col mt-3">
        <div class="flex justify-center mb-3">
            <h1 class="mb-5">Leaderboard</h1>
        </div>
        <div class="card-container flex flex-col items-center">
            {#each dummyCompData as dummyCard, idx}
                <div class="mb-3 w-full md:w-1/2">
                    <Saos
                        animation={`from-below 750ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both ${200 * idx}ms`}
                        once>
                        <div class="competition-card bg-card-gradient border rounded-xl border-primary p-2 md:p-4">
                            <div class="flex justify-between">
                                <div class="flex items-center mr-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12 mb-1 mr-4">
                                            <img
                                                alt="Avatar Tailwind CSS Component"
                                                src={dummyCard.pfpPath} />
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-xs sm:text-base">{dummyCard.profileName}</p>
                                        <p
                                            class="text-xs sm:text-sm"
                                            class:text-gray-600={dummyCard.onlineStatus === "offline"}
                                            class:text-success={dummyCard.onlineStatus === "online"}
                                        >
                                            <i>{dummyCard.onlineStatus}</i>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center items-end mr-3">
                                    <p class="text-xs sm:text-base font-bold">${dummyCard.currentStatus.amount}</p>
                                    <p class="text-xs sm:text-base">ROI {dummyCard.currentStatus.roi}%</p>
                                </div>
                            </div>
                        </div>
                    </Saos>
                </div>
            {/each}
        </div>
    </div>
</div> -->
