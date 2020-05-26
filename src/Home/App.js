import Component from '../Component.js';
import List from './List.js';
import { fetchFromApi, displayLootItem, displayMonsterItem } from '../../utils/helperFunctions.js'; 


class App extends Component {
    
    
    render() {
        const dom = this.renderDOM();
        const refreshButton = document.createElement('button');

        const lootList = new List({ listItems: [], displayItem: displayLootItem });
        dom.appendChild(lootList.render());

        const monsterList = new List({ listItems: [], displayItem: displayMonsterItem });
        dom.appendChild(monsterList.render());
        
        refreshButton.textContent = 'Re-Randomize!';
        refreshButton.onclick = () => { location.reload(); };

        fetchFromApi('http://localhost:8000/loot')
            .then(loot => lootList.update({ listItems: loot }));

        fetchFromApi('http://localhost:8000/monsters')
            .then(monsters => monsterList.update({ listItems: monsters }));

        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>

            </div>
        `;
    }
}
export default App;