import markdown
import os

foot = '\n    </div>\n}'

for i in range (10, 36):
    head = 'export default function UIB' + str('%02d' % (i)) +'() {\n    return <div id="content">'
    print(str('%02d' % (i)) + 'UIB.md is input', end = '    ')
    markdown.markdownFromFile(
    input = str(i) + 'UIB.md',
    output = 'stage.html',
    encoding = 'utf8',
    )
    with open('stage.html', 'r') as original: data = original.read()
    with open(str(i) + 'UIB.jsx', 'w') as modified: modified.write(head + data + foot)
    print(str(i) + 'UIB.jsx' + ' made')

os.remove('stage.html')
print('stage.html removed')