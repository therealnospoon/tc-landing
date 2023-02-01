<script lang="ts">
    import Saos from "saos";
    import ConnectWallet from "$lib/components/connect-wallet.svelte";
    import { walletStore } from "@svelte-on-solana/wallet-adapter-core";

    const cardData = [
        {
            title     : "1-on-1 tutoring",
            body      : "Whether you're a beginner looking to get started in the crypto world, or an experienced trader looking to improve your skills, our one-on-one tutoring sessions are tailored to your specific needs.",
            iconWidth : 80,
            altTxt    : "Tutor teaching",
            iconPath  : "icons/tc-tutoring.png",
            xMargin   : "mr-5",
        },
        {
            title     : "Weekly calls",
            body      : "Join weekly calls with our experienced trader who will provide analysis on the current market trends, share their trading techniques, and answer any questions you may have.",
            iconWidth : 50,
            altTxt    : "Web camera",
            iconPath  : "icons/tc-weeklycalls.png",
            xMargin   : "",
        },
        {
            title     : "Premium educational content",
            body      : "Covering topics such as market analysis, trading strategies, and risk management. Our education is crafted by experienced traders and updated regularly to reflect the latest market trends and insights.",
            iconWidth : 80,
            altTxt    : "Media content",
            iconPath  : "icons/tc-educontent.png",
            xMargin   : "ml-5",
        },
    ];

    const dummyCompData = [
        {
            profileName    : "tradingpro1$1102",
            onlineStatus   : "online",
            lastMonthPlace : 12,
            currentStatus  : {
                amount : 80309.92,
                roi    : 129.42,
            },
            joinDate : "1/7/23",
            pfpPath  : "/images/pfp1.png",
        },
        {
            profileName    : "yodaweg122",
            onlineStatus   : "offline",
            lastMonthPlace : 127,
            currentStatus  : {
                amount : 73310.00,
                roi    : 97.12,
            },
            joinDate : "11/3/22",
            pfpPath  : "/images/pfp2.png",
        },
        {
            profileName    : "asdcvcv11232",
            onlineStatus   : "online",
            lastMonthPlace : 1,
            currentStatus  : {
                amount : 69420.69,
                roi    : 45.40,
            },
            joinDate : "5/14/22",
            pfpPath  : "/images/pfp3.png",
        },
        {
            profileName    : "boohaww1",
            onlineStatus   : "offline",
            lastMonthPlace : 74,
            currentStatus  : {
                amount : 38100.58,
                roi    : 14.89,
            },
            joinDate : "2/12/22",
            pfpPath  : "/images/pfp4.png",
        },
    ];

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
            once>
            <div class="flex items-center mb-3">
                <img
                    class="h-4 m-0 mr-2"
                    alt=""
                    src="icons/tc-modern-logo.png"
                />
                <h1 class="text-xl">Trade Centre</h1>
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
                <p class="max-w-sm">
                    A community of traders that build success through shared
                    insight.
                </p>
            </Saos>
        </div>
        <div class="flex">
            {#if $walletStore.connected}
                <a
                    class="btn btn-outline border-primary hover:bg-primary hover:text-white hover:border-primary rounded-full mr-2"
                    href="/page/profile">
                    Go to profile
                </a>
            {:else}
                <ConnectWallet />
            {/if}
               
            <button class="btn btn-outline rounded-full">READ WHITEPAPER</button>
    
        </div>
    </div>
    
</div>
<div class="mb-16 relative">
    <div class="w-[120vw] h-screen bg-tc-hexagon bg-contain bg-no-repeat bg-right absolute top-0 -left-full z-[-10] mix-blend-plus-lighter">
    </div>
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Gain access to premium trading signals
    </h2>
    <div class="grid grid-cols-1 gap-y-6 md:px-0 sm:gap-x-3 md:gap-x-4 md:grid-cols-3 justify-between mt-3">
        {#each cardData as card, idx}
            <Saos
                animation={`fade-in 750ms cubic-bezier(0.35, 0.5, 0.65, 0.95) both ${300 * idx}ms`}
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

<div class="relative">
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
</div>
