import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow, mount, render } from 'enzyme';
import Story from './Story';

const fakeData = {
  url: '',
  title: 'Google, Facebook, Apple, Amazon may pay more to operate in Sunnyvale',
  site: {
    name: 'The Mercury News'
  },
  score: '80',
  read_time: '120',
  image_url:
    'https://www.mercurynews.com/wp-content/uploads/2018/06/SJM-L-SUNNYTAX-0607-0.jpg'
};

// describe('Login Component', () => {
//   // make our assertion and what we expect to happen
//   it('should render without throwing an error', () => {
//     expect(shallow(<Story storyData={fakeData} />)).toBe(true);
//   });
// });

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Story storyData={fakeData} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders correctly', () => {
//   const tree = renderer.create(<Story storyData={fakeData} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
