/**
 * @fileoverview gRPC-Web generated client stub for statistico
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var enum_pb = require('./enum_pb.js')

var filter_pb = require('./filter_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.statistico = require('./strategy_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.StrategyServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.StrategyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.BuildStrategyRequest,
 *   !proto.statistico.StrategyTrade>}
 */
const methodDescriptor_StrategyService_BuildStrategy = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/BuildStrategy',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.statistico.BuildStrategyRequest,
  proto.statistico.StrategyTrade,
  /**
   * @param {!proto.statistico.BuildStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.StrategyTrade.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.BuildStrategyRequest,
 *   !proto.statistico.StrategyTrade>}
 */
const methodInfo_StrategyService_BuildStrategy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.StrategyTrade,
  /**
   * @param {!proto.statistico.BuildStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.StrategyTrade.deserializeBinary
);


/**
 * @param {!proto.statistico.BuildStrategyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.StrategyTrade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.buildStrategy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/BuildStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_BuildStrategy);
};


/**
 * @param {!proto.statistico.BuildStrategyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.StrategyTrade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServicePromiseClient.prototype.buildStrategy =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/BuildStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_BuildStrategy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.SaveStrategyRequest,
 *   !proto.statistico.Strategy>}
 */
const methodDescriptor_StrategyService_SaveStrategy = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/SaveStrategy',
  grpc.web.MethodType.UNARY,
  proto.statistico.SaveStrategyRequest,
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.SaveStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.SaveStrategyRequest,
 *   !proto.statistico.Strategy>}
 */
const methodInfo_StrategyService_SaveStrategy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.SaveStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @param {!proto.statistico.SaveStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.Strategy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.saveStrategy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.StrategyService/SaveStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_SaveStrategy,
      callback);
};


/**
 * @param {!proto.statistico.SaveStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.Strategy>}
 *     Promise that resolves to the response
 */
proto.statistico.StrategyServicePromiseClient.prototype.saveStrategy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.StrategyService/SaveStrategy',
      request,
      metadata || {},
      methodDescriptor_StrategyService_SaveStrategy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.ListUserStrategiesRequest,
 *   !proto.statistico.Strategy>}
 */
const methodDescriptor_StrategyService_ListUserStrategies = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/ListUserStrategies',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.statistico.ListUserStrategiesRequest,
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.ListUserStrategiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.ListUserStrategiesRequest,
 *   !proto.statistico.Strategy>}
 */
const methodInfo_StrategyService_ListUserStrategies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Strategy,
  /**
   * @param {!proto.statistico.ListUserStrategiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Strategy.deserializeBinary
);


/**
 * @param {!proto.statistico.ListUserStrategiesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.listUserStrategies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/ListUserStrategies',
      request,
      metadata || {},
      methodDescriptor_StrategyService_ListUserStrategies);
};


/**
 * @param {!proto.statistico.ListUserStrategiesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Strategy>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServicePromiseClient.prototype.listUserStrategies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/ListUserStrategies',
      request,
      metadata || {},
      methodDescriptor_StrategyService_ListUserStrategies);
};


module.exports = proto.statistico;

