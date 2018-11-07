// @flow

import React from "react";
import CategoryItem from "../data/CategoryItem";
import {categoryStore} from "../store/CategoryStore";
import Category from "../data/Category";
import EmptyProps from "./TypeHelper";

class MetaHelper {

    updateMeta(text: string) {
        document.title = text + ", Becoming.lu";

        let category = categoryStore.category;
        let categoryItem = categoryStore.categoryItem;

        let metas: [] = document.getElementsByTagName("META");

        for (const meta of metas) {
            try {
                const metaName = meta.attributes.getNamedItem("property").nodeValue;

                if(metaName === "og:title") {
                    meta.setAttribute("content", text + ", promoted by Becoming.lu");
                }

                if(categoryItem) {
                    if(metaName === "og:image") {
                        meta.setAttribute("content", "https://becoming.lu" + categoryItem.image);
                    }

                    if(metaName === "og:url") {
                        meta.setAttribute("content", "https://becoming.lu/" + category.id + "/" + categoryItem.id);
                    }
                } else if(category) {
                    if(metaName === "og:image") {
                        meta.setAttribute("content", "https://becoming.lu/images/becoming.png");
                    }

                    if(metaName === "og:url") {
                        meta.setAttribute("content", "https://becoming.lu/" + category.id);
                    }
                }
            } catch (e) {
                // ignore
            }

        }
    }
}

export const metaHelper = new MetaHelper();