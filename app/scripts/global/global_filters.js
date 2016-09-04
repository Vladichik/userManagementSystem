"use strict";

angular.module('userManagementSystemApp')
/**
 * Filter that built to find index of the required object in array by generic field.
 * Useful and faster way to find index of the single object in Array.
 */
  .filter('getIndex', function () {
    return function (array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (key !== null) {
          if (array[i][key] === value) {
            return i;
          }
        } else {
          if (array[i] === value) {
            return i;
          }
        }
      }
      return null;
    };
  })
  /**
   * Generic filter that built to find some object by ID. Useful and faster way to find single
   * object in Array. For instance we use it to find specific lead in leads array.
   * Can be used in any array of objects to find object by ID
   */
  .filter('getById', function () {
    return function (collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
          return collection[i];
        }
      }
      return null;
    };
  });
