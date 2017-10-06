SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        // SystemJS files\\
        "plugin-babel": "https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js",
        "systemjs-babel-build": "https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js",

        //App files\\
        "index": "../app/index.js",
        "templates": "../app/templates.js",
        "homeController": "../controllers/homeController.js",
        "locationController": "../controllers/locationController.js",
        "menuController": "../controllers/menuController.js",

        //Libraries\\
        "jquery": "https://code.jquery.com/jquery-3.2.1.min.js",

        //Routing:
        "navigo": "https://cdn.jsdelivr.net/npm/navigo@5.3.1/lib/navigo.min.js",

        //HTML:
        "handlebars": "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.js",

        //Popup messages
        // "toastr": "../node-modules/toastr/toastr.js",

        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "../../node_modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",

        paths: {
            "google-maps": "https://maps.googleapis.com/maps/api/js"
        },
        packages: {
            "https://maps.googleapis.com": {
                defaultExtension: false,
                "meta": {
                    "*": {
                        scriptLoad: true,
                        exports: 'google'
                    }
                }
            }
        },

    }
});

// SystemJS.import('index');