import {templates} from 'templates';

import { homeController } from 'homeController';
import { locationController } from 'locationController';
import { menuController }  from 'menuController';
import { articlesController } from 'articlesController';
import { reviewsController } from 'reviewsController';




const router = new Navigo(null, false, '#!');

router
    .on(() => homeController.all())
    .on({
        '/#': () => homeController.all(),
        '/#/location': () => locationController.getPage(),
        '/#/menu': () => menuController.all(),
        '/#/articles': () => articlesController.all(),
        '/#/articles/:id/': (params) => articlesController.getArticleByName(params),
        '/#/reviews': () => reviewsController.all(),
        '/#/menu/:category/': (params) => menuController.getMenuCategory(params),


    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();