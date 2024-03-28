import { poolPromise } from './db.js';

export default async function getPeople(personid) {
    const pool = await poolPromise;
    if (pool === undefined) {return null;}
    const request = pool.request();
    var s = `SELECT * FROM person`;
    var result = await request.query(s);
    return result.recordset;
}
