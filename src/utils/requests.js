export const get = async (url) => {
    const response = await fetch(url);

    return await response.json();
};

export const post = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
};
