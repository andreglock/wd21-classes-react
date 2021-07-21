# BDL 5 Day 4

## Core internet skills and knowledge

Networking = communication with a shared set of protocols.
Protocol = an agreement on how to do a very specific thing.

Internet Protocol
    70s
    mail, file exchange, message boards
    Two kinds communication
        TCP Connected       - like a telephone - used for example in games and some chat
        UDP Connectionless  - like the post office - far more commons

All computers on a network have an address
    IPv4 - IP adddresses
        Can sometimes change, so they are dynamic
        You can buy static IP addresses, most servers have a static address that doesn't change
        Can be shared among many computers too
        192.168.1.1 <-- example
        0.0.0.0 - 255.255.255.255
        Public (used on the internet) and Private (used in local networks) addresses
        VPNs will hide or change your address
        You can run multiple websites in one IP address, on the same server
        We are slowly running out of addresses
        ~3400 million addresses
        127.0.0.1 <- your local machine

    IPv6 - new shiny awesome unique addresses
        2001:db8::8a2e:370:1123

DNS - Domain name system
    Each IP address can have a human readable domain name
    google.de is a domain address
    one website can have multiple IP addresses, but usually just one domain    
    The point of domains is to make Addresses easy to recognize and remember
    You can register domains for yourself
    Domain names are a big business
    Usually you pay per domain per year
    Domain name servers are run by multiple organisations over the globe
    When registering a domain, it takes a little bit of time for your new domain to be available
    When changing a domain, it takes time to change too
    www.google.de --> 19.22.55.12
    You can check who owns a domain, or at least get some info on it
    https://who.is/

    TLD Top Level Domain
        Examples
            .de
            .fi
            .tv -- tuvalu
            .com --- "commerce"
            .info
            .org --- "organization"
            .gov --- "government"
        You cannot register to every single TLD
    Domains are Mostly alphanumeric
        www.abcde1234689.com
        It is unusual to see a domain like www.üüüüüÄÖöÄ.com
    
    Domains have Subdomains
        For example: www.google.de
        "www" is a subdomain
        website.amazon.de
        ww2.services.internet.bank.de
        mail.google.com

    Hosts file
        Historically, before DNS we just had a hosts file
        120.5.1.1 jennyscomputer
        154.1.1.1 bobs-message-board
        In linux it#s at /etc

All data transferred is between server and client

URL
    Universal Resource Locator
    Web address
    example.org             # simplest possible
    www.example.org         # subdomain
    http://www.example.org  # protocol part -- basic one; HyperText Transfer Protocol
    https://example.org     # protocol; http with SSL encryption; when in production, always use
    http://example.org:80   # the port -- http -- the browser hides this one
    https://example.org:443 # the port for https -- the browser hides this one
    http://localhost:3000   # port 3000 is usually for NodeJS
    
    http://example.org/dogs         # "dogs" here is part of the path, some kind of resource
    http://example.org/dogs.html    # if you have an extension, it could be a file, but might not
    http://example.org/captcha.jpg  # could be a file, or could point to some logic
    http://example.org/dogs/search  # "dogs/search" is part of the path, again some resource    
    
    http://example.org/dogs/poodle?color=white&puppy=false&size=small
                                   [--query parameters---]
    Query parameters are separated first with a question mark `?` and after that, with an `&`


    http://example.org/dogs/poodle?color=white#bottom   # the fragment part
                                                        # could be a part of the page
                                                        # could be some strange logic..
                                                        # always the last part

    URLs are basically always unicode, meaning that symbols need to be Encoded.

    URL encoding looks like this: "green apple" -----encoding---> "green%20apple"
                                  "green%20apple" ---decoding---> "green apple"

    Ports
        80 - used for normal http web traffic
        443 - used for https web traffic
        22  - used for SSH connections


## A word on publishing

You have a website. How do you publish it?

### FTP - File Transfer Protocol
    The Oldschool way of publishing
    Just copy the files to the server, usually with a graphical program

### SSH - Secure SHell
    Copying files manually or over git
    ... But mostly used for connecting to a server.
    To transfer files use a command like `$ scp SOURCEFILE.txt username@serveraddress:/target/path/`

### CI -- continuous integration systems
    Used mostly on bigger projects and products
    As soon as your feature is accepted, it will automatically be updated into the website
    The most advanced system
    Difficult to set up
    Once up, it's by far the fastest ones
    Or "Contiunuous deployment"
    It might be only connected to a test or staging environment


### Version control

You can go back and see the history of your files.
You can see Who did, What did they do, When did they do it.

Website is done
    --- Add a new feature
    --- Fix a bug
    --- Change the User Interface

History is just a part of why to use VCS - version control systems.

Different VCS's
    - git --- originally developed for linux kernel development
    - subversion -- still popular but kinda old
    - mercurial... 

We will be using git.

Other than history, the biggest reason to use a VCS is collaboration.
You can monitor and check each others work.

Checking other peoples work is often called Peer Review and/or Code Review.

VCS help with dealing with conflicts when multiple people work on the same file at the same time.


## Advanced terminal usage

### Running multiple commands at the same time!

Method 1:
    $ command1 && command2
    Command2 will run only if command1 is successful!

Method 2:
    $ command1; command2
    Command2 will run even if command1 fails!

### Streams

In Linux-like systems each program has 3 streams:

    input       STDIN   standard in
    output      STDOUT  standard out
    error       STDERR  standard errors

With the pipe symbol `|` we can redirect the output stream of a program
into the input stream of some other program.

With the `>` symbol we can redirect the output stream into a file!
Wit just one > we will replace the contents of a file.
With two of them, however we can append text to the end of a file;

$ echo "New stuff here!" >> logfile.txt