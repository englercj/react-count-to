'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var CountTo = _React2['default'].createClass({
  displayName: 'CountTo',

  propTypes: {
    from: _React2['default'].PropTypes.number,
    to: _React2['default'].PropTypes.number.isRequired,
    speed: _React2['default'].PropTypes.number.isRequired,
    delay: _React2['default'].PropTypes.number,
    onComplete: _React2['default'].PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      counter: this.props.from || 0
    };
  },

  componentDidMount: function componentDidMount() {
    var delay = this.props.delay || 100;
    this.loopsCounter = 0;
    this.loops = Math.ceil(this.props.speed / delay);
    this.increment = (this.props.to - this.state.counter) / this.loops;
    this.interval = setInterval(this.next, delay);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.clear();
  },

  next: function next() {
    if (this.loopsCounter < this.loops) {
      this.loopsCounter++;
      this.setState({
        counter: this.state.counter + this.increment
      });
    } else {
      this.clear();
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  },

  clear: function clear() {
    clearInterval(this.interval);
  },

  render: function render() {
    return _React2['default'].createElement(
      'span',
      null,
      this.state.counter.toFixed()
    );
  }

});

exports['default'] = CountTo;
module.exports = exports['default'];