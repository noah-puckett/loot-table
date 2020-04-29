export const getRandomItem = (lootTable) => {
    return lootTable[Math.floor(Math.random() * Math.floor(lootTable.length))];
}