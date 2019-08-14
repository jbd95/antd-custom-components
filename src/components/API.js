import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Property',
        dataIndex: 'property',
        key: 'property'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'Default',
        dataIndex: 'default',
        key: 'default'
    }
]

const API = (props) => (
    <Table columns={columns} pagination={{ position: 'none' }} dataSource={props.data}/>
)

export default API;

