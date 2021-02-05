export const createQueryString = (queryObj: any) => {
    let queryStr: string[] = [];
    for (const key in queryObj) {
        queryStr.push(`${key}=${queryObj[key]}`);
    }

    return queryStr.join('&');
};
