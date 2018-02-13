var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class BillRepair extends React.Component {
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
        deviceName = deviceName
   client({method: 'GET', path : '/note/'+note+'/date/'+date+'/employeeID/'+employeeID+'/deviceName/'+deviceName}).done(
              ons.notification.alert('บันทึกสำเร็จ')
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
          รหัสพนักงานแจ้งซ่อม : {this.props.state.employeeID}
        </p>

        <p>
          อุปกรณ์ : {this.props.state.deviceName}
        </p>
 
        <p>
          วันที่แจ้งซ่อมอุปกรณ์ : {this.props.state.date}
        </p>
        <p>
          หมายเหตุ : {this.props.state.note}
        </p>

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick = {this.handleClick.bind(this)}>ยืนยัน</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

var deviceName;
var employeeID;
var date;
var note;
class StartRepair extends React.Component {
  constructor(){
    super()
    this.state={
      note: '',
      date: '',
      deviceName : '',
      employeeID :''
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

  BillRepair() {
        note = this.state.note
        deviceName = this.state.deviceName
        employeeID = this.state.employeeID
        date = this.state.date
    this.props.navigator.pushPage({ component: BillRepair, props: { key: 'billrepair',state:this.state } });
  }
  handleNoteChange(e) {
    this.setState({note: e.target.value});
  }

  handleDeviceNameChange(e) {
    this.setState({deviceName: e.target.value});
  }
  
  handleEmployeeIDChange(e) {
    this.setState({employeeID: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
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
        
           <table style={{width:'100%'}}>
            <tr>
              รหัสพนักงานแจ้งซ่อม:&emsp;&emsp;
              <input style={{ width: '70%'}} type="text" value={this.state.employeeID} onChange={this.handleEmployeeIDChange.bind(this)} required />
            </tr>
          </table>
        <br/>
      
          <Ons.List renderHeader={() => <Ons.ListHeader>อุปกรณ์</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.deviceName} deviceName={this.state.deviceName} onChange={this.handleDeviceNameChange.bind(this)}>
                    <option value="จอภาพ">จอภาพ</option>
                    <option value="ลำโพงซ้าย">ลำโพงซ้าย</option>
                    <option value="ลำโพงขวา">ลำโพงขวา</option>
                    <option value="ลำโพงด้านหลัง">ลำโพงด้านหลัง</option>
                    <option value="เครื่องฉาย">เครื่องฉาย</option>
                    <option value="เครื่องอ่านแผ่นหนัง">เครื่องอ่านแผ่นหนัง</option>
                  </Ons.Select>

          <br/>
          
         </div>
         
          <form >
           <div>
         
              <label>วันที่แจ้งซ่อมอุปกรณ์:</label> &ensp;&ensp;&ensp;
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

              <div>
               <input type="date"  value={this.state.date}
                onChange={this.handleDateChange.bind(this)}/>
                &ensp;&ensp;&ensp;
                
                
              </div>
            </div>
           <br/>
            <table style={{width:'100%'}}>
            <tr>
              หมายเหตุ:&emsp;&emsp;
              <input style={{ width: '70%'}} type="text" value={this.state.note} onChange={this.handleNoteChange.bind(this)} required />
            </tr>
          </table>
           <br/>
            <div style={{ textAlign: 'center' }}>
              <Ons.Button value = {this.state.movie} onClick={this.BillRepair.bind(this, BillRepair)}>บันทึกการแจ้งซ่อม </Ons.Button><br/><br/>
            </div>
          </form>
          
          
        </div>
        
        </Ons.Card>
      </Ons.Page>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
export default class Repair extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'> ระบบแจ้งซ่อมอุปกรณ์ฉายหนัง </div>
      </Ons.Toolbar>
  );
}

  showMenu() {
    this.props.showMenu();
  }

  AddRepair() {
    this.props.navigator.pushPage({ component: StartRepair, props: { key: 'startrepair' } });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/02/10/business-it-support-1.jpg"}

      style={{width: '100%'}}  />

        <div style={{ textAlign: 'center' }}>
          <br />
           <Ons.Button onClick={this.AddRepair.bind(this)}>เข้าบันทึกแจ้งซ่อม</Ons.Button>
           &emsp;
        </div>
      </Ons.Page>
      );
    }
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
