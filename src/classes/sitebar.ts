import { TextBlock, TitleBlock, Block } from './blocks';

export class Sitebar {
    private $el: HTMLElement;
    private update: (newBlock: Block) => void;

    constructor(selector: string, update: (newBlock: Block) => void) {
        this.$el = document.querySelector(selector) as HTMLElement;
        this.update = update;

        this.init();
    }

    private init(): void {
        this.$el.addEventListener('submit', this.addBlock.bind(this));
        this.$el.innerHTML = this.template;
    }

    private get template(): string {
        return [
            this.block('Текст'),
            this.block('Заголовок')
        ].join('');
    }

    private addBlock(event: Event): void {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const type = target.name;
        const value = target.value.value;
        const styles = target.styles.value;

        const Constructor = type === 'text' ? TextBlock : TitleBlock;

        const newBlock = new Constructor(value, { styles });
        this.update(newBlock);
    }

    private block(type: string): string {
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
    `;
    }
}
