export const getRandomItem = (lootTable) => {
    return lootTable[Math.floor(Math.random() * Math.floor(lootTable.length))];
}

export const displayLootItem = (lootItem) => {
    const parentEl = document.createElement('li');
    parentEl.className = 'loot-card';

    const itemName = document.createElement('h1');
    itemName.textContent = `Item Name: ${lootItem.name}`;
    parentEl.appendChild(itemName);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = `Description: ${lootItem.description}`;
    parentEl.appendChild(itemDesc);

    const itemVal = document.createElement('p');
    itemVal.textContent = `Value: ${lootItem.value}`;
    parentEl.appendChild(itemVal);

    return parentEl;
}