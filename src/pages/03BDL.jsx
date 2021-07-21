export default function BDL03() {
    return <div id="content"><h1>Basic Digital Literacy 3</h1>
<p>Quick recap of all the commands</p>
<p>$ pwd   # print working directory
$ ls    # list
$ cd    # change directory
$ touch # create file
$ mkdir # create directory
$ rmdir # remove directory
$ rm    # remove
$ cp    # copy
$ mv    # move
$ history # show command history
$ man   # manual
$ cat   # output file</p>
<p>Useful argument often found in commands: --version</p>
<p>^C --- the caret symbol means Control here. Control and c were pressed.
M-U -- usually the M means the Alt key. Alt and c pressed here.
Super key usually means the windows key (or apple key on mac).</p>
<p>Another help command: <code>help</code> - might not be super useful.</p>
<h2>More important commands</h2>
<p>$ less some/path/here.txt
    q - exit file
    g - go to the top of a file
    G - go the bottom of a file</p>
<p>$ find [dir] -name [search_pattern]
$ find [dir] -type [d or f]
$ find [/home/dci/Documents] -type f -name *.txt
$ find [/home/dci] -type d -name Documents</p>
<p>$ grep [search_pattern] [file]
$ grep -r [search_pattern] [folder]</p>
<p>$ nano [path/to/file]</p>
    </div>
}