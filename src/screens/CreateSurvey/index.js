// @flow
import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import type { Element } from './types';
import type { SurveyState } from './types';
import AddQuestion from '../../components/AddQuestion/AddQuestion';

const { TabPane } = Tabs;

class CreateSurvey extends Component<{}, SurveyState> {
  state = {
    showAddQuestion: false,
    saveQuestion: '',
  };

  handleShowQuestion4444 = (): void => {
    this.setState({ showAddQuestion: true });
  };

  handleQuestion = (e: { target: { value: string } }): void => {
    console.log(e);
    this.setState({ saveQuestion: e.target.value });
  };

  render(): Element<'div'> {
    const { showAddQuestion, saveQuestion } = this.state;

    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Create Survey" key="1">
            {showAddQuestion ? (
              <AddQuestion onChange={this.handleQuestion} />
            ) : (
              <Button onClick={this.handleShowQuestion4444}>add question</Button>
            )}
          </TabPane>
          <TabPane tab="Preview Survey" key="2">
            {saveQuestion}
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default CreateSurvey;
