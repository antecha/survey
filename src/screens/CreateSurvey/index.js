import React, { Component } from 'react';
import { Tabs, Input, Button } from 'antd';

const { TabPane } = Tabs;

class CreateSurvey extends Component {
  state = {
    showAddQuestion: false,
    saveQuestion: '',
  };

  handleShowQuestion4444 = () => {
    this.setState({ showAddQuestion: true });
  };

  handleQuestion = e => {
    console.log(e);
    this.setState({ saveQuestion: e.target.value });
  };

  render() {
    const { showAddQuestion, saveQuestion } = this.state;

    console.log(showAddQuestion, saveQuestion);
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Create Survey" key="1">
            {showAddQuestion ? (
              <Input onChange={this.handleQuestion} />
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
