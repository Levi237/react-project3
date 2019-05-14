// import React from 'react';
// import '../index.css'

// const Alerts = (props) => {

//     const alertList = props.closureList.map((e, i) => {

//             return (
//                 <section className="alertList" key={i}>
//                     <strong>{e.fullName}<br /></strong>{e.title} <br /><p>{e.description}</p>
//                     {/* {
//                         user.logged ? <button>BUTTON</button> : <h1>hi</h1>
//                     } */}
//                 </section>
//             )  
//     })

//     return(
//         <React.Fragment>
//           <h1>Current Park Closures</h1>
//                 {alertList}
//         </React.Fragment>
//     )
// }

// export default Alerts;

import React, { Component } from 'react';
import '../index.css'

class Alerts extends Component {
    doAddAlert = async (id, name) => {
        const { currentUser } = this.props
        const addAlert = await fetch('/users', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({id, name}), //userList
            headers: {
                'Content-type': 'application/json'
            }
            
        })
    }

    clickTest = (e) => {
        console.log(e.currentTarget.name, 'click')
    }
    // handleAddShareholder = () => {
    //     this.setState({
    //       shareholders: this.state.shareholders.concat([{ name: "" }])
    //     });
    //   };
//     <button
//     type="button"
//     onClick={this.handleAddShareholder}
//     className="small"
//   >
//     Add Shareholder
//   </button>
//   <button>Incorporate</button>
// </form>
    render(){
        const alertList = this.props.closureList.map((e, i) => {
                return (
                    
                    <section className="alertList" key={i}>
                    <form>
                        <strong>{e.fullName}<br /></strong>{e.title} <br /><p>{e.description}</p>
                        {
                        this.props.currentUser && <button conclick={() => this.doAddAlert(this.props.userList.id, this.props.userList.name)}>Add to List</button>
                        // <button conclick={() => this.doAddAlert(this.props.userList.id, this.props.userList.name)}>Add to List</button>
                        }
                    </form>
                    </section>
                    
                )  
        })

        // <p>Click the button to add a new element to the array.</p>
        // <button onclick="myFunction()">Click</button>
        // <p id="myId"></p>
        
        // <script>
        //     var a = ["India", "Pakisthan", "Bangladesh", "China"];
        //     document.getElementById("myId").innerHTML = a;
        
        //     function myFunction() {
        //         a.push("SriLanka");
        //         document.getElementById("myId").innerHTML = a;
        //     }
        // </script>
        return(
            <React.Fragment>
            <h1>Current Park Closures</h1>
                    {alertList}
            </React.Fragment>
        )
    }
}

export default Alerts;