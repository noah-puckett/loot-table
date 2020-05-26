import Component from '../Component.js';
import List from '../List.js';
import MonsterForm from './MonsterForm.js';
import { fetchFromApi, sendToApi } from '../../utils/apiHelpers.js'; 
import { displayMonsterItem } from '../../utils/helperFunctions.js';


class MonsterApp extends Component {
    
    render() {

        const state = {
            listItems: []
        };

        const dom = this.renderDOM();
        
        const addNewMonsterAndUpdate = (formData) => {
            sendToApi('http://localhost:8000/monsters', 'POST', formData)
                .then(monster => { 
                    state.listItems.push(monster);
                    monsterList.update({ listItems: state.listItems });
                });
        };

        fetchFromApi('http://localhost:8000/monsters')
            .then(monsters => {
                state.listItems = monsters; 
                monsterList.update({ listItems: monsters });
            });
        
        const monsterForm = new MonsterForm({ handleSubmit: addNewMonsterAndUpdate });
        dom.appendChild(monsterForm.render());
        
        const monsterList = new List({ listItems: [], displayItem: displayMonsterItem });
        dom.appendChild(monsterList.render());
        
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