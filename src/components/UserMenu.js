import React from 'react';
import { Avatar, Popover, Button, Menu, Row, Icon } from 'antd';

class UserMenu extends React.Component {

    renderPopover = () => (
        <div>
            <Menu>
                <Menu.Item> 
                <   Row type='flex' align='middle'>
                        <Icon type='idcard'/>
                        Profile
                    </Row>
                    <Row type='flex' align='middle'>
                        <Icon type='github'/>
                        First
                    </Row>
                </Menu.Item>
                    
            </Menu>
            <Button style={{width: '100%'}} type='primary' href={this.props.signOutLink} onClick={this.props.onSignOut}> Sign out </Button>
            </div>
    )

    render() {
        return (
            <Popover placement={this.props.placement} content={this.renderPopover()} trigger={this.props.trigger} title={this.props.title}>
                <Avatar icon={this.props.icon} src={this.props.src}> {this.props.text} </Avatar>
            </Popover>
        )
    }
};

export default UserMenu;