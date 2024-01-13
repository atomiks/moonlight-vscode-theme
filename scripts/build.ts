import fs from 'node:fs';
import { colors } from '../src/colors';
import ui from '../src/ui.json';

['moonlight', 'moonlight-ii'].forEach((theme) => {
  let srcString = fs.readFileSync(`./src/${theme}.json`, 'utf-8');

  const json = JSON.parse(srcString);
  Object.assign(json, { colors: ui.colors });
  srcString = JSON.stringify(json, null, 2);

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
