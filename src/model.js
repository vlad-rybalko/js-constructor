import image from './assets/image.png'
import {TitleBlock, TextColumnsBlock, TextBlock, ImageBlock} from './classes/blocks';
import { css } from './utils';


const text = `

`

export const model = [
    new TitleBlock(' Конструктор сайов на JS ', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; hight: auto;'
    }),
    new TextColumnsBlock([
        'Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов.',
        'Равным образом, сложившаяся структура организации однозначно фиксирует необходимость как самодостаточных, так и внешне зависимых концептуальных решений.',
        'Как уже неоднократно упомянуто, представители современных социальных резервов формируют глобальную экономическую сеть и при этом - призваны к ответу.'
    ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold; text-align: center'
    }),
    
]