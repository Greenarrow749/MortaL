import React, { Component } from 'react'

export class Discussion extends Component {
    state={name:'',age:'',list:[],status:false}
    getName=(event)=>
    {
        this.setState({name:event.target.value})
        // console.log(this.state.name)
    }
    getAge=(event)=>
    {
        this.setState({age:event.target.value})
        // console.log(this.state.age)
    }
    list1=[];
    addList=()=>
    {
        let data={name:this.state.name,age:this.state.age}
        this.list1.push(data);
        this.setState({list:this.list1});
        // console.log(this.state.list)
        this.state.name="";
        this.state.age="";
    }
    removeList=(ind)=>
    {
        this.list1.splice(ind,1);
        this.setState({list:this.list1})
        // console.log(this.state.list)

    }
    updateList=(ind)=>
    {  
        //  alert("hi")
        this.setState({name:this.list1[ind].name});
        this.setState({age:this.list1[ind].age});
        this.setState({status:true});
        // console.log(this.state.list)
    }

    
    render() {
        return (
            <div>
                <h1>Dont discuss here</h1>
                <form>
                    Name:<input type="text" onChange={this.getName} value={this.state.name}></input><br/>
                    Age:<input type="text" onChange={this.getAge} value={this.state.age}></input><br/>
                    {this.state.status?
                    <input type="button" value="Update" onClick={this.updateList}></input>:
                    <input type="button" value="Add" onClick={this.addList}></input>}
                </form>
                {this.state.list.length>0?
                <table border={2}>
                    <tr>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete?</th>
                        <th>Update?</th>
                    </tr>
                 
                {this.state.list.map((result,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{result.name}</td>
                    <td>{result.age}</td>
                    <td><input type="button" value="Delete" onClick={()=>this.removeList(index)}></input></td>
                    <td><input type="button" value="Update" onClick={()=>this.updateList(index)}></input></td>
                </tr>)}
             </table>:null     
            }
            </div>
        )
    }
}

export default Discussion
