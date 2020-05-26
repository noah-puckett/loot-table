import Component from '../Component.js';
import List from '../List.js';
import { fetchFromApi, displayMonsterItem } from '../../utils/helperFunctions.js'; 


class MonsterApp extends Component {
    //App should eventually just render the pages themselves
    
    render() {
        const dom = this.renderDOM();

        const monsterList = new List({ listItems: [], displayItem: displayMonsterItem });
        dom.appendChild(monsterList.render());

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
export default MonsterApp;