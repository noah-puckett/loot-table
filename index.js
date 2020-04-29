import { dummyData } from './data/dummyData.js';
import { getRandomItem } from './utils/helperFunctions.js';

const root = document.getElementById('root');
const ul = document.createElement('ul');

dummyData.forEach(monster => {

    const li = document.createElement('li');
    const randomItem = getRandomItem(monster.lootTable).treasureName;

    li.textContent = `${monster.monsterRace} has dropped 1 ${randomItem}`;
    ul.appendChild(li);
})

root.appendChild(ul);