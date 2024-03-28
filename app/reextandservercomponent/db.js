import sql from 'mssql';

export const poolPromise = new sql.ConnectionPool({server: 'skilltrak.database.windows.net', database: 'skilltrakdb', user: 'skilltrak', password: 'ReExt2024!'})
  .connect()
  .then(pool => {return pool})
  .catch(err => console.log('Database Connection Failed: ', err.toString()))