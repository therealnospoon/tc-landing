<script>
    import { Line } from "svelte-chartjs";
    import {
        Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler
    } from "chart.js";

    import users from "$lib/data/users.js";

    ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler);

    const dataLine = {
        labels   : [ "January", "February", "March", "April", "May", "June", "July" ],
        datasets : [
            {
                label                : "Income",
                lineTension          : 0.4,
                fill                 : true,
                backgroundColor      : "rgba(101, 6, 254, 0.25)",
                borderColor          : "rgba(101, 6, 254, 1)",
                pointBackgroundColor : "rgba(101, 6, 254, 1)",
                data                 : [ 65, 59, 80, 81, 56, 55, 40 ],
            },
            {
                label                : "Expenses",
                fill                 : true,
                lineTension          : 0.4,
                backgroundColor      : "rgba(237, 100, 166, 0.25)",
                borderColor          : "rgba(237, 100, 166, 1)",
                pointBackgroundColor : "rgba(237, 100, 166, 1)",
                data                 : [ 28, 48, 40, 19, 86, 27, 90 ],
            },
        ],
        options : {
            scales : {
                yAxes : [{
                    gridLines : {
                        display : false,
                    },
                }],
            },
        },
    };

    const thisUser = users[0];

</script>
<div class="bg-card-gradient rounded-xl p-5 grid grid-cols-1 md:grid-cols-2">
    <div class="mr-5 flex">
        <div>
            <div class="avatar">
                <div class="mask mask-squircle w-24 h-24 mb-1 mr-4">
                    <img
                        alt="Avatar Tailwind CSS Component"
                        src={thisUser.pfpPath} />
                </div>
            </div>
        </div>
        <div>
            <p class="text-gray-500">Welcome</p>
            <h2 class="text-2xl font-semibold leading-tight">{thisUser.profileName}</h2>
            <h4 class="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block mr-2">${thisUser.currentStatus.amount}</h4>
        </div>
    </div>
    <div class="bg-slate-800 p-3 rounded-xl">
        <h3 class="text-lg font-semibold leading-tight">Income</h3>
        <div class="flex flex-wrap items-end mb-5">
            <h4 class="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block mr-2"
            >$102,831</h4>
            <span class="inline-block text-green-500">▲2.2%</span>
        </div>
        <Line
            data={dataLine}
            options={{ responsive : true }}
        ></Line>
    </div>
</div>
