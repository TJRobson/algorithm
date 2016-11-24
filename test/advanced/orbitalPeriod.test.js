import { assert } from 'chai';
import orbitalPeriod from '../src/orbitalPeriod.js';

describe('Map the Debris', () => {
  it('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].', () => {
    assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}], 'message: <code>orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])</code> should return <code>[{name: "sputnik", orbitalPeriod: 86400}]</code>.');
  });
  it('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].', () => {
    assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}], 'message: <code>orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])</code> should return <code>[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]</code>.');
  });
});
