/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var requests_pb = require('./requests_pb.js');
goog.exportSymbol('proto.statistico.Season', null, global);
goog.exportSymbol('proto.statistico.TeamSeasonsRequest', null, global);
goog.exportSymbol('proto.statistico.TeamSeasonsResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.TeamSeasonsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.TeamSeasonsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.TeamSeasonsRequest.displayName = 'proto.statistico.TeamSeasonsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.TeamSeasonsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.TeamSeasonsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.TeamSeasonsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamSeasonsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sort: (f = msg.getSort()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    includeCup: (f = msg.getIncludeCup()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.TeamSeasonsRequest}
 */
proto.statistico.TeamSeasonsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.TeamSeasonsRequest;
  return proto.statistico.TeamSeasonsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.TeamSeasonsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.TeamSeasonsRequest}
 */
proto.statistico.TeamSeasonsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTeamId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSort(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setIncludeCup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.TeamSeasonsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.TeamSeasonsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.TeamSeasonsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamSeasonsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSort();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getIncludeCup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 team_id = 1;
 * @return {number}
 */
proto.statistico.TeamSeasonsRequest.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.statistico.TeamSeasonsRequest.prototype.setTeamId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue sort = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.statistico.TeamSeasonsRequest.prototype.getSort = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.statistico.TeamSeasonsRequest.prototype.setSort = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.statistico.TeamSeasonsRequest.prototype.clearSort = function() {
  this.setSort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.TeamSeasonsRequest.prototype.hasSort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue include_cup = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.statistico.TeamSeasonsRequest.prototype.getIncludeCup = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.statistico.TeamSeasonsRequest.prototype.setIncludeCup = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.statistico.TeamSeasonsRequest.prototype.clearIncludeCup = function() {
  this.setIncludeCup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.TeamSeasonsRequest.prototype.hasIncludeCup = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.TeamSeasonsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.statistico.TeamSeasonsResponse.repeatedFields_, null);
};
goog.inherits(proto.statistico.TeamSeasonsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.TeamSeasonsResponse.displayName = 'proto.statistico.TeamSeasonsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.statistico.TeamSeasonsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.TeamSeasonsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.TeamSeasonsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.TeamSeasonsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamSeasonsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    seasonsList: jspb.Message.toObjectList(msg.getSeasonsList(),
    proto.statistico.Season.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.TeamSeasonsResponse}
 */
proto.statistico.TeamSeasonsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.TeamSeasonsResponse;
  return proto.statistico.TeamSeasonsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.TeamSeasonsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.TeamSeasonsResponse}
 */
proto.statistico.TeamSeasonsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.statistico.Season;
      reader.readMessage(value,proto.statistico.Season.deserializeBinaryFromReader);
      msg.addSeasons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.TeamSeasonsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.TeamSeasonsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.TeamSeasonsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.TeamSeasonsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeasonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.statistico.Season.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Season seasons = 1;
 * @return {!Array<!proto.statistico.Season>}
 */
proto.statistico.TeamSeasonsResponse.prototype.getSeasonsList = function() {
  return /** @type{!Array<!proto.statistico.Season>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.statistico.Season, 1));
};


/** @param {!Array<!proto.statistico.Season>} value */
proto.statistico.TeamSeasonsResponse.prototype.setSeasonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.statistico.Season=} opt_value
 * @param {number=} opt_index
 * @return {!proto.statistico.Season}
 */
proto.statistico.TeamSeasonsResponse.prototype.addSeasons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.statistico.Season, opt_index);
};


proto.statistico.TeamSeasonsResponse.prototype.clearSeasonsList = function() {
  this.setSeasonsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.statistico.Season = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.statistico.Season, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.statistico.Season.displayName = 'proto.statistico.Season';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.statistico.Season.prototype.toObject = function(opt_includeInstance) {
  return proto.statistico.Season.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.statistico.Season} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Season.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isCurrent: (f = msg.getIsCurrent()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.statistico.Season}
 */
proto.statistico.Season.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.statistico.Season;
  return proto.statistico.Season.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.statistico.Season} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.statistico.Season}
 */
proto.statistico.Season.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setIsCurrent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.statistico.Season.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.statistico.Season.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.statistico.Season} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.statistico.Season.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsCurrent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.statistico.Season.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.statistico.Season.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.statistico.Season.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.statistico.Season.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.BoolValue is_current = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.statistico.Season.prototype.getIsCurrent = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.statistico.Season.prototype.setIsCurrent = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.statistico.Season.prototype.clearIsCurrent = function() {
  this.setIsCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.statistico.Season.prototype.hasIsCurrent = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.statistico);
