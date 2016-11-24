import { assert } from 'chai';
import makeFriendlyDates from '../src/makeFriendlyDates.js';

describe('Friendly Date Ranges', () => {
  it('makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].', () => {
    assert.deepEqual(makeFriendlyDates(['2016-07-01', '2016-07-04']), ['July 1st','4th'], 'message: <code>makeFriendlyDates(["2016-07-01", "2016-07-04"])</code> should return <code>["July 1st","4th"]</code>.');
  });
  it('makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].', () => {
    assert.deepEqual(makeFriendlyDates(['2016-12-01', '2017-02-03']), ['December 1st','February 3rd'], 'message: <code>makeFriendlyDates(["2016-12-01", "2017-02-03"])</code> should return <code>["December 1st","February 3rd"]</code>.');
  });
  it('makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].', () => {
    assert.deepEqual(makeFriendlyDates(['2016-12-01', '2018-02-03']), ['December 1st, 2016','February 3rd, 2018'], 'message: <code>makeFriendlyDates(["2016-12-01", "2018-02-03"])</code> should return <code>["December 1st, 2016","February 3rd, 2018"]</code>.');
  });
  it('makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]', () => {
    assert.deepEqual(makeFriendlyDates(['2017-03-01', '2017-05-05']), ['March 1st, 2017','May 5th'], 'message: <code>makeFriendlyDates(["2017-03-01", "2017-05-05"])</code> should return <code>["March 1st, 2017","May 5th"]</code>');
  });
  it('makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].', () => {
    assert.deepEqual(makeFriendlyDates(['2018-01-13', '2018-01-13']), ['January 13th, 2018'], 'message: <code>makeFriendlyDates(["2018-01-13", "2018-01-13"])</code> should return <code>["January 13th, 2018"]</code>.');
  });
  it('makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].', () => {
    assert.deepEqual(makeFriendlyDates(['2022-09-05', '2023-09-04']), ['September 5th, 2022','September 4th'], 'message: <code>makeFriendlyDates(["2022-09-05", "2023-09-04"])</code> should return <code>["September 5th, 2022","September 4th"]</code>.');
  });
  it('makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].', () => {
    assert.deepEqual(makeFriendlyDates(['2022-09-05', '2023-09-05']), ['September 5th, 2022','September 5th, 2023'], 'message: <code>makeFriendlyDates(["2022-09-05", "2023-09-05"])</code> should return <code>["September 5th, 2022","September 5th, 2023"]</code>.');
  });
});
