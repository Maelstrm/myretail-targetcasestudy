import CartButtons from './CartButtons'
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('tests', function() {
    it('renders correctly with 0', () => {
        const tree = shallow(<CartButtons data={0} />);
        expect(tree).toMatchSnapshot();
      });

      it('renders correctly with 1', () => {
          const tree = shallow(<CartButtons data={1} />);
          expect(tree).toMatchSnapshot();
      });
})


// test('check if purchaseChannelCode is working', () => {
//     expect(displaylogic(0)).toBe(
//         <Grid container item xs={12} item xs={12} style={{display:'flex'}} spacing={8}>
//             <Grid item xs={6}>
//                 <Button variant="contained" color='primary' fullWidth>PICK UP IN STORE</Button>
//             </Grid>
//             <Grid item xs={6}>
//                 <Button variant="contained" color='primary' fullWidth>ADD TO CART</Button>
//             </Grid>
//         </Grid>
//     );
//   });