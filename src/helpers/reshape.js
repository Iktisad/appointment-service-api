/** 
 * takes in the object and reshapes the object by filtering out unnecessay keys
 * object = {a:1,b:2,c:3} condition = [a,c]
 * result = {b:2}
*/

export const reshape = (object, condition) => {
    return Object.keys(object).filter(key =>
      !condition.includes(key)).reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
  }
  /**
   * example 1
   *  converts objects 
   *    {
   *      a:"1"
   *      b: {
   *        c:"2"
   *      }
   *    }
   *  to
   * 
   *  {
   *    a:"1",
   *    b.c: "2"
   *  }
   * 
   * example 2 
   * let params = {
   *    address: {
   *        city: {
   *          location: {
   *          street: "new street"
   *        }
   *      }  
   *    }
   *  };
   * 
   *  {
   *     "address.city.location.street": "new street"
   *  }
   **/
  export const convertToDotNotation = (obj, newObj = {}, prefix="" ) => {
    
  
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        convertToDotNotation(obj[key], newObj, prefix + key + ".");
      } else {
        newObj[prefix + key] = obj[key];
      }
    }
  
    return newObj;
  }
  
  // ==============================================================================================================
  
  // if object key value pair exists 
  export const removeObjKeyValueNull = (obj)=>{
    for (let o in obj){
      if(obj[o]===null || obj[o]=== '') delete obj[o];
    };
    // return obj;
  }