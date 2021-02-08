import React from 'react';
import { Dropdown, Menu, Icon, Button, Row } from 'antd';
import { Link } from 'react-router-dom';

class DropdownMenu extends React.Component {

    menu = (
        <Menu>
            {(this.props.items) ? this.props.items.map((element, i) => (
                    <Menu.Item key={`element-${i}`}>
                        <Link to={element.href}>
                            <Row type='flex' align='middle'>
                                {(element.icon) ? <Icon type={element.icon} style={{paddingRight: '8px'}}/> : null}
                                {element.text}
                            </Row>
                        </Link>
                    </Menu.Item>
            )) : null}
        </Menu>
    )

    render() {
        return (
            <Dropdown overlay={this.menu} trigger={['hover']} className='menu-button primary-color'>
                <Button icon='menu' placement='bottomLeft'/>
            </Dropdown>
        )
    }
};

export default DropdownMenu;