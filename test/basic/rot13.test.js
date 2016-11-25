import { assert } from 'chai';
import rot13 from '../../src/basic/rot13.js';

describe('Caesars Cipher', () => {
  it('rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP', () => {
    assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", 'message: <code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>');
  });
  it('rot13("SERR CVMMN!") should decode to FREE PIZZA!', () => {
    assert(rot13("SERR CVMMN!") === "FREE PIZZA!", 'message: <code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>');
  });
  it('rot13("SERR YBIR?") should decode to FREE LOVE?', () => {
    assert(rot13("SERR YBIR?") === "FREE LOVE?", 'message: <code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>');
  });
  it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", 'message: <code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>');
  });
});
