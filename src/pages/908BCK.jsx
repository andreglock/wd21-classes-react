const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB908() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database - Basics


- StackOverflow Developer Survey 2021 https://insights.stackoverflow.com/survey/2021
- In these four days we will cover the basic concepts of databases
- We will not do any programming, we will just learn to use programs for now

# Introduction

- What is a database?
  - Primarily databases provide **Persistent data storage**
  - Like a bucket to save your data in

- Table based (csv) vs. Document based (json)
  - Table based ones have a more strict structure to them, and the stuff we put in our bucket needs to conform
    - Kinda like Google Sheets
    - Table based === SQL basically
  - Document based ones are more flexible; you shove documents in and they _can_ vary from each other (generally)
    - Kinda like just JSON files
    - Document based === NoSQL basically

    \`\`\`
    .csv
    NAME,EMAIL,LOCATION
    Joel Peltone,joel.peltonen@gmail.com,Leipzig
    Mr Mystery,,Mysteriousland
    Ms Mystery,missterious@example.org,Mysteryland

    .json
    [
        { "name": "Joel Peltonen", "email": "joel.peltonen@gmail.com", "location":"Leipzig" },
        { "email": "what@where.com", "name": "Mr Mystery" },
    ]
    \`\`\`

# WTF is SQL

- Structured Query Language === A specific language for *describing* and *handling* data
  - Not really a programming language, but almost :)
- PostgreSQL, Microsoft SQL Server, MySQL/MariaDB
- Basically SQL is a standard and different SQL Databases (more or less) support that standard
    - Different server use like different dialects of SQL
        - For example, Microsoft SQL Server "speaks" T-SQL (Transact-SQL)
    - Different SQL databases also provide their own special secret spices on top of the standard
- Data is _very_ structured and usually diferent bits of data relate to other bits
- Generally these are "Relational" databases
- In the past, this was overwhelmingly the most common type of database

## WTF is NoSQL

- Umbrella term for everything that is not SQL
- MongoDB, Redis, Elasticsearch...
- Document databases is kinda the "main" one, but Key-value databases, and other different types too
  - We will focus on the "Document" one
- Each NoSQL database is generally different
- There is no central standard language
- Data *can* be unstructured
- Data *can* be not "relational"
- Generally very flexible

- SQL vs. NoSQL (Quick comparison)
  - SQL = Mandatory structure         ↔️ NoSQL = No mandatory structure
  - SQL = Standard Language           ↔️ NoSQL = No central standard anything
  - SQL = Data can be slower to write ↔️ NoSQL = Data can be slower to read
  - SQL = Data usually relational     ↔️ NoSQL = Data often just loosely related to other data

- Draw Draw.io image with Two "DB" buckets
  - SQL: structured tables
  - NoSQL: collection of documents

- For SQL we will cover either MariaDB or PostgreSQL (Let's look AFTER we have installed stuff...)
  - MariaDB is basically MySQL 2.0, but both are still developed... 
- For NoSQL we will cover MongoDB

> https://www.mongodb.com/nosql-explained/when-to-use-nosql

# DB Install: setup the environment

- Databases run in the background
  - \`\$ sudo service --status-all\`
  - \`\$ systemctl --type=service\`

  - Let's install mariadb!
  - \`\$ sudo apt search mariadb\`
  - \`\$ sudo apt install mariadb-client\`
  - \`\$ sudo apt install mariadb-server\`
  - If you ever do production stuff, research FIRST and check out \`\$ sudo mysql_secure_installation\`

# Shell

- The MongoDB shell: accessing mongodb through the terminal: \`mongo\`
  - "mongo" is the client, "mongod" is the server/service running in the background

- The MariaDB shell: accessing mariadb through the terminal: \`mariadb\`
  - "mariadb" is the client, "mysql" or "mariadb-server" is the server/service running in the background

# FUNDAMENTAL CONCEPTS / TOPICS

## Database
> "A place to keep tables"
- Example: Google sheets -> File
- Basically: one database per app

## Table
> "A place to keep records"
- Example: Google sheets -> Worksheet

## Row/Record
> "A single record in a collection/table"
- Example: Google sheets -> Row

## Column
> "A field or a value in a record"
- Example: Google sheets -> Column

# Databases separate data into different segments

- Databases SQL
  - Three main Queries here:
    - \`SHOW DATABASES;\`
    - \`CREATE DATABASE <db name>;\`
    - \`USE <db name>;\`

# Table | Collection: Shell examples

- Something something data types
  - https://www.techonthenet.com/mariadb/datatypes.php
  - http://mariadb.com/kb/en/create-table/
- Tables in SQL 
  - \`SHOW TABLES;\`
  - \`CREATE TABLE <table name> (<column definitions>);\`
  - \`DESC <table name>;\`

# That's it for today!

\`\`\`sql
  -- Database creation query
  CREATE DATABASE stuff;

  -- Database Selection query
  USE stuff;

  -- Table creation query with three fields for data
  CREATE TABLE users(
    name varchar(255) not null,
    email varchar(255) not null,
    location varchar(255) not null
  );

  -- This describes our created table
  DESC users;
\`\`\``