//TODO: this is very wet code, refactor to use more robust fetch call across app

export const fetchFromApi = async(URL) => {
    const rawData = await fetch(URL);
    const parsedData = await rawData.json();
    return parsedData;
};

export const sendToApi = async(URL, method, body) => {
    const rawData = await fetch(URL, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const parsedData = await rawData.json();
    return parsedData;
};