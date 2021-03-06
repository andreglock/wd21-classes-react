const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB907() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# BE - Server - 8

# Getting our Server Online

- Deploying to production
- So now you have a backend
- How do you host the backend?
- What do you need to think about when hosting?
    - Documentation; **how I do/did it**
        - 1. Your projects should have a README.md file
        - How to contact customer; who are the key persons?
        - What is the project, what should a dev know about it?
        - How is the first deployment done?
        - How do you update the production?
        - Is there / where is the config?
        - Who controls the server / where is the server / (who pays and how)?
        - Deployment details (Does it need to scale, any specific requirements)?
        - Who has access to production? Where are the credentials? In KeePass?
    - Does it need monitoring?
        - What if it goes down?
            - Contract stuff? SLA?
    - Configuration

- You don't need to be a sysadmin
- Many developers define or do some part of the deployment process
    - Devs that do these kinds of things are referred to as DevOps
    - Development + Operations
    - Depending on the tech stack operations might be VERY tied to development

        - Tech stack (of a company or product)?
            - Technologies used

# Configuration / Environment Variables

- Usually you need to have some slightly different configuration for development and production
    - In production you might use different API keys for example
        - Development: API Key allows only access from "localhost", data used payed by our company
        - Production: API Key allows access from "www.client-product.de", data used payed by our client
    - Or let's say you are building an eCommerce site to buy art
        - Development: You send your product orders to a fake testing payment API URL
        - Production: You send your product orders to the real payment API URL

- Environment variables is _very_ popular for this purpose
    - Generally you have a bunch of environment variables in your system (windows too)
    - \`\$ env\`
        - These values are acessible to your node programs
        - You can use these directly in your program for secrets (like your API KEYS)
        - You can have a file to control them
            - https://www.npmjs.com/package/dotenv
    - These values are generally referred to as config; the configuration of your program
    - DO NOT COMMIT SECRETS UNLESS YOU ARE 100% SURE OF IT
    - In our case we only had the \`.env\` file manually configured per environment and a \`.env.example\` in git
        - However, conventions vary company to company

# Deployment + configuration

- **Decide yourself do you want to deploy along with me :)**
- Heroku
    - registration, installation of Heroku CLI
    - example app deployment
- Using our environment variables (configuration / secrets) in Heroku
`