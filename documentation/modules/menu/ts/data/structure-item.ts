export const structureItems = data => {
    return data.map((item) => {
        if (Array.isArray(item)) {
            const [id, children] = item;
            return ({id, children})
        }
        return {id: item};

    });
}

