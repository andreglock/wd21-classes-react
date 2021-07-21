export default function BDL01() {
    return <div id="content">
        <h1>Basic digital literacy 11.01.2020</h1>
    <p>Windows and Linux terminals are very different.
    Mac and Linux terminals are very similar.</p>
    <h2>Terminal</h2>
    <p>The terminal is sometimes called 
    - console
    - shell
    - command prompt (might refer to the windows one)
    - cli = command line interface</p>
    <h2>Filesystem structure</h2>
    <p>(root)/
        home/ - user folders
        etc/  - configuration files
        var/  - logs
        tmp/  - temporary files
        ...</p>
    <h2>Special folder names</h2>
    <h3>Absolute paths</h3>
    <p>"/"  -- root directory
    "/home/dci/Downloads"</p>
    <h3>Alias or variable path</h3>
    <p>"~" -- home directory</p>
    <h3>Special shortcut</h3>
    <p>"-" -- previous directoy</p>
    <h3>Relative paths</h3>
    <p>".." -- up one level in the directory tree or structure
    "."  -- current directory</p>
    <h2>Basic commands</h2>
    <pre><code>$ pwd # print working directory
    $ ls  # list
    $ cd  # change directory
    $ cd .. # change directory up the directory tree
    $ cd Downloads # change directory to "Downloads"
    </code></pre>
    <p>Note! Use the tab key when you can!</p>
    <pre><code>$ ls -l
    $ ls -a
    $ ls -h
    $ ls -lah
    </code></pre>
    <p>$ history up arrow, down arrow</p>
    </div>
}