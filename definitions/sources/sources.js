// Define the events table Each publish() call creates a new table definition that you can reference in your SQLX files.
//The first argument in the publish() function (e.g., "events_20240825", "users", "products") is the name you'll use to reference this table in your SQLX files. For example, you would use ${ref("users")} to reference the users table.
//The name field in each object should match the actual table name in BigQuery.
//Make sure all the information (database, schema, name) is correct for each table as it exists in your BigQuery project.

publish("events_20240825", {
  type: "table",
  database: "thinkuser-clients",
  schema: "analytics_250954221",
  name: "events_20240825",
  description: "External events table for 2024-08-25"
});

// Define another table, for example, a users table
publish("users", {
  type: "table",
  database: "thinkuser-clients",
  schema: "analytics_250954221",
  name: "users",
  description: "User information table"
});

// You can add more table definitions as needed
publish("products", {
  type: "table",
  database: "thinkuser-clients",
  schema: "analytics_250954221",
  name: "products",
  description: "Product catalog table"
});
