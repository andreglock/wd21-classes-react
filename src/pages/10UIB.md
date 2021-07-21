# UIB - Boilerplate
- Boilerplate?
	- Repeated code that doesn't really do much, but is necessary
- The user of a website is Usually human, but not always
	- Web Crawlers / Bots
	- For example, the Google Robot needs to understand your site
	- Screen scrapers user your website too, maybe
- Human users for websites vary a lot!
	- Different levels of sightedness (completely blind, partially or...)
	- Colour blindness
	- Different size screens
	- Cultural differences matter too
	- Connections speeds

## HTML
- Based on SGML
- Really exploded after HTML 4
- There used to be HTML 4 variants, such as
	- Frameset
	- Transitional
	- Strict
- There used to be XHTML
	- XML-compatible HTML
	- Normal HTML is NOT XML compatible
	- XHTML is pretty much dead
- Now we have HTML 5.2 (5.3 is coming!)
- HTML is continuously developed
	- New elements are being added
- HTML Elements
	- Start tag, End tag, Content, Attributes
	- Paragraph: <p title="Hi!">Bananas are great!</p>
	- Image: <img src=".." alt>
	- Empty elements, like img have no ending tag and no content
	- Some elements can be self-closing as well, meaning that ending tag is integrated into the starting
		- <p />   this is a self-closing element/tag
		- Especially for line breaks this is common: <br /> 
		- Self closing tags work, but might not be the "correct" way
		- Self closing tags are common especially because of React
		- In React closing tags are _mandatory_ and we are actually not writing HTML (its JSX)

## How the internet works (again!)
- HTML documents are rendered by a web browser
- The browser downloads the HTML file and processes it as it is downloaded
- Browsers are super smart, erven if the HTML is a BIT broken, it might still work
- HTML is "evaluated" or "interpreted" by the browser

## Working with code - VSCode
- We will be using Visual Studio Code
- VSCode is an IDE - Integrated Development Environment
- Alternatives include Atom and Sublime
- HTML files are edited often by hand, even though visual editors exist
- Setting up VSCode
	- You have extensions (plugins)
		- Live Server
		- Prettier
		- So, so many others
	- You have user settings
		- Color theme etc.
	- You have workspace settings
		- Workspace is basically just a folder
		- Here you can define per-project color themes for example
		- Lets set the workspace color!
		- The workspace directory (.vscode) is almost always ignored in git (.gitignore)
	- You have keyboard shortcuts
		- Ctrl + b -- Toggle (show or hide) the side bar
		- Ctrl + f -- Find stuff within a file
		- Ctrl + Shift + f -- Find in files
		- Ctrl + p -- Find files by name inside the current workspace
		- Ctrl + Shift + p -- *The Command Palette*
		- Ctrl + Shift + ` -- Toggle VSCode integrated terminal
		- Ctrl + + -- Zoom in
		- Ctrl + - -- Zoom out
		- When working with code: Ctrl + Shift + 7
	- Recommendation: Go through the settings of vscode at your own time sometimes!
		- Repeat this every now and then
		- Find out what works for you
	- Introducing Emmet!
		- Built into vscode
		- Started life as a plugin (I think...)
		- Makes writing code (or markup like HTML) easier and faster
		- Use `p*5` to create 5 Paragraph elements quickly
		- Cheat sheet: https://docs.emmet.io/cheat-sheet/
		- For example, Create an empty html file and use the `!` emmet abbreviation
			- This creates the common HTML 5 boilerplate

## Examining the HTML 5 Boilerplate!

## Working with HTML
- files can be named anything, but they usually have the ".html" ending
	- "joel-file.html"
- index.html is a special name
	- When an HTML file is called "index.html" the web server understands that it is the default html file to load from that folder
	- "index.html" might not be displayed in the URL (for convenience)
- You might run into historical files that end in .htm OR .htmlx or .xhtml
- How to actually see a website you have done?
	- Locally opening the file on a browser
	- Locally running a web server
		- From within VSCode
			- use the "live reload" extension
		- From the command line
			- Install the "live-server" program with NPM:
				- npm install --global live-server
- "Lorem ipsum" placeholder text
- Placeholder images, services such as placekitten work well
- Clean code is super important
	- Well indented
	- Much easier to understand
	- Much easier to maintain
	- It really helps with finding errors too
	- Helps with consistency and
	- Helps with working with others as well

## CSS - Cascading Style Sheets
- Version 3 is the current one and CSS is being actively developed
- CSS describes how HTML elements are to be displayed
- Three different ways of defining CSS
	- External styles
		- A separate file for CSS, such as "main.css"
		- Loaded into your webpage via the `<link>` element
		- The most common way in 2021
	- Internal styles
		- Defined directly inside HTML files
		- Inside `<style>`
	- Inline styles
		- Written directly on the HTML element
- `p { color: crimson; }`
- The "p" is a selector, it selects which elements are targeted by the rule
- The `{ color: crimson; }` is the declaration block - it contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.



