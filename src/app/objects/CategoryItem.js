export default class CategoryItem {

    title;
    image;
    description;
    imageTitle;
    id;
    markdownUrl;

    constructor(title, description, image, markdownUrl) {
        this.title = title;
        this.imageTitle = title;
        this.image = image;
        this.description = description;
        this.id = title.toLowerCase().split(' ').join('-');
        this.markdownUrl = markdownUrl;
    }
}