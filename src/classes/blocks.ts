import { col, row } from '../utils';

export class Block {
    protected value: string;
    protected options: { [key: string]: string };

    constructor(value: string, options: { [key: string]: string }) {
        // console.log('value sdfsd', value)
        this.value = value;
        this.options = options;
    }

    toHTML(): string {
        throw new Error('Метод toHTML должен быть реализован!');
    }
}

export class TitleBlock extends Block {
    constructor(value: string, options: { [key: string]: string }) {
        super(value, options);
    }

    toHTML(): string {
        const { tag = 'h2', styles } = this.options;

        return row(col(`<${tag}>${this.value}</${tag}>`), styles);
    }
}

export class ImageBlock extends Block {
    constructor(value: string, options: { [key: string]: string }) {
        super(value, options);
    }

    toHTML(): string {
        const { alt, styles, imageStyles } = this.options;
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`;
        return row(html, styles);
    }
}

export class TextBlock extends Block {
    constructor(value: string, options: { [key: string]: string }) {
        super(value, options);
    }

    toHTML(): string {
        return row(col(`<p>${this.value}</p>`), this.options.styles);
    }
}

export class TextColumnsBlock extends Block {
    constructor(value: string[], options: { [key: string]: string }) {
        super(value.join(''), options);
    }

    toHTML(): string {
        const html = this.value;
        return row(html, this.options.styles);
    }
}
