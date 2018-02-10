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
//หน้าว่างระบบที่6////หน้าว่างระบบที่6////หน้าว่างระบบที่6////หน้าว่างระบบที่6////หน้าว่างระบบที่6//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
var num= [1,2,3,4,5,6,7,8,9];
var camp;
var name;
var img;
var URL = ["http://student.sut.ac.th/b5711512/img/thumb_2030.jpg",
"http://student.sut.ac.th/b5711512/img/thumb_1429.jpg"];
////////////////////////////////////////////////////////////////////////////////
class Page1 extends React.Component {
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
    client({method: 'GET', path:"/room/"+room+"/name/"+name+"/time/"+time+"/date/"+date+"/employee/"+Emplo+"/comingSoon/"+Mid}).done(
    ons.notification.alert('บันทึก')
    );

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
        โรงฉายภาพยนต์ : {room}
        </p>
        <p>
          ภาพยนต์ : {name}
        </p>

        <p>
          รอบฉาย :{time}
        </p>



        <p>
          วันที่จัดฉาย : {date}
        </p>

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.getData.bind(this)}>ยืนยัน</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}
var name;
var Mid;
////////////////////////////////////////////////////////////////////////////////
class Page extends React.Component {
constructor(props) {
        super(props);
        this.state = {comingSoons: []};
        this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',
      selectedBanks: 'No'
    }
}
componentDidMount() {
		client({method: 'GET', path: '/api/comingSoons'}).done(response => {
      this.setState({comingSoons: response.entity._embedded.comingSoons});
     console.log(response);
		});
}
 handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }
  pushPage(event,event1) {
//      ons.notification.alert('บันทึก');
  Mid=event1;
   name = event;
  this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1' } });
 }
  renderRow(row,c) {
      return (
        <Ons.List>
       <div style={{width: '100%', backgroundColor: '#faebd7'}}>
           <Ons.ListHeader></Ons.ListHeader>
           <Ons.ListItem key={row._links.self.href} tappable>
       <div className='left'>
         <span style={{ textAlign: 'left' }}>&emsp;
         <img src= {URL[c]} style={{ width: '40%',height: '50%' }} /></span>
         <b style={{color: 'red' }}>
         <p>
               &emsp;{row.name}
         </p>
         <p>
               &emsp;{row.camp}
           </p>
      
             </b>
       </div>
       <div className='center'>

          </div>
        <div className='right'>
        <Ons.Button style={{ margin: '6px' }} onClick={this.pushPage.bind(this, row.name,num[c])} >Select</Ons.Button>
        </div>
        </Ons.ListItem>
        </div>
          </Ons.List>
      )
  }
renderToolbar() {
   return (
     <Ons.Toolbar  >
      <div className='center' >ระบบจัดรอบฉายภาพยนต</div>
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
render(){
return (
    <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
     <Ons.List
          dataSource={this.state.comingSoons}
          renderHeader={() => <Ons.ListHeader>เลือกรายการภาพยนต์ที่มี</Ons.ListHeader>}
          renderRow={this.renderRow.bind(this)}
        />

      </Ons.Page>

    );
  }
}
var room;
var time;
var date;
var Emplo;
////////////////////////////////////////////////////////////////////////////////
export default class Page0 extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      detail: '',
      date: '',
      fastival : '',
      employee : '',
      promov :""
    }
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

  popPage() {
    this.props.navigator.popPage();
  }

  Billpro() {
    room=this.state.fastival;
    time=this.state.promov;
    date=this.state.date;
    Emplo=this.state.employee;
    this.props.navigator.pushPage({ component: Page, props: { key: 'Page',state:this.state } });
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleFastivalChange(e) {
    this.setState({fastival: e.target.value});
  }

  handlePromovChange(e) {
    this.setState({promov: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }
  handleEmployeeChange(e) {
    this.setState({employee: e.target.value});
  }



  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedMovie}
            onChange={this.handleMovieChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

       <Ons.Card>
        <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>


          <br/>
          <Ons.List renderHeader={() => <Ons.ListHeader>เลือกรอบฉาย</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.fastival} fastival={this.state.fastival} onChange={this.handleFastivalChange.bind(this)}>
                    <option value=""></option>
                    <option value="12.30-14.30">12.30-14.30</option>
                    <option value="14.30-16.30">14.30-16.30</option>
                    <option value="16.30-18.30">16.30-18.30</option>
                    <option value="18.30-20.30">18.30-20.30</option>
                    <option value="20.30-22.30">20.30-22.30</option>

                  </Ons.Select>

            <Ons.List renderHeader={() => <Ons.ListHeader>เลือกโรงฉายภาพยนต์</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.promov} promov={this.state.promov} onChange={this.handlePromovChange.bind(this)}>
                    <option value=""></option>
                    <option value="Theatre1">Theatre1</option>
                    <option value="Theatre2">Theatre2</option>
                    <option value="Theatre3">Theatre3</option>
                    <option value="Theatre4">Theatre4</option>
                    <option value="Theatre5">Theatre5</option>
                    <option value="Theatre6">Theatre6</option>
                  </Ons.Select>
          <br/>
          <div>
          <br/>
             <Ons.List renderHeader={() => <Ons.ListHeader>วันที่เจะจัดฉาย</Ons.ListHeader>}  />
             <div>
              <input type="date"  value={this.state.date}
               onChange={this.handleDateChange.bind(this)}/>
               &ensp;&ensp;&ensp;
             </div>

           </div>
           <br/>
           <div>
            <Ons.List renderHeader={() => <Ons.ListHeader>ระบุIDพนักงานเพื่อทำรายการ</Ons.ListHeader>}  />
          <p>
            <Ons.Input
              value={this.state.employee}
              onChange={this.handleEmployeeChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ป้อนid' />
          </p>
           </div>
         </div>
          <form >
           <br/>
           <br/>
            <div style={{ textAlign: 'center' }}>
              <Ons.Button value = {this.state.movie} onClick={this.Billpro.bind(this, Page)}>ถัดไป </Ons.Button><br/><br/>
            </div>
          </form>
        </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}
