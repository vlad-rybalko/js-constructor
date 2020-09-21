import image from './assets/image.png'
import {TitleBlock, TextColumnsBlock, TextBlock, ImageBlock} from './classes/blocks';

const text = `

`

export const model = [
    new TitleBlock(' ', {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; hight: auto;'
    }),
    new TextColumnsBlock([
         
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })
    
]