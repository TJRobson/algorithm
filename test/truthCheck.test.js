import { assert } from 'chai';
import truthCheck from '../src/truthCheck';
describe('Everything Be True', () => {
  it('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.', () => {
    assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true, 'message: <code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return true.');
  });
  it('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.', () => {
    assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false, 'message: <code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return false.');
  });
  it('truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.', () => {
    assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false, 'message: <code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code> should return false.');
  });
  it('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false', () => {
    assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false, 'message: <code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code> should return false');
  });
  it('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true', () => {
    assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true, 'message: <code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code> should return true');
  });
  it('truthCheck([{"single": "yes"}], "single") should return true', () => {
    assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true, 'message: <code>truthCheck([{"single": "yes"}], "single")</code> should return true');
  });
  it('truthCheck([{"single": ""}, {"single": "double"}], "single") should return false', () => {
    assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false, 'message: <code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code> should return false');
  });
  it('truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false', () => {
    assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false, 'message: <code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code> should return false');
  });
  it('truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false', () => {
    assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false, 'message: <code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code> should return false');
  });
});
