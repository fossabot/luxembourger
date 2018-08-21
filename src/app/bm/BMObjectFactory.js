import BMYoutube from "./BMYoutube";
import BMComponent from "./BMComponent";
import BMImage from "./BMImage";
import BMCard from "./BMCard";

export class BMObjectFactory {

    static components: {k: string, v: Class} = {
        "youtube": BMYoutube,
        "image": BMImage,
        "text": BMComponent,
        "card": BMCard,
    };

    static of(textDescription: string): BMComponent {
        let newLinePos = textDescription.indexOf("\n");
        let type = textDescription.substr(0, newLinePos);

        let component = BMObjectFactory.components[type];

        if(component) {
            return new component(textDescription);
        }

        return new BMComponent(textDescription);
    }
}