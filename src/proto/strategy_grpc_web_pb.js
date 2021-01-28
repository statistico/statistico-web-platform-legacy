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
 *   !proto.statistico.StrategyTradeSearchRequest,
 *   !proto.statistico.StrategyTrade>}
 */
const methodDescriptor_StrategyService_StrategyTradeSearch = new grpc.web.MethodDescriptor(
  '/statistico.StrategyService/StrategyTradeSearch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.statistico.StrategyTradeSearchRequest,
  proto.statistico.StrategyTrade,
  /**
   * @param {!proto.statistico.StrategyTradeSearchRequest} request
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
 *   !proto.statistico.StrategyTradeSearchRequest,
 *   !proto.statistico.StrategyTrade>}
 */
const methodInfo_StrategyService_StrategyTradeSearch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.StrategyTrade,
  /**
   * @param {!proto.statistico.StrategyTradeSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.StrategyTrade.deserializeBinary
);


/**
 * @param {!proto.statistico.StrategyTradeSearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.StrategyTrade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServiceClient.prototype.strategyTradeSearch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/StrategyTradeSearch',
      request,
      metadata || {},
      methodDescriptor_StrategyService_StrategyTradeSearch);
};


/**
 * @param {!proto.statistico.StrategyTradeSearchRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.StrategyTrade>}
 *     The XHR Node Readable Stream
 */
proto.statistico.StrategyServicePromiseClient.prototype.strategyTradeSearch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.StrategyService/StrategyTradeSearch',
      request,
      metadata || {},
      methodDescriptor_StrategyService_StrategyTradeSearch);
};


module.exports = proto.statistico;

