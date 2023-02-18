import React from 'react'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo: {
              name: 'Dummy name',
              location: 'Dummy location'
            }
          }
        console.log('child constructor', this.props.name);
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/rahuljha316')
        const json = await data.json()
        this.setState({
          userInfo: json
        })
        this.timer = setInterval(()=>{
            console.log('hello');
        },1000)

       

        console.log('child component did mount');
    }

    componentDidUpdate (prevProps,prevState) {
        if(this.state.count !== prevState.count){

        }
        console.log('component did update');
    }
    componentWillUnmount () {
        clearInterval(this.timer)
        console.log('component will unmount');
    }

    render(){
        console.log('child render', this.props.name);
        return(
            <div>
                <h1>CLass Component</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Loccation : {this.state?.userInfo?.location}</h3>
                {/* <h2>Count: {this.state.count}</h2>
                <h2>Count2: {this.state.count2}</h2>
                <button 
                onClick={()=> this.setState({
                    count: 1,
                    // count2:2,
                })}
                >Count</button> */}
            </div>
        )
    }
}

export default Profile;