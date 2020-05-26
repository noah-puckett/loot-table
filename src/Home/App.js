import Component from '../Component.js';
import LootList from './LootList.js';


class App extends Component {
    
    
    render() {
        const dom = this.renderDOM();
        const refreshButton = document.createElement('button');

        const lootist = new LootList({ loot: [] });
        dom.appendChild(lootist.render());
        
        refreshButton.textContent = 'Re-Randomize!';
        refreshButton.onclick = () => { location.reload(); };
        
        const apiCall = async() => {
            const rawData = await fetch('http://localhost:8000/loot');
            const parsedData = await rawData.json();
            lootist.update({ loot: parsedData });
        };

        apiCall();

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