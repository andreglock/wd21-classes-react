# Basic Digital Literacy 3

Quick recap of all the commands

$ pwd   # print working directory
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
$ cat   # output file


Useful argument often found in commands: --version

^C --- the caret symbol means Control here. Control and c were pressed.
M-U -- usually the M means the Alt key. Alt and c pressed here.
Super key usually means the windows key (or apple key on mac).

Another help command: `help` - might not be super useful.

## More important commands

$ less some/path/here.txt
    q - exit file
    g - go to the top of a file
    G - go the bottom of a file

$ find [dir] -name [search_pattern]
$ find [dir] -type [d or f]
$ find [/home/dci/Documents] -type f -name *.txt
$ find [/home/dci] -type d -name Documents

$ grep [search_pattern] [file]
$ grep -r [search_pattern] [folder]

$ nano [path/to/file]

