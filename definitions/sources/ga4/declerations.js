/*declare({
    database: 'bigquery-public-data'
    schema: 'ga4_obfuscated_sample_ecommerce',
    name: 'events_20210131',
});*/

declare({
    database: constants.GA4_DATABASE,
    schema: constants.GA4_DATASET,
    name: constants.GA4_TABLE,
});
