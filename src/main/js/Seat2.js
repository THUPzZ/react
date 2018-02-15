var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');var Amount = '0';
var Amount = '0';
var JSONDATA = {};
var pushpage='';
import Home from './Home';
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////หน้าแรก//หน้าแรก//หน้าแรก//หน้าแรก
export default class Seat2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'ระบบเลือกที่นั่งดูภาพยนตร์ ',
      nextTitle: null
    };
  }
  

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className="center">{this.state.title}</div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    this.props.navigator.pushPage({ component: Page0, props: { key: 'Page0' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>


        <div style={{ textAlign: 'center' }}>&emsp;&emsp;&emsp;&emsp;
        <img src={"https://www.picz.in.th/images/2018/01/26/60d8371ee9e77553f.jpg"} alt="Onsen UI"
        style={{ width: '40%' }} />
        <br />
        </div>
        <div style={{ textAlign: 'center' }}>&emsp;&emsp;&emsp;&emsp;
        <Ons.Button onClick={this.pushPage.bind(this)}>
          Wellcom
          </Ons.Button>
        </div>

      </Ons.Page>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////หน้าสอง//หน้าสอง//หน้าสอง//หน้าสอง//หน้/
var Na;
var Ti;
var Ta;
var num=[1,2,3,4,5,6,7,8,9];
var nums;
class Page0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theshows: []};
    this.state = {
      selectedVegetable: 'ยังไม่เลือก',
    t:'',
    n:'',
    r:'',
  nu:''};
  }
  componentDidMount() {
		client({method: 'GET', path: '/api/theshows'}).done(response => {
      this.setState({theshows: response.entity._embedded.theshows});
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
  handleVegetablChange(e1,e2,e3,e4) {
    this.setState({t: e1});
    this.setState({n: e2});
    this.setState({r: e3});
    this.setState({nu: e4});
  }
  popPage() {
    this.props.navigator.popPage();
  }
  pushPage() {
    nums=this.state.nu;
    Ta=this.state.r;
    Ti=this.state.t;
    Na=this.state.n;
    this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row.room} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row.room}`}
            checked={row.room === this.state.r}
            onChange={this.handleVegetablChange.bind(this,row.time,row.name,row.room,num[c])}
          />
        </label>
        <label htmlFor={`checkbox-${row.room}`} className='center'>
         เรื่อง:&emsp;{row.name} &emsp; &emsp;รอบฉาย:&emsp;{row.time} &emsp; &emsp;โรงที่ฉาย:&emsp;{row.room}<br/>
         วันที่ฉาย:&emsp;{row.date}
         

        </label>
      </Ons.ListItem>
    )
  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
           <Ons.Card>
      <div style={{ textAlign: 'center' }}>
            
        <Ons.List
         dataSource={this.state.theshows}
          renderHeader={() => <Ons.ListHeader>เลือกรายการเพื่อจองที่นั่ง</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
          /> 
          <p>
            &emsp;&emsp;
          <Ons.Button onClick={this.pushPage.bind(this)}>pushpage</Ons.Button>
          </p>
        
          </div>
      </Ons.Card>
      </Ons.Page>
    );
  }
}
var U;
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////หน้าสาม//หน้าสาม//หน้าสาม//หน้าสาม//หน้าสาม//
var s ;
var memberid;
class Page1 extends React.Component {
  constructor(){
    super()
    this.state = {seats: []};
    this.state = {
      user:'',
      selectedVegetable: 'Onion', 
      selectedVegetable1: 'Onion'
      
  };
  
  }
  componentDidMount() {
		client({method: 'GET', path: '/api/seats'}).done(response => {
      this.setState({seats: response.entity._embedded.seats});
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

pushpage() {
  s=this.state.selectedVegetable;
  memberid=this.state.user;
 /* 
  fetch('http://localhost:8080/api/employees/search/findOne?'+
  'employeeID=' + this.state.user)
   .then((response)=> response.json())
   .then((responseJson) => {
        console.log(responseJson);
        U=responseJson.name;
        this.props.navigator.pushPage({ component: Page2, props: { key: 'Page2' + this.props.navigator.routes.length, title: this.state.nexTitle } });
        })
      .catch((error) => {
       ons.notification.alert('error');
    });
    */
    this.props.navigator.pushPage({ component: Page2, props: { key: 'Page2' + this.props.navigator.routes.length, title: this.state.nexTitle } });
        
  }

  handleVegetablChange(seats) {
    this.setState({selectedVegetable: seats});
  }
  handleUsernameChange(e) {
    this.setState({user: e.target.value});
  }
  renderCheckboxRow(row,c) {
    
    if(row.status == '0'){
      
    return (
      
      <Ons.ListItem key={row.labal} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row.labal}`}
            checked={row.labal === this.state.selectedVegetable}
            onChange={this.handleVegetablChange.bind(this,row.labal)}
          />
        </label>
        <label htmlFor={`checkbox-${row.labal}`} className='center'> 
          {row.labal}<br/>
        
        </label>
      </Ons.ListItem>
      
      
    ) 
  }
  }
  render() {
    return (
    <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
      <div style={{ textAlign: 'center' }}>    
      <img src={" http://student.sut.ac.th/b5711512/img/00.png"} alt="Onsen UI"
        style={{ width: '70%' }} />
     
         
         
          <Ons.List   
           dataSource={this.state.seats}
          renderHeader={() => <Ons.ListHeader>เลือกที่นั่งที่ยังว่าง</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
          />
          <p>
          <Ons.Input
            value={this.state.user}
            onChange={this.handleUsernameChange.bind(this)}
            modifier='underbar'
            float
            placeholder='ป้อน IDพนักงานเพื่อยืนยันรายการ' />
        </p>
          
      
          <p>
            &emsp;&emsp;
          <Ons.Button onClick={this.pushpage.bind(this)}>ถัดไป</Ons.Button>
          </p>
        
          </div>
      </Ons.Card>
      
    </Ons.Page>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Page2 extends React.Component {

constructor(){
    super()
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
  
handleClick() {
 ons.notification.alert(memberid+nums+s+Na+Ta)
  client({method: 'POST', path:"/employee/"+memberid+"/theshow/"+nums+"/seat/"+s+"/moviename/"+Na+"/room/"+Ta}).done(  
    ons.notification.alert(nums)
  );
  client({method: 'POST', path:"/seatId/"+s+"/labal/"+s+"/status/"+"1"}).done(  
   //ons.notification.alert('Success')
  );
  
  }
render() {
    return (
    <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
      <p>
            ID พนักงาน:&emsp;{memberid} 
      </p>
      <p>
            เรื่อง : &emsp;{Na}
      </p>
      <p>
            ที่นั่ง :&emsp;{s}
      </p>
      <p>
            โรงที่:&emsp;{Ta}
      </p>
      <p>
            รอบฉาย:&emsp;{Ti} 
      </p>


        <div style={{ textAlign: 'center',marginRight: '20', }}>
          <Ons.Button onClick={this.handleClick.bind(this)}>
            บันทึกข้อมูลการทำรายการ
          </Ons.Button>
        </div>

      </Ons.Card>
    </Ons.Page>
    );
  }
}