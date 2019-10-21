import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      moviesList = {[{
        name: ``,
        genre: `Comedy`
      }]}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});