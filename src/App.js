import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  IconSettings,
  PageHeader,
  ButtonGroup,
  ButtonStateful,
  Dropdown
} from '@salesforce/design-system-react';

class App extends Component {
  render() {
    const contentRight = (
      <div>
        <ButtonStateful
          key="PageHeaderFollowButton"
          iconSize="medium"
          stateOne={{ iconName: 'add', label: 'Follow' }}
          stateTwo={{ iconName: 'check', label: 'Following' }}
          stateThree={{ iconName: 'close', label: 'Unfollow' }}
        />
        <ButtonGroup>
          <Button label="Edit" />
          <Button label="Delete" />
          <Button label="Clone" />
          <Dropdown
            align="right"
            assistiveText="More Options"
            iconName="down"
            iconVariant="border-filled"
            options={[
              { label: 'Menu Item One', value: 'A0' },
              { label: 'Menu Item Two', value: 'B0' },
              { label: 'Menu Item Three', value: 'C0' },
              { type: 'divider' },
              { label: 'Menu Item Four', value: 'D0' }
            ]}
          />
        </ButtonGroup>
      </div>
    );

    const details = [
      {
        label: 'Field 1',
        content: 'Description that demonstrates truncation with content. Description that demonstrates truncation with content.',
        truncate: true
      },
      { label: 'Field 2', content: 'Multiple Values' },
      {
        label: 'Field 3',
        content: <a href="javascript:void(0);">Hyperlink</a>
      },
      {
        label: 'Field 4',
        content: 'Description (2-line truncation)',
        truncate: true
      }
    ];

    return (
      <IconSettings
        iconPath={
          process.env.PUBLIC_URL +
            '/assets/salesforce-lightning-design-system-2.5.2/icons'
        }
      >
        <PageHeader
          contentRight={contentRight}
          details={details}
          iconAssistiveText="User"
          iconCategory="standard"
          iconName="user"
          label="Record Type"
          title="Record Title"
          variant="recordHome"
        />
      </IconSettings>
    );
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button label="Hello Button" />

      </div>
    );*/
  }
}

export default App;
