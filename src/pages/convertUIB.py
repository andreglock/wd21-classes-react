import os

foot = '`'

for i in range (12, 36):
    head = "const ReactMarkdown = require('react-markdown');\n const gfm = require('remark-gfm');\n\nexport default function UIB" + str(i) + "() {\nreturn <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>\n}\nconst markdown = `\n"
    print(str('%02d' % (i)) + 'UIB.md is input', end = '    ')
    # Add Head
    data = head
    # Loop char by char and add "\" before every "`"
    with open(str(i) + 'UIB.md', 'r') as original:
        for line in original:  
            for ch in line:
                if ch == '`':
                    data = data + '\\' + ch
                else:
                    data = data + ch
    with open(str(i) + 'UIB.jsx', 'w') as modified: modified.write(data + foot)
    print(str(i) + 'UIB.jsx' + ' made')