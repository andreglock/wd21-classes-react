import os

foot = '`'

for i in range (59, 82):
    head = "const ReactMarkdown = require('react-markdown');\n const gfm = require('remark-gfm');\n\nexport default function UIB" + str(i) + "() {\nreturn <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>\n}\nconst markdown = `\n"
    print(str('%02d' % (i)) + 'SPA.md is input', end = '    ')
    # Add Head
    data = head
    # Loop char by char and add "\" before every "`" or "$"
    with open(str(i) + 'SPA.md', 'r') as original:
        for line in original:  
            for ch in line:
                if ch == '`':
                    data = data + '\\' + ch
                elif ch == '$':
                    data = data + '\\' + ch
                else:
                    data = data + ch
    with open(str(i) + 'SPA.jsx', 'w') as modified: modified.write(data + foot)
    print(str(i) + 'SPA.jsx' + ' made')