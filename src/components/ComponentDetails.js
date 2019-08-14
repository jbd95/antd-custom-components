import React from 'react';
import { Typography, Icon, Row, Collapse } from 'antd';
import API from './API';

const { Title } = Typography;
const { Panel } = Collapse;

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
                <Collapse style={{margin: '16px'}}>
                    <Panel key='0' header={`${this.props.name} API`}>
                        <API data={this.props.data}/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
};

export default ComponentDetails;