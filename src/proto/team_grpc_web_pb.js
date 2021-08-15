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
proto.statistico = require('./team_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.TeamServiceClient =
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
proto.statistico.TeamServicePromiseClient =
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
 *   !proto.statistico.TeamRequest,
 *   !proto.statistico.Team>}
 */
const methodDescriptor_TeamService_GetTeamByID = new grpc.web.MethodDescriptor(
  '/statistico.TeamService/GetTeamByID',
  grpc.web.MethodType.UNARY,
  requests_pb.TeamRequest,
  proto.statistico.Team,
  /**
   * @param {!proto.statistico.TeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Team.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.TeamRequest,
 *   !proto.statistico.Team>}
 */
const methodInfo_TeamService_GetTeamByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Team,
  /**
   * @param {!proto.statistico.TeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Team.deserializeBinary
);


/**
 * @param {!proto.statistico.TeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.Team)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Team>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamServiceClient.prototype.getTeamByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.TeamService/GetTeamByID',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamByID,
      callback);
};


/**
 * @param {!proto.statistico.TeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.Team>}
 *     Promise that resolves to the response
 */
proto.statistico.TeamServicePromiseClient.prototype.getTeamByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.TeamService/GetTeamByID',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.CompetitionTeamsRequest,
 *   !proto.statistico.TeamsResponse>}
 */
const methodDescriptor_TeamService_GetTeamsByCompetitionId = new grpc.web.MethodDescriptor(
  '/statistico.TeamService/GetTeamsByCompetitionId',
  grpc.web.MethodType.UNARY,
  proto.statistico.CompetitionTeamsRequest,
  proto.statistico.TeamsResponse,
  /**
   * @param {!proto.statistico.CompetitionTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.CompetitionTeamsRequest,
 *   !proto.statistico.TeamsResponse>}
 */
const methodInfo_TeamService_GetTeamsByCompetitionId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.TeamsResponse,
  /**
   * @param {!proto.statistico.CompetitionTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.TeamsResponse.deserializeBinary
);


/**
 * @param {!proto.statistico.CompetitionTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.statistico.TeamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.TeamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamServiceClient.prototype.getTeamsByCompetitionId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/statistico.TeamService/GetTeamsByCompetitionId',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamsByCompetitionId,
      callback);
};


/**
 * @param {!proto.statistico.CompetitionTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.statistico.TeamsResponse>}
 *     Promise that resolves to the response
 */
proto.statistico.TeamServicePromiseClient.prototype.getTeamsByCompetitionId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/statistico.TeamService/GetTeamsByCompetitionId',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamsByCompetitionId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.statistico.SeasonTeamsRequest,
 *   !proto.statistico.Team>}
 */
const methodDescriptor_TeamService_GetTeamsBySeasonId = new grpc.web.MethodDescriptor(
  '/statistico.TeamService/GetTeamsBySeasonId',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.SeasonTeamsRequest,
  proto.statistico.Team,
  /**
   * @param {!proto.statistico.SeasonTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Team.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.SeasonTeamsRequest,
 *   !proto.statistico.Team>}
 */
const methodInfo_TeamService_GetTeamsBySeasonId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Team,
  /**
   * @param {!proto.statistico.SeasonTeamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Team.deserializeBinary
);


/**
 * @param {!proto.statistico.SeasonTeamsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Team>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamServiceClient.prototype.getTeamsBySeasonId =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TeamService/GetTeamsBySeasonId',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamsBySeasonId);
};


/**
 * @param {!proto.statistico.SeasonTeamsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Team>}
 *     The XHR Node Readable Stream
 */
proto.statistico.TeamServicePromiseClient.prototype.getTeamsBySeasonId =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.TeamService/GetTeamsBySeasonId',
      request,
      metadata || {},
      methodDescriptor_TeamService_GetTeamsBySeasonId);
};


module.exports = proto.statistico;

