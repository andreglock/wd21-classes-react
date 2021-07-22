import os

foot = '`'

for i in range (36, 59):
    head = "const ReactMarkdown = require('react-markdown');\n const gfm = require('remark-gfm');\n\nexport default function UIB" + str(i) + "() {\nreturn <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>\n}\nconst markdown = `\n"
    print(str('%02d' % (i)) + 'PB.md is input', end = '    ')
    # Add Head
    data = head
    # Loop char by char and add "\" before every "`"
    with open(str(i) + 'PB.md', 'r') as original:
        for line in original:  
            for ch in line:
                if ch == '`':
                    data = data + '\\' + ch
                else:
                    data = data + ch
    with open(str(i) + 'PB.jsx', 'w') as modified: modified.write(data + foot)
    print(str(i) + 'PB.jsx' + ' made')