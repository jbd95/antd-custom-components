import React from 'react';
import { message } from 'antd';

//server side code at: https://developer.paypal.com/docs/checkout/integrate/#6-verify-the-transaction


class PaypalCheckout extends React.Component {
    
    static defaultProps = {
        clientid: 'sb', //client id given in paypal dashboard
        currency: 'USD', //type of currency to use in the transaction
        amount: '1.00', //amount of currency to be paid
        completeURL: null, //url to post a transaction-completed message for storing database records
        verifyShippingAddress: (data, actions) => {}, //function that authenticates the shipping address
        style: {} //style of paypal container
    }
    
    state = {
        script: null
    }

    componentDidMount() {
        this.importScript()
            .then((script) => this.setState({script}))
            .catch((error) => console.log(error))
    }

    importScript =  () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.paypal.com/sdk/js?client-id=${this.props.clientid}&currency=${this.props.currency}`;
            script.addEventListener('load', () => resolve(script));
            script.addEventListener('error', () => reject('error loading script'));
            script.addEventListener('abort', () => reject('script loading aborted'));
            script.id='paypal-checkout-script';
            document.body.appendChild(script);
        }) 
    }

    showButtons = (paypal) => {
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: `${this.props.amount}`
                        }
                    }]
                })
            },

            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    message.success('Transaction Successful')
                    console.log(data);
                    
                    if(this.props.completeURL)
                    {
                        return fetch(this.props.completeURL, {
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'   
                            },
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        })
                    }
                })
            },
            onCancel: (data) => {
                message.error('Transaction Cancelled')
            },
            onShippingChange: (data, actions) => {
                if(!this.props.verifyShippingAddress)
                    return actions.resolve();

                let {error, patch} = this.props.verifyShippingAddress(data, actions);

                if(patch)
                {
                    return actions.order.patch(patch);
                }

                if(error)
                {
                    return actions.reject();
                }
                else
                {
                    return actions.resolve();
                }
            }
        }).render('#paypal-checkout-container')
    }

    render() {
        if(this.state.script)
        {
            this.showButtons(window.paypal);
        }
        return (
            <div style={this.props.style} id='paypal-checkout-container'/>
        )
    }
};

export default PaypalCheckout;