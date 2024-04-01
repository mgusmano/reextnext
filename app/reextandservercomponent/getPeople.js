import { poolPromise } from './db.js';

export default async function getPeople(personid) {
    const pool = await poolPromise;
    if (pool === undefined) {return null;}
    const request = pool.request();
    var s = `SELECT * FROM person`;
    console.log(s)
    var result = await request.query(s);
    console.log(result.recordset)
    return result.recordset;
}
