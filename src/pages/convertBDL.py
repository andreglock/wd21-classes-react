import markdown
import os

foot = '\n    </div>\n}'

for i in range (2, 10):
    head = 'export default function BDL' + str('%02d' % (i)) +'() {\n    return <div id="content">'
    print(str('%02d' % (i)) + 'BDL.md is input', end = '    ')
    markdown.markdownFromFile(
    input = '0' + str(i) + 'BDL.md',
    output = 'stage.html',
    encoding = 'utf8',
    )
    with open('stage.html', 'r') as original: data = original.read()
    with open('0' + str(i) + 'BDL.jsx', 'w') as modified: modified.write(head + data + foot)
    print('0' + str(i) + 'BDL.jsx' + ' made')

os.remove('stage.html')
print('stage.html removed')