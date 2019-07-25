import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';

export default class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://0.0.0.0:8000/api/')
          .then(res => {
              this.setState({
                  articles: res.data
              });
          });
    }

    render() {
        return (
            <Articles data={this.state.articles}/>
        )
    }
}