'use strict';
import expect from 'expect'
const utils = require('../../app/util/utils');

describe('utils', () => {
  it('should get url from a tag', () => {
    let tag = "<a href='http://boardgamegeek.com/boardgame/191982' target='_blank'>Link to bgg gamepage'";
    let expected = 'http://boardgamegeek.com/boardgame/191982';
    let result = utils.getUrlFromTag(tag);

    expect(result).toEqual(expected);
  });
});
