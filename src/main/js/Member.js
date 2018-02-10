var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');var Amount = '0';
var Amount = '0';
var JSONDATA = {};
var pushpage='';
import Home from './Home';


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
  constructor(){
    super()
    this.state = {memberclasses: []};
    this.state = {
      user:'',
      pass:'',
      cpass:'',
      name:'',
      tel:'',
      selectedVegetable: 'Onion'
  };
  
  }
  componentDidMount() {
		client({method: 'GET', path: '/api/memberclasses'}).done(response => {
      this.setState({memberclasses: response.entity._embedded.memberclasses});
     console.log(response);
		});
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

  showMenu() {
    this.props.showMenu();
  }
  getData(){
    ons.notification.alert('บันทึก')
  }
  handleUserChange(e) {
    this.setState({user: e.target.value});
  }
  handlePassChange(e) {
    this.setState({pass: e.target.value});
  }
  handleCPassChange(e) {
    this.setState({cpass: e.target.value});
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleTelChange(e) {
    this.setState({tel: e.target.value});
  }
  handleVegetablChange(memberclasses) {
    this.setState({selectedVegetable: memberclasses});
  }
  /////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row._class} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row.na_classme}`}
            checked={row._class === this.state.selectedVegetable}
            onChange={this.handleVegetablChange.bind(this, row._class)}
          />
        </label>
        <label htmlFor={`checkbox-${row._class}`} className='center'>
          {row._class}
        </label>
      </Ons.ListItem>
    )
  }
 
  /////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
    <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
      <div style={{ textAlign: 'center' }}>
          <Ons.List renderHeader={() => <Ons.ListHeader>Member</Ons.ListHeader>} />   
          <p>
            <Ons.Input
              value={this.state.user}
              onChange={this.handleUserChange.bind(this)}
              modifier='underbar'
              type='text'
              float
              placeholder='User' 
              />
          </p>
          <p>
            <Ons.Input
              value={this.state.pass}
              onChange={this.handlePassChange.bind(this)}
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
          <p>
            <Ons.Input
              value={this.state.cpass}
              onChange={this.handleCPassChange.bind(this)}
              modifier='underbar'
              type='password'
              float
              placeholder='ConfrimPassword' />
          </p>
          <p>
            <Ons.Input
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
              modifier='underbar'
              type='text'
              float
              placeholder='name-sername' />
          </p>
          <p>
            <Ons.Input
              value={this.state.tel}
              onChange={this.handleTelChange.bind(this)}
              modifier='underbar'
              type='text'
              float
              placeholder='tell' />
          </p>
          
          
          <Ons.List
         
         dataSource={this.state.memberclasses}
          renderHeader={() => <Ons.ListHeader>เลือกรายการภาพยนต์ที่มี</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
          />
          
          
          <p>
            &emsp;&emsp;
            <Ons.Button onClick={this.getData.bind(this)}>Register</Ons.Button>
          </p>
          
          </div>
      </Ons.Card>
      
    </Ons.Page>
    );
  }
}