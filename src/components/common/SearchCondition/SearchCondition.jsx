import React, { Component } from 'react';
import { Divider } from 'antd';
import { sourceTypes, sensitiveLevels, timeRangeOptions, timeOrderOptions } from '../../../constant';
import './SearchCondition.scss';

class SearchCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeRange: timeRangeOptions[0].value,
      currentTimeOrder: timeOrderOptions[0].value,
      currentSensitive: sensitiveLevels[0].value,
      currentSource: sourceTypes[0].value,
    };
  }

  handleClick = (type, value) => {
    new Promise((resolve) => {
      switch (type) {
        case 'source':
          this.setState({ currentSource: value.value });
          break;
        case 'sensitive':
          this.setState({ currentSensitive: value.value });
          break;
        case 'timeRange':
          this.setState({ currentTimeRange: value.value });
          break;
        case 'timeOrder':
          this.setState({ currentTimeOrder: value.value });
          break;
        default:
          break;
      }
      resolve();
    }).then(() => {
      if (this.props.onChange) this.props.onChange(this.state);
    });
  };

  render() {
    const { currentTimeRange, currentTimeOrder, currentSensitive, currentSource } = this.state;
    return (
      <div id="conditionDiv">
        <div className="conditionWrapper">
          <span>时间范围：</span>
          <ul className="conditionList timeRange">
            {timeRangeOptions.map((item) => (
              <li
                key={item.value}
                className={currentTimeRange === item.value ? 'active' : ''}
                onClick={() => this.handleClick('timeRange', item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <Divider className="divider" />
        <div className="conditionWrapper">
          <div className="articleOrderWrapper">
            <span>文章排序：</span>
            <ul className="conditionList timeRange">
              {timeOrderOptions.map((item) => (
                <li
                  key={item.value}
                  className={currentTimeOrder === item.value ? 'active' : ''}
                  onClick={() => this.handleClick('timeOrder', item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Divider className="divider" />
        <div className="conditionWrapper">
          <span>敏感属性：</span>
          <ul className="conditionList timeRange">
            {sensitiveLevels.map((item) => (
              <li
                key={item.value}
                className={currentSensitive === item.value ? 'active' : ''}
                onClick={() => this.handleClick('sensitive', item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <Divider className="divider" />
        <div className="conditionWrapper">
          <span>来源类型：</span>
          <ul className="conditionList timeRange">
            {sourceTypes.map((item) => (
              <li
                key={item.value}
                className={currentSource === item.value ? 'active' : ''}
                onClick={() => this.handleClick('source', item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <Divider className="divider" />
      </div>
    );
  }
}

export default SearchCondition;
