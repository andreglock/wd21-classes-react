# Basic Digital Literacy day 2

RECAP

$ ls -lah
$ pwd
$ history
$ cd

## Files and Folderss

Naming
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
    ä -> ae
    ö -> oe

## glob

- File and folder name matching with special characters
- File and folder name matching or searching using the characters * and ?
- the * is often called a wildcard (asterisk)
- commands like `ls Do*`
- `ls -R Do*` <-- List files and folders Recursively

## New commands

print out files:
$ cat filename(s) # display the contents of a file or files
the cat command = conCATente text file(s)

$ ls [-l] [file or folder name(s)s]

Change your password
$ passwd # change your passwordx

Getting help and more info on commands
$ man [somecommand] # display manual file for a command
$ [ls] --help # display help output for a command

Controlling files and folders
$ mkdir something # create new directory
$ mkdir -p something/something2 # create directory and its missing parents
$ rmdir something # remove empty directory
$ touch newfile.md # create empty file or update the timestamp of an existing file
$ rm filename # removes a file
$ rm -r foldername # removes a folder RECURSIVELY
$ cp path1 path2 # copy from one path to another
    path1 can be a file or a folder
    path2 can be a file or a folder

$ mv path1 path2 # move from one path to another
    path1 can be a file or a folder
    path2 can be a file or a folder

