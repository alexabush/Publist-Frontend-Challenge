import React from 'react';
import renderer from 'react-test-renderer';
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

test('Renders correctly', () => {
  const component = renderer.create(<Story storyData={fakeData} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
