// Generated by CoffeeScript 1.7.1
(function() {
  var Model,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.fullName = function() {
      return this.get("firstName") + " " + this.get("lastName");
    };

    return Model;

  })(Backbone.Model);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Model;
  } else {
    window.Model = Model;
  }

}).call(this);
