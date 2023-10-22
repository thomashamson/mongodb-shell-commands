db.collection.updateMany(
  {
    keyToRemove: { $exists: true },
  },
  {
    $unset: {
      keyToRemove: "",
    },
  }
);
