export function generateTagsWithId(tags) {
    let tagsWithId = [];

    for (let i = 0; i < tags.length; i++) {
        tagsWithId[i] = {
            text: tags[i],
            id: i,
        }
    }

    return tagsWithId;
}