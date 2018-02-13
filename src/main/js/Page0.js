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
    client({method: 'GET', path:"/theatre/"+theatre+"/name/"+name+"/time/"+fastival+"/date/"+date+"/employee/"+Emplo+"/comingSoon/"+test}).done(
    ons.notification.alert('Success')
    );

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
          โรงฉายภาพยนต์ : {theatre}
        </p>
        <p>
          ภาพยนต์ : {name}
        </p>
        <p>
          รอบเวลาฉาย :{fastival}
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var fastival;
var theatre;
var time;
var test;
var date;
var Emplo;
var num=[1,2,3,4,5,6,7,8,9,10];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class Page0 extends React.Component {
  constructor(){
    super()
    this.state = {theatres: []};
    this.state = {comingSoons: []};
    this.state={
      name: '',
      detail: '',
      date: '',
      fastival : '',
      employee : '',
      promov :'',
      selectedVegetable: 'null',
      selectedVegetable1: 'null',
      num1 : ''
    }
  }
  componentDidMount() {
		client({method: 'GET', path: '/api/theatres/'}).done(response => {
      this.setState({theatres: response.entity._embedded.theatres});
     console.log(response);
    });
    
    client({method: 'GET', path: '/api/comingSoons/' }).done(response => {
      this.setState({comingSoons: response.entity._embedded.comingSoons});
     console.log(response);
		});
}
handleVegetablChange(theatres) {
  this.setState({selectedVegetable: theatres});
}

handleVegetablChange1(comingSoons,num) {
  this.setState({selectedVegetable1: comingSoons});
  this.setState({num1:num });
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
    theatre=this.state.selectedVegetable;
    name=this.state.selectedVegetable1;
    time=this.state.promov;
    date=this.state.date;
    Emplo=this.state.employee;
    fastival=this.state.fastival;
    test=this.state.num1;
    this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1',state:this.state } });
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
  renderCheckboxRow(row,c) {
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
  renderCheckboxRow1(row,c) {
    return (
      <Ons.ListItem key={row.name} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row.name}`}
            checked={row.name === this.state.selectedVegetable1}
            onChange={this.handleVegetablChange1.bind(this,row.name,num[c])}
          />
        </label>
        <label htmlFor={`checkbox-${row.name}`} className='center'>
        ชื่อหนัง: &emsp;{row.name}<br/>ค่าย: &emsp;{row.camp}<br/>
         

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
          <p>
          <Ons.List
          dataSource={this.state.theatres}
          renderHeader={() => <Ons.ListHeader>เลือกโรงฉายภาพยนต์</Ons.ListHeader>}
           renderRow={this.renderCheckboxRow.bind(this)}
          /> 
          </p>
          <br/>
          <p>
          <Ons.List
          dataSource={this.state.comingSoons}
          renderHeader={() => <Ons.ListHeader>เลือกรายการภาพยนต์ที่มี</Ons.ListHeader>}
           renderRow={this.renderCheckboxRow1.bind(this)}
          /> 
          </p>
          <p>
          <Ons.List renderHeader={() => <Ons.ListHeader>เลือกรอบฉาย</Ons.ListHeader>} />
          <Ons.Select id="choose-sel" value={this.state.fastival} fastival={this.state.fastival} onChange={this.handleFastivalChange.bind(this)}>
                    <option value=""></option>
                    <option value="12.30-14.30">12.30-14.30</option>
                    <option value="14.30-16.30">14.30-16.30</option>
                    <option value="16.30-18.30">16.30-18.30</option>
                    <option value="18.30-20.30">18.30-20.30</option>
                    <option value="20.30-22.30">20.30-22.30</option>
          </Ons.Select>
          </p>
          <p>
          <div>
          <br/>
             <Ons.List renderHeader={() => <Ons.ListHeader>วันที่เจะจัดฉาย</Ons.ListHeader>}  />
             <div>
              <input type="date"  value={this.state.date}
               onChange={this.handleDateChange.bind(this)}/>
               &ensp;&ensp;&ensp;
             </div>

           </div>
           </p>
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
              <Ons.Button  onClick={this.Billpro.bind(this)}>ถัดไป </Ons.Button><br/><br/>
            </div>
          </form>
        </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}
