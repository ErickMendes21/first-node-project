import sql from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//     console.log("Tabela apagada")
// })

sql`
    create TABLE videos (
        id          UUID PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
    console.log("Tabela criada")
})