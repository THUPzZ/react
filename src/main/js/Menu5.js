var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class Billpro extends React.Component {
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
   client({method: 'GET', path : '/number/'+number+'/fastival/'+fastival+'/promov/'+promov+'/dateStart/'+dateStart+'/dateStop/'+dateStop+'/employeeID/'+employeeID}).done(
              ons.notification.alert('บันทึกสำเร็จ')
             // console.log(employee)
         );
 }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
          รหัสโปรโมชั่น : {this.props.state.number}
        </p>

        <p>
          เทศกาล : {this.props.state.fastival}
        </p>
        
        <p>
          โปรโมชั่นพิเศษ : {this.props.state.promov}
        </p>

        <p>
          วันเริ่มโปรโมชั่น : {this.props.state.dateStart}
        </p>
        <p>
           วันสิ้นสุดโปรโมชั่น: {this.props.state.dateStop}
         </p>
        <p>
           รหัสพนักงาน : {this.props.state.employee}
        </p>
        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick = {this.handleClick.bind(this)}>ยืนยัน</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

var number;
var fastival;
var promov;
var dateStart;
var dateStop;
var employeeID;
class StartPro extends React.Component {
  constructor(){
    super()
    this.state={
      number: '',
      dateStart: '',
      dateStop: '',
      fastival : '',
      promov :'',
      employee : ''

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
        number = this.state.number
        fastival = this.state.fastival
        promov = this.state.promov
        dateStart = this.state.dateStart
        dateStop = this.state.dateStop
        employeeID = this.state.employee
    this.props.navigator.pushPage({ component: Billpro, props: { key: 'billpro',state:this.state } });
  }
  handleNumberChange(e) {
    this.setState({number: e.target.value});
  }

  handleFastivalChange(e) {
    this.setState({fastival: e.target.value});
  }
  
  handlePromovChange(e) {
    this.setState({promov: e.target.value});
  }

  handleDateStartChange(e) {
    this.setState({dateStart: e.target.value});
  }
   handleDateStopChange(e) {
      this.setState({dateStop: e.target.value});
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
          <table style={{width:'100%'}}>
            <tr>
              รหัสโปรโมชั่น:&ensp;&ensp;
              <input style={{ width: '70%'}} type="text" value={this.state.number} onChange={this.handleNumberChange.bind(this)} required />
            </tr>
          </table>
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        <table style={{width:'100%'}}>
            <tr>
              รหัสพนักงาน:&ensp;&ensp;
              <input style={{ width: '70%'}} type="text" value={this.state.employee} onChange={this.handleEmployeeChange.bind(this)} required />
            </tr>
        </table>
//////////////////////////////////////////////////////////////////////////////////////////////////////////

          <br/>
          <Ons.List renderHeader={() => <Ons.ListHeader>เทศกาล</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.fastival} fastival={this.state.fastival} onChange={this.handleFastivalChange.bind(this)}>
                    <option value="วันปีใหม่">วันปีใหม่</option>
                    <option value="วันเด็ก">วันเด็ก</option>
                    <option value="วันวาเลนไทน์">วันวาเลนไทน์</option>
                    <option value="วันสงกรานต์">วันสงกรานต์</option>
                    <option value="วันแม่">วันแม่</option>
                    <option value="วันคริสมาสต์">วันคริสมาสต์</option>
                  </Ons.Select>
                  
            <Ons.List renderHeader={() => <Ons.ListHeader>การลดของโปรโมชั่น</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.promov} promov={this.state.promov} onChange={this.handlePromovChange.bind(this)}>
                   <option value="ฟรี">ฟรี</option>
                    <option value="ลด 30%">ลด 30%</option>
                    <option value="ซื้อ 1 แถม 1">ซื้อ 1 แถม 1</option>
                    <option value="ลด 50%">ลด 50%</option>
                    <option value="ซื้อ 2 แถม 1">ซื้อ 2 แถม 1</option>
                    <option value="79 บาททุกเรื่อง">79 บาททุกเรื่อง</option>ption>
                  </Ons.Select>
          <br/>
          
         </div>
          <form >
          <div>
                <br/>
                    <label>วันที่เริ่มโปรโมชั่น:</label> &ensp;&ensp;&ensp;
                       &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

                <div>
                    <input type = "date"  value = {this.state.dateStart}
                        onChange={this.handleDateStartChange.bind(this)}/>
                        &ensp;&ensp;&ensp;
              </div>

            </div>

            <div>
                  <br/>
                      <label>วันสิ้นสุดโปรโมชั่น:</label> &ensp;&ensp;&ensp;
                           &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

                     <div>
                         <input type = "date"  value = {this.state.dateStop}
                            onChange={this.handleDateStopChange.bind(this)}/>
                            &ensp;&ensp;&ensp;
                  </div>

            </div>




           <br/>
           <br/>
            <div style={{ textAlign: 'center' }}>
              <Ons.Button value = {this.state.movie} onClick={this.Billpro.bind(this, Billpro)}>สร้างโปรโมชั่นใหม่ </Ons.Button><br/><br/>
            </div>
          </form>
        </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
export default class Menu5 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'> ระบบโปรโมชั่น </div>
      </Ons.Toolbar>
  );
}

  showMenu() {
    this.props.showMenu();
  }

  AddPromotion() {
    this.props.navigator.pushPage({ component: StartPro, props: { key: 'startpro' } });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/01/26/photodune-6272262-promotion-stamp-xl-1280x420.jpg"}

      style={{width: '100%'}}  />

        <div style={{ textAlign: 'center' }}>
          <br />
           <Ons.Button onClick={this.AddPromotion.bind(this)}>สร้างโปรโมชั่น</Ons.Button>
           &emsp;
        </div>
      </Ons.Page>
      );
    }
  }

