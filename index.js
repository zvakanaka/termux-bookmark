#!/usr/bin/env node
const { window } = require('page-evaluate');
const https = require('https');

const bookmarkServerRoot = 'https://corontine.io/boomkark-table-of-data';

(async () => {
  if (!process.argv.length > 2) {
    console.log('Missing URL argument');
    return;
  }
  const url = process.argv[2];

  console.log(`Getting title for: ${url}`);
  let title = '';
  if (process.argv.length > 3) {
    title = process.argv[3];
  } else {
    const { document } = await window(url);
    title = document.title;
  }

  console.log(`Adding bookmark: ${title} ${url}`);
  const path = `/save?url=${url}${title ? `&name=${title}` : ''}`;
  https.get(`${bookmarkServerRoot}${path}`, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      console.log('Bookmark saved');
      console.log(data);
    });
  }).on('error', (err) => {
    console.error('Failed to save bookmark:');
    console.error(err);
  });
})();
