import React from 'react';
import { Typography, Icon, Row } from 'antd';

const { Title } = Typography;

class ComponentDetails extends React.Component {
    render() {
        console.log(this.props.children)
        return (
            <div style={{margin: '32px'}}>
                <Title level={3}> {this.props.name} </Title>
                {this.props.children}
                <Row type='flex' align='middle' style={{marginTop: '8px'}}>
                    <Icon type='info-circle' style={{paddingRight: '8px'}}/>
                    {this.props.description}
                </Row>
                <Row type='flex' align='middle' style={{marginTop: '8px'}}>
                    <Icon type='file' style={{paddingRight: '8px'}}/>
                    {this.props.location}
                </Row>
            </div>
        )
    }
};

export default ComponentDetails;