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


var requests_pb = require('./requests_pb.js')
const proto = {};
proto.statistico = require('./competition_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.statistico.CompetitionServiceClient =
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
proto.statistico.CompetitionServicePromiseClient =
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
 *   !proto.statistico.CompetitionRequest,
 *   !proto.statistico.Competition>}
 */
const methodDescriptor_CompetitionService_ListCompetitions = new grpc.web.MethodDescriptor(
  '/statistico.CompetitionService/ListCompetitions',
  grpc.web.MethodType.SERVER_STREAMING,
  requests_pb.CompetitionRequest,
  proto.statistico.Competition,
  /**
   * @param {!proto.statistico.CompetitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Competition.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.statistico.CompetitionRequest,
 *   !proto.statistico.Competition>}
 */
const methodInfo_CompetitionService_ListCompetitions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.statistico.Competition,
  /**
   * @param {!proto.statistico.CompetitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.statistico.Competition.deserializeBinary
);


/**
 * @param {!proto.statistico.CompetitionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Competition>}
 *     The XHR Node Readable Stream
 */
proto.statistico.CompetitionServiceClient.prototype.listCompetitions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.CompetitionService/ListCompetitions',
      request,
      metadata || {},
      methodDescriptor_CompetitionService_ListCompetitions);
};


/**
 * @param {!proto.statistico.CompetitionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.statistico.Competition>}
 *     The XHR Node Readable Stream
 */
proto.statistico.CompetitionServicePromiseClient.prototype.listCompetitions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/statistico.CompetitionService/ListCompetitions',
      request,
      metadata || {},
      methodDescriptor_CompetitionService_ListCompetitions);
};


module.exports = proto.statistico;

