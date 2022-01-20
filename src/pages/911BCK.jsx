const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB911() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database Basics - 4

# SQL / NoSQL

- SQL: Strict by design             NoSQL: Flexible by design
- SQL: Strict formats               NoSQL: No formats necessary!
- SQL: Common base language         NoSQL: Nothing in common execpt.... NOT SQL! :D
- SQL: Always Relational Database   NoSQL: Document database, Graph database and more
- Both often (not always) work with a server - client model
- Both that we have used have a CLI (what is a CLI?)

# Quick DEMO: Setting up remote user for MariaDB and MongoDB

- When your app connects to your database server, quite often it is good practice to have one user per app
  - This limits the potential damage done by SQL Injection attacks
    - WTF is an SQL injection attack?
        - https://bobby-tables.com/
        - https://github.com/FbW-E01/BE-Database-Basics-Demo-Injection
  - SO let's secure our stuff!

## Basic user creation and security demo

- This is just the basics stuff
  - Don't setup a production database without reading a bit more
    - Like a good looking and up-to-date guide... and six other guides and a specialist course

- \`\$ man mysql_secure_installation\`
    - root: !PotaTomaTortilla!

    - \`CREATE USER 'user1'@localhost IDENTIFIED BY 'password1';\`
    - \`GRANT ALL PRIVILEGES ON *.* TO 'user1'@localhost IDENTIFIED BY 'password1';\`

- https://docs.mongodb.com/guides/server/auth/
- https://docs.mongodb.com/v4.0/tutorial/create-users/

    \`\`\`js
        db.createUser(
            {
                user: "mongoUser",
                pwd: "!HorsElephant!",
                roles: [ "root" ]
            }
        )
    \`\`\`
    - then, restart the mongo service (mongod)
    - you might have to edit your configuration to enable authentication

# Seeing the DB: The DB GUI

## MySQL Workbench

- Using workbench for MariaDB? It was really made for MySQL though
  - So I want to install a program and I know the name of it is "workbench" - what do I do?
    - \`\$ sudo apt search workbench\` --> No luck
    - \`\$ sudo snap search workbench\` --> Found it!!
- \`\$ sudo snap install mysql-workbench-community\`
- \`\$ sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service\`
- Result: connecting was difficult, but we managed to make it work!
    - Database dump did not work, possibly due to MySQL vs MariaDB differences!

## DBeaver 

- \`\$ sudo snap install dbeaver-ce\`

## Compass

- Using compass for mongoDB (quick overview)
  - UBUNTU:
    - Download .deb package from https://www.mongodb.com/products/compass
    - Install with \`\$ sudo dpkg --install mongodb-compass_1.28.4_amd64.deb\`

# Production?

- Especially big companies or tight security systems still self-host "on premises"
- But a lot of DB hosting happens in the cloud as well
  - There the service provider is taking care of the security and backups and such
    - GCP Databases
    - MongoAtlas
  - With the cloud there *can* be legal things to concider, depending on project and client
    - **Sometimes** nobody could have even theoretically have access outside your country
`