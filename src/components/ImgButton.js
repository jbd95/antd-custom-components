import React from 'react';
import ResizeableComponent from './ResizeableComponent';
import { Button } from 'antd'
import Link from './Link';

class ImgButton extends ResizeableComponent {
    
    render() {
        return (
            (this.state.windowWidth > this.props.minWidth) ? ( 
            (this.props.icon) ? 
                (<Button shape='round' size='small' icon={this.props.icon} style={{paddingBottom: '5px'}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                    {this.props.text}
                </Button>)
            :
            (<Button shape='round' size='small' style={{paddingBottom: '5px'}} href={this.props.href} rel='noopener noreferrer' target="_blank" onClick={this.props.onClick}>
                <div className='flex-left'>
                    {this.props.children}
                    <img alt='' src={this.props.image} style={{width: '60%', height: '62%', maxWidth: '16px', maxHeight: '18px'}}/>
                    <div className='padding-right'/>
                    {this.props.text}
                </div>
            </Button>))
            :
            (<Link href={this.props.href} content={this.props.text}/>)
        )
    }
};

export default ImgButton;