"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatChannel = exports.ChatChannelSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

const {
  Schema
} = _mongoose.default;
const ChatChannelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  messages: {
    type: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      message: {
        type: String,
        required: true
      },
      sent: {
        type: Date,
        default: Date.now,
        required: true
      }
    }],
    required: true,
    select: false
  }
});
exports.ChatChannelSchema = ChatChannelSchema;

const ChatChannel = _mongoose.default.model('ChatChannel', ChatChannelSchema);

exports.ChatChannel = ChatChannel;