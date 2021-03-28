// source: enum.proto
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

goog.exportSymbol('proto.statistico.ActionEnum', null, global);
goog.exportSymbol('proto.statistico.LineEnum', null, global);
goog.exportSymbol('proto.statistico.MeasureEnum', null, global);
goog.exportSymbol('proto.statistico.MetricEnum', null, global);
goog.exportSymbol('proto.statistico.ResultEnum', null, global);
goog.exportSymbol('proto.statistico.SideEnum', null, global);
goog.exportSymbol('proto.statistico.StatEnum', null, global);
goog.exportSymbol('proto.statistico.StrategyStatusEnum', null, global);
goog.exportSymbol('proto.statistico.TeamEnum', null, global);
goog.exportSymbol('proto.statistico.TradeResultEnum', null, global);
goog.exportSymbol('proto.statistico.VenueEnum', null, global);
goog.exportSymbol('proto.statistico.VisibilityEnum', null, global);
/**
 * @enum {number}
 */
proto.statistico.ActionEnum = {
  FOR: 0,
  AGAINST: 1
};

/**
 * @enum {number}
 */
proto.statistico.LineEnum = {
  CLOSING: 0,
  MAX: 1
};

/**
 * @enum {number}
 */
proto.statistico.MeasureEnum = {
  TOTAL: 0,
  AVERAGE: 1,
  CONTINUOUS: 2
};

/**
 * @enum {number}
 */
proto.statistico.MetricEnum = {
  GTE: 0,
  LTE: 1
};

/**
 * @enum {number}
 */
proto.statistico.ResultEnum = {
  WIN: 0,
  LOSE: 1,
  DRAW: 2,
  WIN_DRAW: 3,
  LOSE_DRAW: 4,
  WIN_LOSE: 5
};

/**
 * @enum {number}
 */
proto.statistico.SideEnum = {
  BACK: 0,
  LAY: 1
};

/**
 * @enum {number}
 */
proto.statistico.StatEnum = {
  GOALS: 0,
  SHOTS_ON_GOAL: 1
};

/**
 * @enum {number}
 */
proto.statistico.StrategyStatusEnum = {
  ARCHIVED: 0,
  ACTIVE: 1
};

/**
 * @enum {number}
 */
proto.statistico.TeamEnum = {
  HOME_TEAM: 0,
  AWAY_TEAM: 1
};

/**
 * @enum {number}
 */
proto.statistico.TradeResultEnum = {
  FAIL: 0,
  SUCCESS: 1
};

/**
 * @enum {number}
 */
proto.statistico.VenueEnum = {
  HOME: 0,
  AWAY: 1,
  HOME_AWAY: 2
};

/**
 * @enum {number}
 */
proto.statistico.VisibilityEnum = {
  PUBLIC: 0,
  PRIVATE: 1
};

goog.object.extend(exports, proto.statistico);
