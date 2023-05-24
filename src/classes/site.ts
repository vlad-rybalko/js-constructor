import { Block } from './blocks';

export class Site {
    private $el: HTMLElement;

    constructor(selector: string) {
        this.$el = document.querySelector(selector) as HTMLElement;
    }

    render(model: Block[]): void {
        this.$el.innerHTML = '';
        model.forEach((block: Block) => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        });
    }
}
