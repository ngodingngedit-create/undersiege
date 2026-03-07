export async function getEvent() {
    const res = await fetch(
        "https://api.kolektix.com/api/event/jakarta-undersiege"
    );

    const json = await res.json();

    return json.data;
}