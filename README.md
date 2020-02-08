# big-div-energy

>

## Install

```bash
npm install big-div-energy
```

Or

```bash
yarn add big-div-energy
```

## Usage

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BigDivEnergyProvider } from 'big-div-energy';
import App from './App';

ReactDOM.render(
  <BigDivEnergyProvider>
    <App />
  </BigDivEnergyProvider>,
  document.getElementById('root')
);
```

```js
// App.js
import { Box, Columns, Inline, Stack } from 'big-div-energy';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <Box>
        <Stack>
          <Box>Hi there</Box>
          <Inline>
            <Box>Hi there</Box>
            <Box>Hi there</Box>
            <Box>Hi there</Box>
          </Inline>
          <Columns>
            <Box>Hi there</Box>
            <Box>Hi there</Box>
            <Box>Hi there</Box>
          </Columns>
        </Stack>
      </Box>
    );
  }
}
```

## License

MIT © [VirtuaBoza](https://github.com/VirtuaBoza)
