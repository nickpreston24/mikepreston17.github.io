import config from '../../config';

const apiKey = config.airtable_api_key;
const baseId = config.airtable_base;

const Airtable = require('airtable');

const base = new Airtable({ apiKey }).base(baseId);

/**
 * Get an Airtable Base by name w/ records
 * @param {Get
 * } baseName 
 */
const getByName = async baseName =>
  await new Promise((resolve, reject) => {
    base(baseName) // e.g. 'Projects'
      .select({
        // maxRecords: 3,
        view: 'Grid view'
      })
      .eachPage(
        (records, fetchNextPage) => {
          let data;
          records
            .filter(record => !!record.get('Name'))
            .forEach((record) => {
              data = record;
            });

          fetchNextPage();
          resolve(data);
        },
        err => {
          if (err) {
            reject(err);
          }
        }
      );
  });
export { getByName };