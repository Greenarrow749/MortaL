import React, { Component } from 'react'

export class content extends Component {
    state={
        'newsdata':[]
    }
    componentDidMount()
    {
        let url='http://newsapi.org/v2/top-headlines?country=in&apiKey=cb81e5e6274e41f8a4fd3797d52c55d3';
        fetch(url).then(response=> response.json()).then(data=>{
            // console.log(data)
            if(data.status=='ok')
            {
                this.setState({newsdata: data.articles})
                console.log(this.state.newsdata)
            }
            
        })
    }
    render() {
        
        return (
            <div className="main">
                <h1>Latest News</h1>
               {this.state.newsdata.map(val=>
                   
                       <div>
                           <img src={val.urlToImage} height={200} width={300}></img>
                       
                       
                           <h2>{val.title}</h2>
                           <h3>{val.author}</h3>
                                                      
                           <a href={val.url}><h4>Click for more</h4></a>
                           </div>
                       
                   
    
            
     )
    }
    </div>
        )
    }
}

export default content
