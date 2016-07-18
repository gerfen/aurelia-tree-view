'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNode = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaFramework = require('aurelia-framework');

var _nodeModel = require('./node-model');

var _events = require('../common/events');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var TreeNode = exports.TreeNode = (_dec = (0, _aureliaFramework.inject)(Element, _aureliaFramework.LogManager), _dec2 = (0, _aureliaFramework.bindable)(), _dec(_class = (_class2 = function () {
  function TreeNode(element, logManager) {
    _classCallCheck(this, TreeNode);

    _initDefineProp(this, 'model', _descriptor, this);

    this.element = element;
    this.log = logManager.getLogger('tree-node');
  }

  TreeNode.prototype.insertChild = function insertChild(child, before) {
    this.model.children.push(child);
  };

  TreeNode.prototype.removeChild = function removeChild(child) {
    var pos = this.model.children.indexOf(child);
    if (pos > -1) {
      this.model.children.splice(pos, 1);
    } else {
      this.log.warn('child not found in model', child, this.model.children);
    }
  };

  TreeNode.prototype.selectNode = function selectNode() {
    this.model.selectNode();
    (0, _events.fireEvent)(this.element, 'selected', { node: this.model });
  };

  TreeNode.prototype.toggleNode = function toggleNode() {
    if (this.model.expanded) {
      this.model.collapseNode();
      (0, _events.fireEvent)(this.element, 'collapsed', { node: this.model });
    } else {
      this.model.expandNode();
      (0, _events.fireEvent)(this.element, 'expanded', { node: this.model });
    }
  };

  return TreeNode;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class);