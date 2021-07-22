export default function BDL05() {
    return <div id="content"><h1>BDL 5 Day 4</h1>
<h2>Core internet skills and knowledge</h2>
<p>Networking = communication with a shared set of protocols.
Protocol = an agreement on how to do a very specific thing.</p>
<ul>
<li>
<p>Internet Protocol</p>
<ul>
<li>70s</li>
<li>mail, file exchange, message boards</li>
<li>Two kinds communication<ul>
<li>TCP Connected       - like a telephone - used for example in games and some chat</li>
<li>UDP Connectionless  - like the post office - far more commons</li>
</ul>
</li>
</ul>
</li>
<li>
<p>All computers on a network have an address</p>
<ul>
<li>
<p>IPv4 - IP adddresses</p>
<ul>
<li>Can sometimes change, so they are dynamic</li>
<li>You can buy static IP addresses, most servers have a static address that doesn't change</li>
<li>Can be shared among many computers too</li>
<li>192.168.1.1 &lt;-- example</li>
<li>0.0.0.0 - 255.255.255.255</li>
<li>Public (used on the internet) and Private (used in local networks) addresses</li>
<li>VPNs will hide or change your address</li>
<li>You can run multiple websites in one IP address, on the same server</li>
<li>We are slowly running out of addresses</li>
<li>~3400 million addresses</li>
<li>127.0.0.1 &lt;- your local machine</li>
</ul>
</li>
<li>
<p>IPv6 - new shiny awesome unique addresses</p>
<ul>
<li>2001:db8::8a2e:370:1123</li>
</ul>
</li>
</ul>
</li>
<li>
<p>DNS - Domain name system</p>
<ul>
<li>Each IP address can have a human readable domain name</li>
<li>google.de is a domain address</li>
<li>one website can have multiple IP addresses, but usually just one domain    </li>
<li>The point of domains is to make Addresses easy to recognize and remember</li>
<li>You can register domains for yourself</li>
<li>Domain names are a big business</li>
<li>Usually you pay per domain per year</li>
<li>Domain name servers are run by multiple organisations over the globe</li>
<li>When registering a domain, it takes a little bit of time for your new domain to be available</li>
<li>When changing a domain, it takes time to change too</li>
<li>www.google.de --&gt; 19.22.55.12</li>
<li>You can check who owns a domain, or at least get some info on it</li>
<li>
<p>https://who.is/</p>
</li>
<li>
<p>TLD Top Level Domain</p>
<ul>
<li>Examples<ul>
<li>.de</li>
<li>.fi</li>
<li>.tv -- tuvalu</li>
<li>.com --- "commerce"</li>
<li>.info</li>
<li>.org --- "organization"</li>
<li>.gov --- "government"</li>
</ul>
</li>
<li>You cannot register to every single TLD</li>
</ul>
</li>
<li>
<p>Domains are Mostly alphanumeric</p>
<ul>
<li>www.abcde1234689.com</li>
<li>It is unusual to see a domain like www.üüüüüÄÖöÄ.com</li>
</ul>
</li>
<li>
<p>Domains have Subdomains</p>
<ul>
<li>For example: www.google.de</li>
<li>"www" is a subdomain</li>
<li>website.amazon.de</li>
<li>ww2.services.internet.bank.de</li>
<li>mail.google.com</li>
</ul>
</li>
<li>
<p>Hosts file</p>
<ul>
<li>Historically, before DNS we just had a hosts file</li>
<li>120.5.1.1 jennyscomputer</li>
<li>154.1.1.1 bobs-message-board</li>
<li>In linux it#s at /etc</li>
</ul>
</li>
</ul>
</li>
<li>
<p>All data transferred is between server and client</p>
</li>
<li>
<p>URL</p>
<ul>
<li>Universal Resource Locator</li>
<li>Web address</li>
<li>example.org             # simplest possible</li>
<li>www.example.org         # subdomain</li>
<li>http://www.example.org  # protocol part -- basic one; HyperText Transfer Protocol</li>
<li>https://example.org     # protocol; http with SSL encryption; when in production, always use</li>
<li>http://example.org:80   # the port -- http -- the browser hides this one</li>
<li>https://example.org:443 # the port for https -- the browser hides this one</li>
<li>
<p>http://localhost:3000   # port 3000 is usually for NodeJS</p>
</li>
<li>
<p>http://example.org/dogs         # "dogs" here is part of the path, some kind of resource</p>
</li>
<li>http://example.org/dogs.html    # if you have an extension, it could be a file, but might not</li>
<li>http://example.org/captcha.jpg  # could be a file, or could point to some logic</li>
<li>
<p>http://example.org/dogs/search  # "dogs/search" is part of the path, again some resource    </p>
</li>
<li>
<p>http://example.org/dogs/poodle?color=white&amp;puppy=false&amp;size=small
                               [--query parameters---]</p>
</li>
<li>
<p>Query parameters are separated first with a question mark <code>?</code> and after that, with an <code>&amp;</code></p>
</li>
<li>
<p>http://example.org/dogs/poodle?color=white#bottom   # the fragment part
                                                    # could be a part of the page
                                                    # could be some strange logic..
                                                    # always the last part</p>
</li>
<li>
<p>URLs are basically always unicode, meaning that symbols need to be Encoded.</p>
</li>
<li>
<p>URL encoding looks like this: "green apple" -----encoding---&gt; "green%20apple"
                              "green%20apple" ---decoding---&gt; "green apple"</p>
</li>
<li>
<p>Ports
    80 - used for normal http web traffic
    443 - used for https web traffic
    22  - used for SSH connections</p>
</li>
</ul>
</li>
</ul>
<h2>A word on publishing</h2>
<p>You have a website. How do you publish it?</p>
<h3>FTP - File Transfer Protocol</h3>
<pre><code>The Oldschool way of publishing
Just copy the files to the server, usually with a graphical program
</code></pre>
<h3>SSH - Secure SHell</h3>
<pre><code>Copying files manually or over git
... But mostly used for connecting to a server.
To transfer files use a command like `$ scp SOURCEFILE.txt username@serveraddress:/target/path/`
</code></pre>
<h3>CI -- continuous integration systems</h3>
<pre><code>Used mostly on bigger projects and products
As soon as your feature is accepted, it will automatically be updated into the website
The most advanced system
Difficult to set up
Once up, it's by far the fastest ones
Or "Contiunuous deployment"
It might be only connected to a test or staging environment
</code></pre>
<h3>Version control</h3>
<p>You can go back and see the history of your files.
You can see Who did, What did they do, When did they do it.</p>
<p>Website is done
    --- Add a new feature
    --- Fix a bug
    --- Change the User Interface</p>
<p>History is just a part of why to use VCS - version control systems.</p>
<p>Different VCS's
    - git --- originally developed for linux kernel development
    - subversion -- still popular but kinda old
    - mercurial... </p>
<p>We will be using git.</p>
<p>Other than history, the biggest reason to use a VCS is collaboration.
You can monitor and check each others work.</p>
<p>Checking other peoples work is often called Peer Review and/or Code Review.</p>
<p>VCS help with dealing with conflicts when multiple people work on the same file at the same time.</p>
<h2>Advanced terminal usage</h2>
<h3>Running multiple commands at the same time!</h3>
<p>Method 1:
    $ command1 &amp;&amp; command2
    Command2 will run only if command1 is successful!</p>
<p>Method 2:
    $ command1; command2
    Command2 will run even if command1 fails!</p>
<h3>Streams</h3>
<p>In Linux-like systems each program has 3 streams:</p>
<pre><code>input       STDIN   standard in
output      STDOUT  standard out
error       STDERR  standard errors
</code></pre>
<p>With the pipe symbol <code>|</code> we can redirect the output stream of a program
into the input stream of some other program.</p>
<p>With the <code>&gt;</code> symbol we can redirect the output stream into a file!
Wit just one &gt; we will replace the contents of a file.
With two of them, however we can append text to the end of a file;</p>
<p>$ echo "New stuff here!" &gt;&gt; logfile.txt</p>
    </div>
}