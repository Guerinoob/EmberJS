import DS from 'ember-data';
 
export default DS.Transform.extend({
  deserialize(serialized) {
    var type = typeof serialized;
       if (type === "string") {
         return new Date(Date.parse(serialized));
       } else if (type === "number") {
         return new Date(serialized);
       } else if(serialized!=null && type==="object") {
         return new Date(serialized.$numberLong);
       } else if (serialized === null || serialized === undefined) {
         return serialized;
       } else {
         return null;
       }
  },
 
  serialize(deserialized) {
    if (deserialized instanceof Date) {
      return deserialized.toJSON();
    } else {
      return new Date(Date.parse(deserialized));
    }
  }
});