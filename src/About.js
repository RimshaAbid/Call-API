import React,{Component} from "react";

class About extends Component{

    constructor()
    {
        super();
        this.state={
            data:"Ali"
        }
    }

     apple()
    {
        this.setState({data:"Tuba"})
        }
    render()
        {
          return (
              <div>
                <h2><b>State with class</b></h2>
                <h1> {this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update data</button>
              </div>  
            )
        }
        
    
}
 
export default About;