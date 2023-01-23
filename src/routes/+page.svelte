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

</script>

<div class="flex mb-5">
    <div class="flex flex-col justify-center w-full">
        <div class="flex items-center mb-3">
            <img
                class="h-4 m-0 mr-2"
                alt=""
                src="icons/tc-modern-logo.png" />
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
    <div>
        <img
            class="max-w-xs"
            alt="rocketship-graphic"
            src="images/tc-rocketship.png"
        />
    </div>
</div>
<div class="mb-16">
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Gain access to premium trading signals
    </h2>
    <div class="flex justify-between mt-3">
        {#each cardData as card}
            <div class={`w-1/3 py-5 ${card.xMargin} card card-compact card-bordered border-primary bg-card-gradient`}
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
        <!-- <div class="w-1/3 py-5 card card-compact card-bordered border-primary bg-card-gradient"
    >
        <figure class="p-10 m-3">
            <img
                alt="Web camera"
                src="icons/tc-weeklycalls.png"
                width="50px"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Weekly calls</h2>
            <p>
                Join weekly calls with our experienced trader who will
                provide analysis on the current market trends, share their
                trading techniques, and answer any questions you may have.
            </p>
        </div>
    </div> -->
        <!-- <div class="w-1/3 py-5 ml-5 card card-compact card-bordered border-primary bg-card-gradient"
    >
        <figure class="p-10 m-3">
            <img
                alt="Media content"
                src="icons/tc-educontent.png"
                width="80px"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Premium educational content</h2>
            <p>
                Covering topics such as market analysis, trading strategies,
                and risk management. Our education is crafted by experienced
                traders and updated regularly to reflect the latest market
                trends and insights.
            </p>
        </div>
    </div> -->
    </div>
</div>

<div>
    <h2 class="max-w-md text-3xl font-medium mb-16">
        Win money in monthly competitions
    </h2>
    <div class="flex justify-between mt-3">
        {#each cardData as card}
            <div class="w-1/3 py-5 card card-compact card-bordered border-primary bg-card-gradient"
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
        <!-- <div class="w-1/3 py-5 card card-compact card-bordered border-primary bg-card-gradient"
        >
            <figure class="p-10 m-3">
                <img
                    alt="Web camera"
                    src="icons/tc-weeklycalls.png"
                    width="50px"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Weekly calls</h2>
                <p>
                    Join weekly calls with our experienced trader who will
                    provide analysis on the current market trends, share their
                    trading techniques, and answer any questions you may have.
                </p>
            </div>
        </div> -->
        <!-- <div class="w-1/3 py-5 ml-5 card card-compact card-bordered border-primary bg-card-gradient"
        >
            <figure class="p-10 m-3">
                <img
                    alt="Media content"
                    src="icons/tc-educontent.png"
                    width="80px"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Premium educational content</h2>
                <p>
                    Covering topics such as market analysis, trading strategies,
                    and risk management. Our education is crafted by experienced
                    traders and updated regularly to reflect the latest market
                    trends and insights.
                </p>
            </div>
        </div> -->
    </div>
</div>
