import fs from 'fs'
import path from 'path'
import fetch from 'cross-fetch';

const url = 'https://github.com/trainline-eu/stations/raw/master/stations.csv';
const etagPath = path.resolve(import.meta.dirname, '..', 'stations/stations.etag');
const outputPath = path.resolve(import.meta.dirname, '..', 'stations/stations.csv');

async function downloadCSV() {
  try {
    let etag = "none"
    if (fs.existsSync(etagPath)) {
      etag = fs.readFileSync(etagPath, 'utf-8');
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'If-None-Match': etag
      }
    });

    // not modified 
    if (response.status === 304) {
      console.log('CSV file is up to date');
      return;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }
    const csvData = await response.text();

    fs.writeFileSync(outputPath, csvData);
    fs.writeFileSync(etagPath, response.headers.get('etag'));

    console.log('CSV file downloaded and saved successfully');

  } catch (error) {
    console.error('Error downloading the CSV file:', error);
  }
}

downloadCSV();
