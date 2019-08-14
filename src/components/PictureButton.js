import React from 'react';
import ResizeableComponent from './ResizeableComponent';
import { Button, Row } from 'antd'
import Link from './Link';
import { throwStatement } from '@babel/types';

class PictureButton extends ResizeableComponent {
    
    render() {
        return (
            (this.state.windowWidth > this.props.minWidth) ? ( 
            (this.props.icon) ? 
                (<Button shape='round' size={this.props.size} icon={this.props.icon} style={{paddingBottom: '5px', ...this.props.style}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                    {this.props.text}
                </Button>)
            :
            (<Button shape='round' size={this.props.size} style={{paddingBottom: '5px', ...this.props.style}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                <Row type='flex' align='middle'>
                    {this.props.children}
                    <img alt='' src={this.props.image} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px'}}/>
                    <div style={{paddingRight: '8px'}}/>
                    {this.props.text}
                </Row>
            </Button>))
            :
    (<Link href={this.props.href} content={this.props.text} onClick={this.props.onClick} style={this.props.style}/>)
        )
    }
};

export default PictureButton;