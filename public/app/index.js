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
        '/#/reviews': () => reviewsController.all(),


    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();