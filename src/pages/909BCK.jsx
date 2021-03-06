const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB909() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database Basics - 2

- Demo: how I would solve the task frim yesterdays
    - https://mariadb.com/kb/en/data-types/

- Database Diagram https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fermodelexample.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fdiagram-twitter-database-diagram-full-version-hd-quality-1.png&f=1&nofb=1

# Two new queries!

- \`DROP TABLE <tablename>;\`
- \`DROP DATABASE <databasename>;\`


# Row | Document: Shell examples

- Inserting a row in SQL: \`INSERT INTO <table name>(fields) VALUES (<values>);\` (POEM)
\`\`\`
+-----------+------------+------+-----+---------+-------+
| Field     | Type       | Null | Key | Default | Extra |
+-----------+------------+------+-----+---------+-------+
| title     | text       | NO   |     | NULL    |       |
| content   | text       | NO   |     | NULL    |       |
| source    | text       | YES  |     | NULL    |       |
| author    | text       | YES  |     | NULL    |       |
| created   | datetime   | NO   |     | NULL    |       |
| edited    | datetime   | YES  |     | NULL    |       |
| published | tinyint(1) | NO   |     | NULL    |       |
+-----------+------------+------+-----+---------+-------+
\`\`\`
\`\`\`sql
INSERT INTO 
    poems(title, content, created, published)
VALUES
    ("Potatoem", "I like trains. They are Great. But not as great as a potato.", "2021-01-01T13:37:00", 1);

INSERT INTO 
    poems(title, content, created, published)
VALUES
    ("Potatoem Two", "Haters gonna gate, potatoes gonna potate", "2008-01-01T13:37:00", 0);
\`\`\`

# Column | Field: Shell examples

- \`SELECT * FROM <table name> WHERE <criteria>;\`
- \`SELECT author,title FROM poems;\`
- \`SELECT title,created FROM poems WHERE published = 0;\`

# Update and Delete?

- \`UPDATE <table> SET <values/changes> WHERE <criteria>;\`
- \`UPDATE poems SET content = "Haters gonna hate, potatoes gonna potate" WHERE published = 0;\`

- \`DELETE FROM <table> WHERE <criteria>;\`
- \`DELETE FROM poems WHERE id=1;\`
- \`DELETE FROM poems WHERE title = "Potatoem Thre";\`
- It "works", but it sucks. We need IDs for our data!

# CRUD - Create, Read, Update, Delete

# Key | Id: Shell examples

> "An id / key uniquely identifies a record"
- Usually a number; numbers are FAST and SIMPLE
    - 1, 2, 3, 4, 5
- For better uniqueness there are other options; mainly UUID / GUID
    - GUID = Globally Unique Identifier
    - UUID = Universally Unique Identier
    - *Extremely* random strings
  - Why use them? For decentralized databases, for joining / merging databases, for copying data from DB to DB
  - But they are slow with big data :(  
    - INDEXING
    > Indexes are used to find rows with specific column values quickly. Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows. The larger the table, the more this costs.

- Adding IDs to our tables:
    \`\`\`sql
    CREATE TABLE <table_name> (
        id INT NOT NULL AUTO_INCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        <...other fields here...>
        PRIMARY KEY(id),
    );
    SELECT last_insert_id();
    \`\`\`

# Soft deletes

- Instead of actually deleting with \`DELETE FROM\`
    - Use \`UPDATE\` and one "column" that marks a record as being deleted!
    - Often "deleted" is a nullable Datetime field, allowing is to truly delete old soft deleted records
`