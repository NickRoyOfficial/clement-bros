import { readFile, writeFile, mkdir } from 'node:fs/promises';
const source=await readFile('dist/index.html','utf8');
const pages={'services':'Landscape, Hardscape & Maintenance','history-1':'Our Story Since 1977','staff':'Our People','ownership':'Our People','portfolio':'Landscape & Stonework Portfolio','contact':'Contact & Property Inquiry','careers':'Careers','files':'Company Archive'};
for(const [path,title] of Object.entries(pages)){await mkdir(`dist/${path}`,{recursive:true});await writeFile(`dist/${path}/index.html`,source.replace('<title>Clement Bros. Lawn & Landscape</title>',`<title>${title} | Clement Bros.</title>`));}
console.log('Generated '+Object.keys(pages).length+' direct-entry page routes.');
