db.collection.updateMany(
  {},
  {
    $rename: {
      keyToRename: "newKeyName",
    },
  }
);
