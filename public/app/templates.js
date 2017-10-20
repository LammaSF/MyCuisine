import 'jquery';

const templates = (function () {
    function getPage(pageName, data) {
        const url = `templates/${pageName}.handlebars`;
        Handlebars.registerHelper({
            eq: function (v1, v2) {
                return v1 == v2;
            },
            ne: function (v1, v2) {
                return v1 !== v2;
            },
            lt: function (v1, v2) {
                return v1 < v2;
            },
            gt: function (v1, v2) {
                return v1 > v2;
            },
            lte: function (v1, v2) {
                return v1 <= v2;
            },
            gte: function (v1, v2) {
                return v1 >= v2;
            },
            and: function (v1, v2) {
                return v1 && v2;
            },
            or: function (v1, v2) {
                return v1 || v2;
            }
        });
        return $.get(url, function (html) {
            const hbTemplate = Handlebars.compile(html.toString());
            // Handlebars.templates.partial = Handlebars.compile($('.common-footer').html());
            Handlebars.registerPartial('common-footer',  $(".common-footer").html());

            $('#main-content').html(hbTemplate(data));
        });
    }

   function getTemplate(name) {
        const cache = this.cache;
        const _this = this;
        return new Promise((resolve, reject) => {
            if (cache[name]) {
                resolve(cache[name]);
            } else {
                $.get(`templates/${name}.handlebars`, (templateHtml) => {
                    const template = handlebars.compile(templateHtml);
                    cache[name] = template;
                    resolve(template);
                });
                _this.cache = cache;
            }
        });
    }


return {
        getPage: getPage,
    getTemplate: getTemplate
    };
}());

export {
    templates
};

