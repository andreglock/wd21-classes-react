# SPA - Deploy

So you have built an AMAZING todo application and you want to share it with the World.

This means you have to deploy it to production 🤩

Let's look at a few different options for deploying / hosting

# 1. "The cheap old way" or "webhotel"

The cheap old way works like this

1. You buy some server space and power
    - Back in 2005 cheap hosting for simple websites  (Wordpress blogs) was from ~4e / month
    - This means you are basically buying space and computing power from a server
    - A server could be any old PC running Linux basically
    - This server machine will be shared by you and other websites too
    - If some other website crashes the server, your site goes down too 🥲

2. You take your files and you copy them to the server
    - Most likely you can just drop the files in using `ftp` or `sftp`
    - They will go to the correct folder on the server
    - If you need to edit them, you edit them on your computer and just drop new versions in

3. If you need to, you might be able to configure something
    - At least you will want a domain so that instead of `8.23.112.32` your visitors use `example.org`
    - For "SPA" type apps, you don't need to do anything else
    - And you need to set up SSL / HTTPS

- *Alternatively you can buy your own physical server and set up literally everything yourself. Dont.*

- Pros:
    - Simple
    - Fairly cheap
    - Someone else takes care of the hardware
- Cons:
    - Shared servers, shared crashes
    - You have very little or no control over the machine
        - (usually you have to pay extra to be able to log in at all)
    - Not flexible in any way (The /. effect - https://en.wikipedia.org/wiki/Slashdot_effect)

# 2. "The expensive but cool way" "Cloud"

This is the cloud.
The expensive but cool way works like this

1. You buy a virtual server
    - This is like our virtual Android phone yesterday
    - Someone owns a massive server
    - They rent parts of the server as individual virtual servers or "boxes"
    - What you get works just like a regular linux computer

2. You configure the server
    - You could have some stuff installed and some configurations ready...
    - ...like linux is installed and maybe a generic web server software...
    - ...but you will have to do a lot yourself too!
    - You might have to install for example node yourself

3. You copy your files to the server
    - You can copy them over like in the old days with `ftp` or `sftp`
    - You can copy them over like in the newer days with `scp` or `rsync`
    - You can install git and `git clone` your repo
    - You can set up some kind of automated deployment system that does this for you (lots of work!)
        - GitHub Actions
        - Jenkins

4. You configure your server
    - At least you will want a domain so that instead of `8.23.112.32` your visitors use `example.org`
    - And you need to set up SSL / HTTPS

- Pros:
    - Technology independent!!!
    - You have full control over the machine
    - Someone else takes care of the hardware
    - Simple to set up initially....
- Cons:
    - ...but you need to know Linux administration...
    - ...meaning it can be very complex to configure...
    - ...also meaning that you have to administer and secure it yourself 😬
    - Can be expensive!
    - Setting up a flexible server is really hard (Reddit Hug Of Death; again https://en.wikipedia.org/wiki/Slashdot_effect )

Example: Google Cloud Platform can do this for example - let's try to setup an example (no guarantees this works!)

# 3. "The cool specialized hosting way"

The cool specialized hosting way works like this

> Super modern and very cool.
> I have also never used it myself in my own projects.
> - Joel

1. You register with a hosting provider 
2. You connect your code to their service
    - Most likely you just tell the service where is your git repo
    - (Or maybe you can even manually copy files over, but why would you?)
3. You tell the service how to build your application (if any)
    - "Hey service, when you need to build, run `npm run build`"
    - "After that is done, the built website will be in the `dist/` folder"
4. You configure DNS so that your new project has a pretty pretty domain

Pros:
    - Technology independent.... kind of
        - Node app? Sure, if the hosting provider has support for Node
        - Ruby app? Sure, if the hosting provider has support for Ruby
        - Deno app? Sure, if the hosting provider has support for Deno
        - Heavy and hard to configure Java app? .... maybe not
        - SomeFutureTechnology app? Sure, if the hosting provider has support for SomeFutureTechnology
    - Automatic AF
    - Generally (depending on service) can be set up to scale *amazingly* well
    - Can be cheap! Often free tiers!
Cons:
    - Can be expensive!
    - You have no control over the machine
        - You have no fine control over the build and the environment
        - You have no control over the runtime
        - It's their magical black box somewhere.

# Example/Demo

- Often in the real world you might have multiple servers and multiple approaches
    - Your frontend lives on a specialized SPA hosting service
    - Your backend lives on a virtual machine
    - Your database lives in a specialized database hosting service

## Example: Netlify -- Let's set up an SPA hosting thingy!

https://github.com/Req/uib-layouts-mail

- Setup Netlify for that app
