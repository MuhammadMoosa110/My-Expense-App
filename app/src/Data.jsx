import React, { Component } from 'react';
import Axios from 'axios';
import style from '../src/App.css'

class MyData extends React.Component {

    state = {
        Exp_Name: "",
        Amount: 0,
        Discount: 0,
        PN: "",
        Receiver: "",
        Err: '-',
        Arr1: [
            { Exp_Name:"Exp", Amount: 0, Discount: 0, Payer_Name: "Payer", Receiver: "Receiver" }
        ],
        Arr2: [
            {   }
        ]
    }
    SubmitData = () => {
        let str1 = "insert into salary.`exp` values ('" + this.state.Exp_Name + "'," + this.state.Amount + "," + this.state.Discount + ",'" + this.state.PN + "','" + this.state.Receiver + "') "
        Axios.post("http://localhost:3306/api/NonQuery", { mySQL: str1 })
    }

    ReadData = () => {
        let str1 = "SELECT * FROM salary.`exp` "
        Axios.get("http://localhost:3306/api/DataQuery", {
            params: { sql: str1 }
        }).then(
            (res) => {
                this.setState({ Arr1: res.data })
            }
        )
    }

    DelData = () => {
        let str1 = "delete * FROM salary.`exp` "
        Axios.get("http://localhost:3306/api/DataQuery", 
        )
    }

    UpdateData = (e) => {
        // let str1 = "Update salary.`exp` set Exp_Name=  '" + this.state.Exp_Name + "', Amount="+this.state.Amount+",Discount='"+this.state.Discount +"'"
        let str1 = "SELECT * FROM salary.`exp` where Exp_Name='"+e.target.Exp_Name+"'"
        Axios.get("http://localhost:3306/api/DataQuery", {
            params: { sql: str1 }
        }).then(
            (res) => {
                this.setState({ Arr2: res.data })
                // alert(this.state.Arr2[0].Exp_Name)
                document.getElementById('t1').value = this.state.Arr2[0]
            }
        ) 
    }

    render() {
        return <div>


            <div >
                </div>
              
            <div className='mainBox' style={{
                height: '80vh',
                width: "50vw",
                display: 'flex',
                boxShadow: "4px 4px 10px #99f",
                flexDirection: 'column',
                alignItems: 'center',
                margin: "3% auto",
                borderRadius: "12px",
                alignItems: "center",
                justifyContent: "center",
                background: "rgb(129,164,176)",
                background: "radial-gradient(circle, rgba(129,164,176,1) 18%, rgba(214,205,251,1) 100%)"
            }}>
                <input id='eName' onChange={(e) => { this.setState({ Exp_Name: (e.target.value) }) }}
                    style={{
                        borderRadius: '10px',
                        padding: '10px',
                        height: '45px',
                        width: '330px',
                        margin: '10px',
                        fontSize: '30px'
                    }} placeholder='EXPENSE NAME' type='Name'></input>
                <input onChange={(e) => { this.setState({ Amount: parseInt(e.target.value - this.state.Discount) }) }} style={{
                    borderRadius: '10px',
                    padding: '10px',
                    height: '45px',
                    width: '330px',
                     margin: '10px',
                    fontSize: '30px'
                }}
                    placeholder='AMOUNT' type='Number'></input>
                <input onChange={(e) => { this.setState({ Discount: parseInt(e.target.value) }) }} style={{
                    borderRadius: '10px',
                    padding: '10px',
                    height: '45px',
                    width: '330px',
                    margin: '10px',
                    fontSize: '30px'
                }} placeholder='DISCOUNT' type='number' ></input>
                <input onChange={(e) => { this.setState({ PN: (e.target.value) }) }} style={{
                    borderRadius: '10px',
                    padding: '10px',
                    height: '45px',
                    width: '330px',
                    margin: '10px',
                    fontSize: '30px'
                }} placeholder='Sender Name' ></input>
                <input onChange={(e) => { this.setState({ Receiver: (e.target.value) }) }} style={{
                    borderRadius: '10px',
                    padding: '10px',
                    height: '45px',
                    width: '330px',
                    margin: '10px',
                    fontSize: '30px'
                }} placeholder='RECEIVER' ></input>


                <div style={{ height: '50px', display: 'flex', justifyContent: 'center', fontSize: '40px' }}>
                    <button onClick={this.SubmitData } style={{ borderRadius: '10px', height: '35px', width: '100px', margin: '10px' }} >Insert</button>
                    <button onClick={this.UpdateData} style={{ borderRadius: '10px', height: '35px', width: '100px', margin: '10px' }} >Update</button>
                    <button onClick={this.DelData} style={{ borderRadius: '10px', height: '35px', width: '100px', margin: '10px' }} >Delete</button>


                    <button onClick={this.ReadData} style={{ borderRadius: '10px', height: '35px', width: '100px', margin: '10px' }} >List</button>

                    <div>
                    

                    </div>
                </div>
                
                <h1>{this.state.Exp_Name}<br />   </h1>
                <br/>
                <h4>{this.state.PN} ----- {this.state.Receiver} <br/>Rs/-{this.state.Amount - this.state.Discount}</h4>
            </div>
            
            
             
            { 
                this.state.Arr1.map(
                    (val) =>
                        <div style={{
                            background:"ice",
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"space-evenly",
                            border:"1px solid white"
                        }}
                        className='List'
                        
                        >
                            
                            <div style={{border:"1px 2px solid white",width:"15%"}}> Expense <h2> {val.Exp_Name}</h2></div>
                            <div style={{border:"1px 2px solid white",width:"15%"}}> Amount<h2> {val.Amount}</h2></div>
                            <div style={{border:"1px 2px solid white",width:"15%"}}>    Discount<h2> {val.Discount}</h2></div>
                            <div style={{border:"1px 2pxsolid white",width:"15%"}}>Payer<h2> {val.Payer_Name}</h2></div>
                            <div style={{border:"1px 2pxsolid white",width:"15%"}}>Receiver<h2> {val.Receiver}</h2></div>
                            
                        </div>
                        
                )
            }
            {this.state.Arr1.filter((item)=>{})}
             
            

        </div>;
    }
}


export default MyData;