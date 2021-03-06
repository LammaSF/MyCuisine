SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        // SystemJS files\\
        "plugin-babel": "https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js",
        "systemjs-babel-build": "https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js",

        //App files\\
        "index": "../app/index.js",
        //Routing:
        "navigo": "https://cdn.jsdelivr.net/npm/navigo@5.3.1/lib/navigo.min.js",
        "firebase-config": "../firebase.conf.js",
        "templates": "../app/templates.js",
        "homeController": "../controllers/homeController.js",
        "locationController": "../controllers/locationController.js",
        "menuController": "../controllers/menuController.js",
        "reviewsController": "../controllers/reviewsController.js",
        "articlesController": "../controllers/articlesController.js",

        //Libraries\\
        "jquery": "https://code.jquery.com/jquery-3.2.1.min.js",
        "gulp": "https://cdnjs.cloudflare.com/ajax/libs/gulp/3.8.5/gulp.js",
        "gulp-load-plugins": "https://cdn.jsdelivr.net/npm/@bretkikehara/gulp-load-plugins@1.5.0-alpha/index.js",
        "minify": "https://cdn.jsdelivr.net/npm/gulp-minify@1.0.0/index.min.js",
        "plumber":"https://cdn.jsdelivr.net/npm/gulp-plumber@1.1.0/index.min.js",
        "gulp-imagemin": "../../node_modules/gulp-imagemin/index.js",

        //HTML:
        "handlebars": "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.js",

        //Popup messages
        // "toastr": "../node-modules/toastr/toastr.js",

        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "https://code.jquery.com/ui/1.12.1/jquery-ui.js",
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        "bootstrap-theme": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css",

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