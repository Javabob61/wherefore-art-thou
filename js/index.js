function whatIsInAName(collection, source) {
  
  var srcKeys = Object.keys(source);
  
  
  console.log(collection.filter(function (obj) { 
    return srcKeys.every(function (key) {    
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  }));  
  
    
  return collection.filter(function (obj) {  // Will return the full array that has the subset of source and the correct key/value pair
    
    return srcKeys.every(function (key) {
    //console.log(obj.hasOwnProperty(key));  // true
    //console.log(obj[key]);                 // capulet...hasownproperty(key)must be true and value must exist. 
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// for FCC challenge "Wherefore art thou"
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });