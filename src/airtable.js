import config from './config';

const apiKey = config.airtable_api_key;
const baseId = config.airtable_base;

const Airtable = require('airtable');

const base = new Airtable({ apiKey }).base(baseId);

const getByName = async resumeName =>
  await new Promise((resolve, reject) => {
    base('Resume')
      .select({
        maxRecords: 3,
        view: 'Grid view'
      })
      .eachPage(
        (records, fetchNextPage) => {
          let ret;
          records
            .filter(record => !!record.get('Name'))
            .forEach((record) => {
              ret = record;
              // console.log('Retrieved', record.get('Name'));
            });

          fetchNextPage();
          resolve(ret);
        },
        err => {
          if (err) {
            reject(err);
          }
        }
      );
  });
export { getByName };
