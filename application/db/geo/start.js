async () => {
  db.geo.pg = new npm.pg.Pool(config.database);
}

(
  const res = await db.geo.pg.query('SELECT * from CITIES where ID = $1', [25]);
  console.log(res.rows[0]);
)