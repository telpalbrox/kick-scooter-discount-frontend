import fetch from 'isomorphic-unfetch';

const SERVER_URL = "http://192.168.1.72:8080/v1";
const COMMON_HEADERS = {
    "Content-Type": "application/json"
};

export async function createBonus(bonus) {
    const response = await fetch(SERVER_URL + "/bonus", {
        method: "POST",
        body: JSON.stringify(bonus),
        headers: COMMON_HEADERS
    });
    const responseContent = await response.json();
    if (!response.ok) {
        console.log(response, responseContent);
        throw new Error(responseContent.message);
    }
    return responseContent;
}

export async function getBonus(id) {
    const response = await fetch(SERVER_URL + "/bonus/" + id);
    return response.json();
}

export async function getAllBonuses() {
    const response = await fetch(SERVER_URL + "/allBonuses");
    return response.json();
}
