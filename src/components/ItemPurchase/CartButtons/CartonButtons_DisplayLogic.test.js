import * as funcs from './CartonButtons_DisplayLogic'

test('check if purchaseChannelCode is working', () => {
    expect(funcs.whichTodisplay(0)).toBe(1);
  });