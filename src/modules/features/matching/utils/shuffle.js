const shuffle = (cache) => {
    let total = cache.length;

    while (total !== 0) {
        let current = Math.floor(Math.random() * total);
        total--;

        [cache[total], cache[current]] = [cache[current], cache[total]];
    }

    return cache;
}

export default shuffle;