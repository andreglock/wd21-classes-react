export default function BDL02() {
    return <div id="content"><h1>Basic Digital Literacy day 2</h1>
<p>RECAP</p>
<p>$ ls -lah
$ pwd
$ history
$ cd</p>
<h2>Files and Folderss</h2>
<p>Naming
    Names are like
    something.zip
    Case sensitive!
    File name endings are nice to have, but not necessary
    Text files and binary files
        Binary files need a program to be openeds
        Text files contain readable text content
    Avoid strange characters such as space, ü and ä
    Use alphanumerics for file namings
        A-Z, 0-9
    Also using - _ are fine
    über.jpg
    ueber.jpg
    ä -&gt; ae
    ö -&gt; oe</p>
<h2>glob</h2>
<ul>
<li>File and folder name matching with special characters</li>
<li>File and folder name matching or searching using the characters * and ?</li>
<li>the * is often called a wildcard (asterisk)</li>
<li>commands like <code>ls Do*</code></li>
<li><code>ls -R Do*</code> &lt;-- List files and folders Recursively</li>
</ul>
<h2>New commands</h2>
<p>print out files:
$ cat filename(s) # display the contents of a file or files
the cat command = conCATente text file(s)</p>
<p>$ ls [-l] [file or folder name(s)s]</p>
<p>Change your password
$ passwd # change your passwordx</p>
<p>Getting help and more info on commands
$ man [somecommand] # display manual file for a command
$ [ls] --help # display help output for a command</p>
<p>Controlling files and folders
$ mkdir something # create new directory
$ mkdir -p something/something2 # create directory and its missing parents
$ rmdir something # remove empty directory
$ touch newfile.md # create empty file or update the timestamp of an existing file
$ rm filename # removes a file
$ rm -r foldername # removes a folder RECURSIVELY
$ cp path1 path2 # copy from one path to another
    path1 can be a file or a folder
    path2 can be a file or a folder</p>
<p>$ mv path1 path2 # move from one path to another
    path1 can be a file or a folder
    path2 can be a file or a folder</p>
    </div>
}