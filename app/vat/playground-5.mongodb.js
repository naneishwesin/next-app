use('mongodbVSCodePlaygroundDB');

/*  db.sales.find(
  {
    "item": "xyz"
  }
)  */
  db.sales.updateMany(
  {"item": "abc"},
  {$set:{"item": "xyz"}}
)  

//db.sales.deleteMany({ "item": "xyz" });
