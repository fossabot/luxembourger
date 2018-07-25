export default class CategoryItem {

    title;
    icon;
    date;
    image;
    description;
    imageTitle;
    id;
    markdownUrl;

    constructor(title, icon, date, image, description, imageTitle, id, markdownUrl) {
        this.title = title;
        this.icon = icon;
        this.date = date;
        this.image = image;
        this.description = description;
        this.imageTitle = imageTitle;
        this.categoryItem = imageTitle;
        this.id = title.toLowerCase().split(' ').join('-');
        this.markdownUrl = markdownUrl;
    }
}