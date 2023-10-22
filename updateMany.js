db.collection.updateMany(
  { filterKey: { $eq: "filterValue" } },
  { $set: { key: "value" } }
);
