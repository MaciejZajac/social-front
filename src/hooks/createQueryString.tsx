export const createQueryString = (queryObj: any) => {
    let queryStr: string[] = [];
    for (const key in queryObj) {
        if (queryObj[key]) queryStr.push(`${key}=${queryObj[key]}`);
    }

    return queryStr.join('&');
};
