<script>
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
            userFlair      : "Alpha trader",
            onlineStatus   : "online",
            lastMonthPlace : 12,
            weeklyGains    : {
                amount : 10293.91,
                roi    : 175.42,
            },
            currentStatus : {
                amount : 80309.92,
                roi    : 129.42,
            },
            joinDate : "1/7/23",
            pfpPath  : "icons/tc-tutoring.png",
        },
        {
            profileName    : "tradingpro1$1102",
            userFlair      : "Alpha trader",
            onlineStatus   : "online",
            lastMonthPlace : 12,
            weeklyGains    : {
                amount : 10293.91,
                roi    : 175.42,
            },
            currentStatus : {
                amount : 80309.92,
                roi    : 129.42,
            },
            joinDate : "1/7/23",
            pfpPath  : "icons/tc-tutoring.png",
        },
        {
            profileName    : "tradingpro1$1102",
            userFlair      : "Alpha trader",
            onlineStatus   : "online",
            lastMonthPlace : 12,
            weeklyGains    : {
                amount : 10293.91,
                roi    : 175.42,
            },
            currentStatus : {
                amount : 80309.92,
                roi    : 129.42,
            },
            joinDate : "1/7/23",
            pfpPath  : "icons/tc-tutoring.png",
        },
        {
            profileName    : "tradingpro1$1102",
            userFlair      : "Alpha trader",
            onlineStatus   : "online",
            lastMonthPlace : 12,
            weeklyGains    : {
                amount : 10293.91,
                roi    : 175.42,
            },
            currentStatus : {
                amount : 80309.92,
                roi    : 129.42,
            },
            joinDate : "1/7/23",
            pfpPath  : "icons/tc-tutoring.png",
        },
    ];

</script>

<div class="flex flex-col h-screen md:h-auto md:flex-row-reverse mb-5">
    <div class="flex justify-center md:justify-end mb-5 md:m-auto">
        <img
            class="max-w-[70%] md:max-w-full"
            alt="rocketship-graphic"
            src="images/tc-rocketship.png"
        />
    </div>
    <div class="md:grow flex flex-col justify-center w-full md:mt-0">
        <div class="flex items-center mb-3">
            <img
                class="h-4 m-0 mr-2"
                alt=""
                src="icons/tc-modern-logo.png"
            />
            <h1 class="text-xl">Trade Centre</h1>
        </div>
        <div class="mb-6">
            <h1 class="text-5xl font-semibold mb-3">Make your own luck.</h1>
            <p class="max-w-sm">
                A community of traders that build success through shared
                insight.
            </p>
        </div>
        <div class="flex">
            <button class="btn btn-primary rounded-full mr-2"
            >CONNECT WALLET</button
            >
            <button class="btn btn-outline rounded-full">READ WHITEPAPER</button
            >
        </div>
    </div>
</div>
<div class="mb-16">
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Gain access to premium trading signals
    </h2>
    <div class="grid grid-cols-1 gap-y-6 md:gap-y-4 md:px-0 md:gap-y-0 md:gap-x-4 md:grid-cols-3 justify-between mt-3">
        {#each cardData as card}
            <div class={"py-5 card md:card-compact card-bordered border-primary bg-card-gradient"}
            >
                <figure class="p-10 m-3">
                    <img
                        alt={card.altTxt}
                        src={card.iconPath}
                        width={`${card.iconWidth}px`}
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{card.title}</h2>
                    <p>{card.body}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<div>
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Win money in monthly competitions
    </h2>
    <div class="flex flex-col mt-3">
        <div class="grid grid-cols-4 mb-3">
            <div class="flex items-center justify-center">User</div>
            <div class="flex items-center justify-center">Last month</div>
            <div class="flex items-center justify-center">Weekly gains</div>
            <div class="flex items-center justify-center">Current status</div>
        </div>
        <div class="card-container flex w-full">
            <div class="grid grid-rows-4 mr-5">
                <h2 class="flex items-center mb-5">1</h2>
                <h2 class="flex items-center mb-5">2</h2>
                <h2 class="flex items-center mb-5">3</h2>
                <h2 class="flex items-center mb-5">4</h2>
            </div>
            <div class="w-full">
                {#each dummyCompData as dummyCard}
                    <div class="grid gap-x-4 grid-cols-4 mb-5">
                        <div class="competition-card bg-card-gradient h-32 border rounded-xl border-primary col-span-4">
                            <div class="h-full grid grid-cols-4">
                                <div class="flex flex-col items-center justify-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img
                                                alt="Avatar Tailwind CSS Component"
                                                src={dummyCard.pfpPath} />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{dummyCard.profileName}</div>
                                        <div class="text-sm opacity-50">{dummyCard.onlineStatus}</div>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center justify-center">{dummyCard.lastMonthPlace}</div>
                                <div class="flex flex-col items-center justify-center">{dummyCard.weeklyGains.amount}</div>
                                <div class="flex flex-col items-center justify-center">{dummyCard.currentStatus.amount}</div>
                            </div>
        
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <!-- <div class="grid grid-cols-5 mb-3">
            <div></div>
            <div class="flex items-center justify-center">User</div>
            <div class="flex items-center justify-center">Last month</div>
            <div class="flex items-center justify-center">Weekly gains</div>
            <div class="flex items-center justify-center">Current status</div>
        </div>
      
        {#each dummyCompData as dummyCard, i}
            <div class="grid gap-x-4 grid-cols-5 mb-5">
                <div class="h-full flex items-center justify-center">{i + 1}</div>
                <div class="competition-card bg-card-gradient h-32 border rounded-xl border-primary col-span-4">
                    <div class="h-full grid grid-cols-4">
                        <div class="flex flex-col items-center justify-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img
                                        alt="Avatar Tailwind CSS Component"
                                        src={dummyCard.pfpPath} />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{dummyCard.profileName}</div>
                                <div class="text-sm opacity-50">{dummyCard.onlineStatus}</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center">{dummyCard.lastMonthPlace}</div>
                        <div class="flex flex-col items-center justify-center">{dummyCard.weeklyGains.amount}</div>
                        <div class="flex flex-col items-center justify-center">{dummyCard.currentStatus.amount}</div>
                    </div>

                </div>
            </div>

        {/each} -->
        
    </div>
</div>
