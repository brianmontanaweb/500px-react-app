import React from 'react';
import { orderObjectByKey } from "./utilities/Helpers";

it('order the data by highest_rating', () => {
  //Could generate a random array of objects with key to test against
  const photosArray = [{
    "highest_rating": 17.3,
  }, {
    "highest_rating": 97.3,
  }, {
    "highest_rating": 92.3,
  }, {
    "highest_rating": 50,
  }];

  const photosArrayOrdered = [{
    "highest_rating": 97.3,
  }, {
    "highest_rating": 92.3,
  }, {
    "highest_rating": 50,
  }, {
    "highest_rating": 17.3,
  }];

  expect(orderObjectByKey(photosArray, 'highest_rating', true)).toEqual(photosArrayOrdered);
});
