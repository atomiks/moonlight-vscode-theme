import fs from 'node:fs';
import { colors } from '../src/colors';

['moonlight', 'moonlight-ii'].forEach((theme) => {
  let srcString = fs.readFileSync(`./src/${theme}.json`, 'utf-8');
  Object.entries(colors).forEach(([colorVar, hexStr]) => {
    srcString = srcString.replace(new RegExp(`\\{${colorVar}}`, 'g'), hexStr);
  });

  ['normal', 'italic'].forEach((style) => {
    const builtString = srcString.replace(/{fontStyle}/g, style);
    fs.writeFileSync(
      `./themes/${theme}${style === 'italic' ? '-italic.json' : '.json'}`,
      builtString,
    );
  });
});
