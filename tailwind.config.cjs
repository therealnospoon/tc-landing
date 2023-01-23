const config = {
    content : [ "./src/**/*.{html,js,svelte,ts}" ],

    theme : {
        extend : {
            fontFamily : {
                sans : [ "Poppins", "sans-serif" ],
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
                mytheme : {
                    primary    : "#0094FF",
                    secondary  : "#D926A9",
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
