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


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var requests_pb = require('./requests_pb.js')
const proto = {};
proto.statistico = require('./season_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.SeasonServiceClient =
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
proto.statistico.SeasonServicePromiseClient =
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
 *   !proto.statistico.SeasonCompetitionRequest,
 *   !proto.statistico.Season>}
 */
const methodDescriptor_SeasonService_GetSeasonsForCompetition = new grpc.web.MethodDescriptor(
  '/statistico.SeasonService/GetSeasonsForCompetition',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.SeasonCompetitionRequest,
  proto.statistico.Season,
  /**
   * @param {!proto.statistico.SeasonCompetitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Season.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.SeasonCompetitionRequest,
 *   !proto.statistico.Season>}
 */
const methodInfo_SeasonService_GetSeasonsForCompetition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Season,
  /**
   * @param {!proto.statistico.SeasonCompetitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Season.deserializeBinary
);


/**
 * @param {!proto.statistico.SeasonCompetitionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Season>}
 *     The XHR Node Readable Stream
 */
proto.statistico.SeasonServiceClient.prototype.getSeasonsForCompetition =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.SeasonService/GetSeasonsForCompetition',
      request,
      metadata || {},
      methodDescriptor_SeasonService_GetSeasonsForCompetition);
};


/**
 * @param {!proto.statistico.SeasonCompetitionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Season>}
 *     The XHR Node Readable Stream
 */
proto.statistico.SeasonServicePromiseClient.prototype.getSeasonsForCompetition =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.SeasonService/GetSeasonsForCompetition',
      request,
      metadata || {},
      methodDescriptor_SeasonService_GetSeasonsForCompetition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.TeamSeasonsRequest,
 *   !proto.statistico.TeamSeasonsResponse>}
 */
const methodDescriptor_SeasonService_GetSeasonsForTeam = new grpc.web.MethodDescriptor(
  '/statistico.SeasonService/GetSeasonsForTeam',
  grpc.web.MethodType.UNARY,
  proto.statistico.TeamSeasonsRequest,
  proto.statistico.TeamSeasonsResponse,
  /**
   * @param {!proto.statistico.TeamSeasonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamSeasonsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamSeasonsRequest,
 *   !proto.statistico.TeamSeasonsResponse>}
 */
const methodInfo_SeasonService_GetSeasonsForTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamSeasonsResponse,
  /**
   * @param {!proto.statistico.TeamSeasonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamSeasonsResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamSeasonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.TeamSeasonsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamSeasonsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.SeasonServiceClient.prototype.getSeasonsForTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.SeasonService/GetSeasonsForTeam',
      request,
      metadata || {},
      methodDescriptor_SeasonService_GetSeasonsForTeam,
      callback);
};


/**
 * @param {!proto.statistico.TeamSeasonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.TeamSeasonsResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.SeasonServicePromiseClient.prototype.getSeasonsForTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.SeasonService/GetSeasonsForTeam',
      request,
      metadata || {},
      methodDescriptor_SeasonService_GetSeasonsForTeam);
};


module.exports = proto.statistico;

