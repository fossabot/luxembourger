window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#eaf7f7",
                "text": "#5c7291"
            },
            "button": {
                "background": "#56cbdb",
                "text": "#ffffff"
            }
        },
        "theme": "classic",
        "position": "bottom-right",
        "content": {
            "message": "We are not using cookies, yet we use third party plugins that might do so.",
            "dismiss": "I'm fine with it",
            "link": "See details",
            "target": "_self",
            "href": "%PUBLIC_URL%/about/cookies"
        }
    })
});