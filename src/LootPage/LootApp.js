import Component from '../Component.js';
import List from '../List.js';
import { fetchFromApi, displayLootItem } from '../../utils/helperFunctions.js'; 


class LootApp extends Component {

    render() {
        const dom = this.renderDOM();

        const lootList = new List({ listItems: [], displayItem: displayLootItem });
        dom.appendChild(lootList.render());

        fetchFromApi('http://localhost:8000/loot')
            .then(loot => lootList.update({ listItems: loot }));

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
            </div>
        `;
    }
}
export default LootApp;