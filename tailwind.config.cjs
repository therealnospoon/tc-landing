const config = {
    content : [ "./src/**/*.{html,js,svelte,ts}" ],

    theme : {
        colors : {
            current    : "#BCC4DB",
        },
        extend : {
            fontFamily : {
                sans : [ "Poppins", "sans-serif" ],
            },
            backgroundImage : {
                "tc-hexagon"   : "url(images/tc-hexagon-bg.jpg)",
            },
        },
    },

    plugins : [
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui : {
        themes : [
            {
                tradeCentre : {
                    primary    : "#6606fe",
                    secondary  : "#9c08fa",
                    accent     : "#1FB2A6",
                    neutral    : "#191D24",
                    "base-100" : "#121212",
                    info       : "#3ABFF8",
                    success    : "#36D399",
                    warning    : "#FBBD23",
                    error      : "#F87272",
                },
            },
        ],
    },
};

module.exports = config;
