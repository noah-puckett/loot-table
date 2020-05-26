import Component from '../Component.js';
import MonsterApp from '../MonsterPage/MonsterApp.js';
import LootApp from '../LootPage/LootApp.js';


class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        //render the main page for loot
        const lootPage = new LootApp();
        dom.appendChild(lootPage.render());

        //render the main page for monsters
        const monsterPage = new MonsterApp();
        dom.appendChild(monsterPage.render());
        
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