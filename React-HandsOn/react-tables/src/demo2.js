import React,{Component} from 'react'
import ReactTable from 'react-table'
 class Demo1 extends React.Component
{
    render(){
        const data=[
            {name:'Rohan',age:12},
            {name:'Jeson',age:12},
            {name:'Arjun',age:12},
            {name:'Bheem',age:12},
            {name:'Nakul',age:12},
        ];
        const columns=[
            {Header:'Name',accessor:'name'},
            {Header:'Age',accessor:'age'}
        ];
        return(
            <div>
                <ReactTable 
                data={data}
                columns={columns}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6]}
                />
            </div>
        )
    }
}
export default Demo1