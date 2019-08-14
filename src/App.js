import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Typography, Col, Row, Divider } from 'antd';
import IconPicker from './components/IconPicker';
import IconPickerAPI from './data/IconPickerAPI';
import DropdownMenu from './components/DropdownMenu';
import ComponentDetails from './components/ComponentDetails';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PictureButton from './components/PictureButton';
import logo from './images/logo192.png';
import PaypalCheckout from './components/PaypalCheckout';

const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className='layout'>
      <Content>
        <BrowserRouter>
            <ComponentDetails name='Icon Picker' description='Allow the user to choose an icon' location='/components/IconPicker.js' data={IconPickerAPI}>
              <IconPicker availableIcons={['windows', 'apple', 'android']} default='windows' placement='bottomLeft' size='default' onSelect={(icon) => console.log(`${icon} selected`)}/>
            </ComponentDetails>
            <ComponentDetails name='Dropdown Menu' description='Hoverable navigation menu' location='/components/DropdownMenu.js'>
              <DropdownMenu availableIcons={['windows', 'apple', 'android']} default='windows' placement='bottomLeft' 
                  size='default' onSelect={(icon) => console.log(`${icon} selected`)} items={[{icon: 'home', text: 'Home', href: '/home'},{icon: 'idcard', text: 'Contact', href: '/contact'}]}/>
            </ComponentDetails>
            <ComponentDetails name='Picture Button' description='Button with text and an icon or picture. Converts from button to link if the window size is less than the minWidth prop.' location='/components/PictureButton.js'>
                <PictureButton style={{margin: '4px'}}icon='github' size='small' minWidth={500} text='profile' href='https://github.com' onClick={() => console.log('clicked')}/>
                <div style={{maxWidth: '150px'}}> <Divider style={{margin: '2px'}}/> </div>
                <PictureButton style={{margin: '4px'}} image={logo} size='default' minWidth={500} text='React' href='https://reactjs.org/' onClick={() => console.log('clicked')}/>
            </ComponentDetails>
            <ComponentDetails name='Paypal Checkout' description='Adds a paypal checkout button. Needs a paypal client id and secret for real payment processing. Alerts the user with antd messages when the transaction is successful or canceled.' location='/components/PaypalCheckout.js'>
                <PaypalCheckout clientid='sb' currency='USD' amount='149.99' completeURL={null} verifyShippingAddres={null} style={{maxWidth: '100px'}}/>
            </ComponentDetails>
          </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
