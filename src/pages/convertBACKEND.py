# server -> DB basics -> DB advanced -> Security
import os

foot = '`'

for i in range (900, 924):
    head = "const ReactMarkdown = require('react-markdown');\n const gfm = require('remark-gfm');\n\nexport default function UIB" + str(i) + "() {\nreturn <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>\n}\nconst markdown = `\n"
    print(str('%03d' % (i)) + 'SPA.md is input', end = '    ')
    # Add Head
    data = head
    # Loop char by char and add "\" before every "`" or "$"
    with open(str(i) + 'BCK.md', 'r', encoding='utf-8') as original:
        for line in original:  
            for char in line:
                if char == '`':
                    data = data + '\\' + char # First '\' is skipped
                elif char == '$':
                    data = data + '\\' + char
                else:
                    data = data + char
    with open(str(i) + 'BCK.jsx', 'w', encoding='utf-8') as modified: modified.write(data + foot)
    print(str(i) + 'BCK.jsx' + ' made')