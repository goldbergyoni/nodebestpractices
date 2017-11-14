/* global $:false, _:false */
/* jshint browser:true */

/*
  author: david linse <davidlinse@gmail.com>
  version: 0.0.1

  A very first draft to add the ability to sort
  the "file-list" by the displayed 'numbers' for:

   + lint-errors
   + complexity
   + lines of code
   + estimated errors

  A group of buttons is added to the template above
  to trigger the update of the file-list.
*/

$(function sortable_file_list () {

  "use strict";

    var file_list = $('ul.file-list');

    var files = file_list.find('li');

    // work-horse
    // @param:  key  The 'data-<key>' to sort by
    // @return: descending sorted array of <li> elements
    //
    var _sortBy = function (key) {
        return _.sortBy(files, function (el) {
            return Number($(el).find('span[data-lint]').attr(key)) * -1;
        });
    };

    // sorter

    var _sortByLintErr = function _sortByLintErr () {
        return _sortBy('data-lint');
    };

    var _sortBySLOC = function _sortBySLOC () {
        return _sortBy('data-sloc');
    };

    var _sortByBugs = function _sortByBugs () {
        return _sortBy('data-bugs');
    };

    var _sortByComplexity = function _sortByComplexity () {
        return _sortBy('data-complexity');
    };

    // appends the 'list' of '<li>' elements
    // to its parent '<ul>'.
    // @param: a list of '<li>'' elements
    //
    var _update_list = function _update_list (list) {
      file_list.append($(list));
    };


    var _update_metrics_order = function _update_metrics_order (metric_name) {

      var reorder = function reorder () {

        var metric = $(this).children().find('label').filter(function() {
          return $(this).text() === metric_name;
        }).parent();

        $(metric).prependTo($(this));
      };

      $("div [class*='js-file-chart']").each(reorder);
    };

    // button event-handler

    var _byComplexity = function () {
      _update_list(_sortByComplexity());
      _update_metrics_order('complexity');
    };

    var _byBugs = function () {
      _update_list(_sortByBugs());
      _update_metrics_order('est errors');
    };

    var _bySLOC = function () {
      _update_list(_sortBySLOC());
      _update_metrics_order('sloc');
    };

    var _byLint = function () {
      _update_list(_sortByLintErr());
      _update_metrics_order('lint errors');
    };

    // styling

    var _update_state = function _update_state (target) {

        var prev = $('button.on');
            prev.removeClass('on');

        var current = $(target);
            current.addClass('on');
    };

    // setup button events

    $('button#button-complexity').on('click', _byComplexity);
    $('button#button-bugs').on('click', _byBugs);
    $('button#button-sloc').on('click', _bySLOC);
    $('button#button-lint').on('click', _byLint);

    // styling update for buttons

    var all = $('button.btn');
        all.on('click', function (evt) {
          _update_state(evt.target);
        });
});
