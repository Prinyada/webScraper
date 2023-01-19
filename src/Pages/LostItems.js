import StartFirebase from '../realtimeData/firebase-config';
import React from 'react';
import {ref, onValue} from 'firebase/database';
import {Table} from 'react-bootstrap';

const db = StartFirebase();

export default class LostItems extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db,'scraper');

        // console.log("this dbRef",dbRef);

        onValue(dbRef, (snapshot)=>{
            // console.log("this snapshot->",snapshot);
            let records = [];
            snapshot.forEach(childSnapshot=>{
                // console.log(childSnapshot);
                let keyName = childSnapshot.key;
                console.log('====================================');
                console.log("this keyName -> ",keyName);
                console.log('====================================');
                let dt = childSnapshot.val();
                records.push({"key": keyName, "dt": dt})
            });
            console.log('====================================');
            console.log("this records -> ",records);
            console.log('====================================');
            this.setState({data: records});
            console.log('====================================');
            console.log("this data -> ",this.state.data);
            console.log('====================================');
        });
    }

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                        <tr>
                            {/* <td>{this.}</td> */}
                        </tr>
                </tbody>
            </Table>
        )
    }
}