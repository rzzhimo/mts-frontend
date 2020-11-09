import React, { Component } from 'react';
import { Card, Button } from 'antd';
import '../Home/Home.scss';
import moment from 'moment';
import payload from './payload';

const LIST_TYPE = {
  SENSITIVE: 'sensitive',
  LATEST: 'latest',
  NULL: null,
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensitiveInfo: [],
      latestInfo: [],
      currentType: LIST_TYPE.NULL,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        sensitiveInfo: payload.sensitiveInfo,
        latestInfo: payload.latestInfo,
      });
    }, 1000);
  };

  handleClose = (e) => {
    this.setState({
      currentType: LIST_TYPE.NULL,
      currentIndex: -1,
    });
  }

  handleDetail = (e, type, index) => {
    this.setState({
      currentType: type,
      currentIndex: index,
    }, () => console.log(this.state));
  }

  render() {
    const { sensitiveInfo, latestInfo, currentIndex, currentType } = this.state;
    // eslint-disable-next-line no-nested-ternary
    const currentInfo = currentType === LIST_TYPE.NULL ? null :
      currentType === LIST_TYPE.SENSITIVE ? sensitiveInfo[ currentIndex ] : latestInfo[ currentIndex ];
    return (
      <div className="home-wrapper">
        <div className="home-column">
          <div className="home-title"> 舆情概述 </div>
          <Card className="home-list">
            <span className="list-title"> 敏感信息列表 </span>
            <hr />
            <ul>
              {sensitiveInfo.map((info, index) => (
                <li key={`${info.title}_${index}`}>
                  <div className="list-item">
                    <div className="item-tag" />
                    <span className="item-title" onClick={e => this.handleDetail(e, LIST_TYPE.SENSITIVE, index)}>{info.title}</span>
                    <span className="item-source">{`[${info.source.label}]`}</span>
                    <span className="item-timestamp">{info.timestamp.format('LTS')}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="home-list">
            <span className="list-title"> 最新舆情 </span>
            <hr />
            <ul>
              {latestInfo.map((info, index) => (
                <li key={`${info.title}_${index}`}>
                  <div className="list-item">
                    <div className="item-tag" />
                    <span className="item-title" onClick={e => this.handleDetail(e, LIST_TYPE.LATEST, index)}>{info.title}</span>
                    <span className="item-source">{`[${info.source.label}]`}</span>
                    <span className="item-timestamp">{info.timestamp.format('LTS')}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <div
            style={ { visibility: currentType === LIST_TYPE.NULL ? 'hidden' : 'visible' } }
            className="current-mask"
          >
            <Card className="current-item">
              <Button>collect</Button>
              <Button>material</Button>
              <Button>mail</Button>
              <Button onClick={this.handleClose} >close</Button>
              <div className="item-title">{currentInfo?.title}</div>
              <div className="item-abstract">
                <div className="abstract-attribute">
                  <label>来源：</label>
                  <span>{currentInfo?.source.label}</span>
                </div>
                <div className="abstract-attribute">
                  <label>链接：</label>
                  <a>{currentInfo?.link}</a>
                </div>
                <div className="abstract-attribute">
                  <label>属性：</label>
                  <span style={{ color: currentInfo?.attribute?.color }}>
                    {currentInfo?.attribute.label}
                  </span>
                </div>
                <div className="abstract-attribute">
                  <label>时间：</label>
                  <span>{currentInfo?.timestamp.format('LTS')}</span>
                </div>
              </div>
              <div className="item-content">{currentInfo?.content}</div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
