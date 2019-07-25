import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

export default class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://0.0.0.0:8000/api/${articleID}`)
          .then(res => {
              this.setState({
                  article: res.data
              });
              console.log(res.data);
          })
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}