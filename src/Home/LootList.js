import Component from '../Component.js';
import { displayLootItem } from '../../utils/helperFunctions.js';

class LootList extends Component {

    render() {
        const list = this.renderDOM();
        this.props.loot.forEach(lootItem=> {
            list.appendChild(displayLootItem(lootItem));
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul>

            </ul>
        `;
    }
}
export default LootList;