import { TextBlock, TitleBlock } from './blocks';

export class Sitebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    get template() {
        return [
            block('Текст'),
            block('Заголовок')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()
    
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value 

        const Constructor = type === 'text' ? TextBlock : TitleBlock

        const newBlock = new Constructor(value, {styles})
        this.update(newBlock)
    }
}

function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" style="margin: 0 auto" name="value" placeholder="Значение">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="css">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `
}