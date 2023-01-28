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

<div class="flex flex-col justify-center mb-10 md:flex-row-reverse md:mb-5">
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
    <div class="grid grid-cols-1 gap-y-6 md:px-0 sm:gap-x-3 md:gap-x-4 md:grid-cols-3 justify-between mt-3">
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

    <!--The TABLE way-->
    <!-- <table class="table mt-3">
        table headers
        <thead>
            <tr>
                <th></th>
                <th>User</th>
                <th>Weekly gains</th>
                <th>Current status</th>
            </tr>
        </thead>
        table body
        <tbody class="competition-table-body">
            {#each dummyCompData as dummyCard, i}
                <tr>
                    <th>
                        <h2>{i + 1}</h2>
                    </th>
                    <td class="flex flex-col items-center justify-center space-x-3">
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
                    </td>
                    <td>{dummyCard.weeklyGains.amount}</td>
                    <td>{dummyCard.currentStatus.amount}</td>
                </tr>
            {/each}
        </tbody>
    </table> -->

    <!-- The GRID COLUMN WAY -->
    <div class="flex flex-col mt-3">
        <div class="flex justify-center mb-3">
            <h1 class="mb-5">Leaderboard</h1>
        </div>
        <div class="card-container flex flex-col items-center">
            {#each dummyCompData as dummyCard}
                <div class="mb-3 w-full md:w-1/2">
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
                                    <p class="text-xs sm:text-sm text-green-300 opacity-50"><i>{dummyCard.onlineStatus}</i></p>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center mr-3">
                                <p class="text-xs sm:text-base font-bold">{dummyCard.currentStatus.amount}</p>
                                <p class="text-xs sm:text-base">ROI {dummyCard.currentStatus.roi}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
