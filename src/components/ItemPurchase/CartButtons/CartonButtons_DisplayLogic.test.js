import displayLogic from './CartonButtons_DisplayLogic'

test('check if purchaseChannelCode is working', () => {
    expect(displayLogic.whichTodisplay(0)).toBe(1);
  });