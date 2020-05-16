import { dummyData } from './data/dummyData.js';
import { getRandomItem, displayLootItem } from './utils/helperFunctions.js';

const root = document.getElementById('root');
const ul = document.createElement('ul');
const refreshButton = document.createElement('button');

dummyData.forEach(monster => {
    const randomItem = getRandomItem(monster.lootTable);
    const li = displayLootItem(monster.monsterRace, randomItem);
    ul.appendChild(li);
})


refreshButton.textContent = 'Re-Randomize!';
refreshButton.onclick = () => { location.reload() }

root.appendChild(ul);
root.appendChild(refreshButton);