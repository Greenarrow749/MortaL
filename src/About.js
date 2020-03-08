import React, { Component } from 'react'

export class About extends Component {
    state={nData:[]}
    newsData=()=>
    {
        console.log('hello')
        let url="http://newsapi.org/v2/top-headlines?country=in&apiKey=cb81e5e6274e41f8a4fd3797d52c55d3";
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data)
                if(data.status=="ok")
                {
            this.setState({nData:data.articles});
            console.log(this.state.nData)
                }
            })
    }
    render() {
        return (
            <div>
               <h1>About Page</h1> 
        <input type="button" value="Fetch News" onClick={this.newsData}/><br/>
        {this.state.nData.length>0?
        this.state.nData.map(news=>
          <div>
            <h3>{news.title}</h3>
        <p>
            <img src={news.urlToImage} width={300} height="150"/><br/>
            {news.description}</p>
        </div>
            ):
            <p>No News </p>}

            </div>
        )
    }
}

export default About
