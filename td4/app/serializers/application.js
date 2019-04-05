import DS from 'ember-data';
 
export default DS.JSONSerializer.extend({
  primaryKey: '_id',
  isNewSerializerAPI: true,
  extractId: function (modelClass, resourceHash) {
    if(resourceHash._id)
    return (resourceHash._id.$oid || resourceHash._id);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if(requestType=='createRecord')
      return this._super(store, primaryModelClass, {}, id, requestType);
    if(requestType=='updateRecord')
      return this._super(store, primaryModelClass, {}, id, requestType);
    if(requestType=='deleteRecord')
      return this._super(store, primaryModelClass, null, id, requestType);
    if (payload._embedded)
      return this._super(store, primaryModelClass, payload._embedded, id, requestType);
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serializeId (snapshot, json) {
    let id = snapshot.id;
    json['_id'] = id;
  }
});