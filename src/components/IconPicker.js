import React from 'react';
import { Button, Icon, Popover, Tooltip, Row, Col } from 'antd';


class IconPicker extends React.Component {
    
    state = {
        selected: this.props.default
    }

    iconSelected = (type) => {
        this.setState({
            selected: type
        })
        if(this.props.selected)
        {
            this.props.selected(type);
        }
    }

    getAllIcons = () => (
        <Row type='flex' align='middle' justify='center' style={{overflow: 'wrap', textAlign: 'center', maxWidth: this.props.maxWidth}}>
            <Col style={{width: '100%'}}>
                {(this.props.availableIcons) ? this.props.availableIcons.map((current, i) => (
                    <Tooltip placement='top' title={current} key={current}>
                        <Button icon={current} style={{margin: '5px'}} onClick={() => this.iconSelected(current)}/>
                    </Tooltip>
                ))
                : 
                <div> No Icons Available </div> }
            </Col>
        </Row>
    )

    renderTitle = () => (
        <Row type='flex' justify='center'>
            Choose an Icon
        </Row>
    )
    
    render() {
        return (
            <Popover placement={this.props.placement} title={this.renderTitle()} content={this.getAllIcons()} trigger='click'>
                <Button size='large'>
                    <div>
                        <div>
                            <Icon type={this.state.selected}/>
                        </div>
                    </div>
                </Button>
            </Popover>
        )
    }
};

export default IconPicker;