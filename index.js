import { getRandomItem, displayLootItem } from './utils/helperFunctions.js';


async function renderData() {

    const root = document.getElementById('root');
    const ul = document.createElement('ul');
    const refreshButton = document.createElement('button');
    
    const api = await fetch('http://localhost:8000/loot');
    const data = await api.json();

    data.forEach(lootItem => {
        const li = displayLootItem(lootItem);
        ul.appendChild(li);
    })

    refreshButton.textContent = 'Re-Randomize!';
    refreshButton.onclick = () => { location.reload() }
    
    root.appendChild(ul);
    root.appendChild(refreshButton);
}
renderData()
