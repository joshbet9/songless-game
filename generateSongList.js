const fs = require('fs');
const path = require('path');

// Path to the snippets folder (relative to this script)
const snippetsFolder = path.join(__dirname, 'snippets');

// Read files in snippets folder
fs.readdir(snippetsFolder, (err, files) => {
  if (err) {
    console.error('Error reading snippets folder:', err);
    return;
  }

  // Filter for .mp3 files only
  const mp3Files = files.filter(file => file.toLowerCase().endsWith('.mp3'));

  // Generate URL list assuming /snippets/ is the base URL path
  const urls = mp3Files.map(file => `/snippets/${encodeURIComponent(file)}`);

  // Save JSON file with the list
  fs.writeFile('songList.json', JSON.stringify(urls, null, 2), (err) => {
    if (err) {
      console.error('Error writing songList.json:', err);
    } else {
      console.log('songList.json generated successfully!');
    }
  });
});
