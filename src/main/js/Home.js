var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');var Amount = '0';
var Amount = '0';
//var JSONDATA = {};
var employeeID='';
var pushpage='';
import Page0 from './Page0';
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
import Menu5 from './Menu5';
import Menu6 from './Menu6';
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////หน้าlogin Employee /// อย่าพึ่งยุ่งกะมัน ///
class SignIn extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            username:'',
            password:''
        };
        this.pushPage = this.pushPage.bind(this);
      }
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className= 'center' >EmployeeSignIn </div>
        <Ons.BackButton> กลับ </Ons.BackButton>
      </Ons.Toolbar>
    );
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  showMenu() {
    this.props.showMenu();
  }
  pushPage() {


fetch('http://localhost:8080/api/employees/search/findByEmployeeIDAndPassword?'+
  'employeeID=' + this.state.username + '&password=' + this.state.password)
  ///////
   .then((response)=> response.json())
   .then((responseJson) => {
    console.log(responseJson);
   
   // employeeID=responseJson.nameEmployee;
    //ons.notification.alert(employeeID);
      //employeeID=this.state.username;
      //  ons.notification.alert({JSON.stringify(responseJson, null, 2) })
       
        if(pushpage=='1'){
            this.props.navigator.pushPage({ component: Page0 , props: { key: 'Page0' } });
        }else if(pushpage=='2'){
            this.props.navigator.pushPage({ component: Menu2 , props: { key: 'Menu2' } });
        }else if(pushpage=='3'){
            this.props.navigator.pushPage({ component: Menu3 , props: { key: 'Menu3' } });
        }else if(pushpage=='4'){
            this.props.navigator.pushPage({ component: Menu4 , props: { key: 'Menu4' } });
        }else if(pushpage=='5'){
            this.props.navigator.pushPage({ component: Menu5 , props: { key: 'Menu5' } });
        }else if(pushpage=='6'){
            this.props.navigator.pushPage({ component: Menu6 , props: { key: 'Menu6' } });
        }
   })
   .catch((error) => {
       ons.notification.alert('ไอดีหรือรหัสผิด');
   });

}
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <center>
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              modifier='underbar'
              float
              placeholder='Id' 
              />
          </p>
          
          <p>
            <Ons.Input
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
         
          <p>
          <Ons.Button onClick={this.pushPage.bind(this)}>
          SignIn
        </Ons.Button>
        
          </p>

          </center>
      </Ons.Page>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////
export default class Home extends React.Component {
constructor(props) {
        super(props);
        //this.pushPage = this.pushPage.bind(this);
}
renderToolbar() {
    return (
      <Ons.Toolbar ><div className='center'   >Cinema</div></Ons.Toolbar>
		 );
}
showMenu() {
    this.props.showMenu();
}
///////////////////////ของใครไม่มีล็อคอินให้เอาชื่อคลาสของตัวเองมาเปลี่ยนแทน 'SignIn' ใน pushPageX ** Xแทนตัวเลขที่ตรงกับระบบตัวเอง
pushPage() {

        pushpage='1' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
pushPage2() {
        pushpage='2' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
pushPage3() {
        pushpage='3' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
pushPage4() {
        pushpage='4' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
pushPage5() {
        pushpage='5' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
pushPage6() {
        pushpage='6' ;
        this.props.navigator.pushPage({ component: SignIn , props: { key: 'SignIn' } });
}
render(){
return (
    <Ons.Page renderToolbar={this.renderToolbar}>
        <section style={{margin: '16px'}}>
            <Ons.Button onClick={this.pushPage.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบจัดรอบฉายหนัง</Ons.Button>
            <Ons.Button onClick={this.pushPage2.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบสถานะภาพยนตร์เข้า</Ons.Button>
            <Ons.Button onClick={this.pushPage3.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบจักซื้อภาพบนต์</Ons.Button>
            <Ons.Button onClick={this.pushPage4.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบซื้อขายอาหารเครื่องดื่ม</Ons.Button>
            <Ons.Button onClick={this.pushPage5.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบโปรโมชั่น</Ons.Button>
            <Ons.Button onClick={this.pushPage6.bind(this)}  style={{margin: '6px'}} modifier='large'  >ระบบเเลือกที่นั่งดูภาพยนตร์</Ons.Button>
        </section>
      </Ons.Page>
    );
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
