SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        // SystemJS files\\
        "plugin-babel": "https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js",
        "systemjs-babel-build": "https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js",

        //App files\\
        "index": "../app/index.js",
        "templates": "../app/templates.js",
        "homeController": "../../controllers/homeController.js",
        // "categoriesController": "../controllers/categoriesController.js",
        // "singlePostController ": "../controllers/singlePostController.js",

        //Libraries\\
        "jquery": "https://code.jquery.com/jquery-3.2.1.js",

        //Routing:
        "navigo": "../../node_modules/navigo/lib/navigo.min.js",

        //HTML:
        "handlebars": "../../node_modules/handlebars/dist/handlebars.js",

        //Popup messages
        // "toastr": "../node-modules/toastr/toastr.js",

        //UI stuffs (autocomplete, calendar etc.)
        "jqueryUi": "../../node_modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",

    }
});

// SystemJS.import('index');