# Here are some complex queries on JSON you can do in PG

## Intro

A PG query consists of the selection part and the condition.

Eg, `SELECT * FROM table_name WHERE column_name = value`

The part before WHERE is the selection,
and the part after WHERE is the condition.

Now, let's get into some complex queries with JSON.

Ex,

Consider a db having column 'json_data' with following JSON :

```
{
  "key1" : {
    "key3": "value1",
    "key4": [value3, value4, etc]
  },
  "key2" : "value2"
}
```

## 1. Getting a JSON column from JSON column in PostGres (PG)

Selecting a JSONB is straight-forward, simply write a select query

`SELECT json_data FROM table_name WHERE CONDITION`

## 2. Getting a nested object from JSON column in PostGres (PG)

