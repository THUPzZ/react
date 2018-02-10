var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');var Amount = '0';
var Amount = '0';
var JSONDATA = {};
var pushpage='';


////////////////////////////////////////////////////////////////////////////////
export default class Member extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
  };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <Ons.BackButton> Back</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }
  handleClick() {
    ons.notification.alert('บันทึก');
   // this.props.navigator.pushPage({ component: Register , props: { key: 'Register' } });
  }
  handleClick1() {
    this.props.navigator.pushPage({ component: Register2, props: { key: 'Register2'} });
    
  }

  showMenu() {
    this.props.showMenu();
  }
  popPage() {
    this.props.navigator.popPage();
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
          <div style={{ textAlign: 'center' }}>
          <Ons.List renderHeader={() => <Ons.ListHeader>Member</Ons.ListHeader>} /> 
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
            <Ons.Button onClick={this.handleClick.bind(this)}>Sign in</Ons.Button>
            &emsp;&emsp;
            <Ons.Button onClick={this.handleClick1.bind(this)}>Register</Ons.Button>
          </p>
          
          </div>
       
        </Ons.Card>
      </Ons.Page>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
class Register2 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <Ons.BackButton> Back</Ons.BackButton>
          <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
          <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
  );
}

  showMenu() {
    this.props.showMenu();
  }
  getData(){
    
    ons.notification.alert('บันทึก')
  

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
          ชื่อภาพยนตร์ : 
        </p>

        <p>
           ประเภทหนัง : 
        </p>

        <p>
          ค่ายหนัง :
        </p>

       <p>
          วันที่เข้าฉาย : 
        </p>

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.getData.bind(this)}>บันทึก</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}