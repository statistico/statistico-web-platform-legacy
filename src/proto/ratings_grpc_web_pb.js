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


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.statistico = require('./ratings_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.TeamRatingServiceClient =
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
proto.statistico.TeamRatingServicePromiseClient =
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
 *   !proto.statistico.TeamRatingRequest,
 *   !proto.statistico.TeamRatingResponse>}
 */
const methodDescriptor_TeamRatingService_GetTeamRatings = new grpc.web.MethodDescriptor(
  '/statistico.TeamRatingService/GetTeamRatings',
  grpc.web.MethodType.UNARY,
  proto.statistico.TeamRatingRequest,
  proto.statistico.TeamRatingResponse,
  /**
   * @param {!proto.statistico.TeamRatingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamRatingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamRatingRequest,
 *   !proto.statistico.TeamRatingResponse>}
 */
const methodInfo_TeamRatingService_GetTeamRatings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamRatingResponse,
  /**
   * @param {!proto.statistico.TeamRatingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamRatingResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamRatingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.TeamRatingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamRatingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamRatingServiceClient.prototype.getTeamRatings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.TeamRatingService/GetTeamRatings',
      request,
      metadata || {},
      methodDescriptor_TeamRatingService_GetTeamRatings,
      callback);
};


/**
 * @param {!proto.statistico.TeamRatingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.TeamRatingResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.TeamRatingServicePromiseClient.prototype.getTeamRatings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.TeamRatingService/GetTeamRatings',
      request,
      metadata || {},
      methodDescriptor_TeamRatingService_GetTeamRatings);
};


module.exports = proto.statistico;

