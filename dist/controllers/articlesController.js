function all() {
    templates.getPage("articles")
}

import {templates} from "templates";
import "bootstrap";

let articlesControl = {all: all};
export {articlesControl as articlesController};