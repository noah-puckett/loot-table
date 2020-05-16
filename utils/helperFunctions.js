export const getRandomItem = (lootTable) => {
    return lootTable[Math.floor(Math.random() * Math.floor(lootTable.length))];
}

export const displayLootItem = (monsterType, lootItem) => {
    const parentEl = document.createElement('li');
    parentEl.className = 'monster-card';

    const monsterTitle = document.createElement('h1');
    monsterTitle.textContent = monsterType;
    parentEl.appendChild(monsterTitle);

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = `Item Name: ${lootItem.treasureName}`;
    parentEl.appendChild(itemTitle);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = `Description: ${lootItem.treasureDesc}`;
    parentEl.appendChild(itemDesc);

    const itemVal = document.createElement('p');
    itemVal.textContent = `Value: ${lootItem.treasureVal}`;
    parentEl.appendChild(itemVal);

    return parentEl;
}