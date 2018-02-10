var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class  Payment2 extends React.Component {

  renderToolbar() {

    return (
      <Ons.Toolbar>
       <Ons.BackButton> กลับ</Ons.BackButton>
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
    client({method: 'GET', path:"/Bill/"+d1+"/Drink/"+bankcheck+"/Totaldrink/"+d2+"/Totalpricedrink/"+d3+"/Snack/"+bankcheck1+"/Totalsnack/"+this.props.state.totalsnack+"/Totalpricesnack/"+this.props.state.totalpricesnack+"/Totaldetail/"+this.props.state.totalprice+"/Billdate/"+this.props.state.date+"/Billtime/"+this.props.state.time}).done(
    ons.notification.alert('บันทึก')
    );

  }
  render() {

    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
         <Ons.Card>
           <div style={{ textAlign: 'center' }}>
              <h2>ใบบันทึกการแจ้งชำระเงิน</h2>
          </div>

        <p>
        เลขที่ใบบันทึกการจอง :{d1}
        </p>

        <p>
        เครื่องดื่มที่เลือก: {bankcheck}
        </p>
        
         <p>
        จำนวนเครื่องดื่ม : {d2}
        </p>
        
        <p>
        ราคารวมของเครื่องดื่ม : {d3}
        </p>
        
        <p>
        ขนมที่เลือก : {bankcheck1} 
        </p>
        
         <p>
        จำนวนขนม : {this.props.state.totalsnack}
        </p>
        
        <p>
        ราคารวมของขนม : {this.props.state.totalpricesnack}
        </p>
        
        <p>
        ราคารวมของรายการ : {this.props.state.totalprice}
        </p>
        
         <p>
        วันที่สั่งซื้อ: {this.props.state.date}
        </p>

        <p>
        เวลาที่สั่งซื้อ : {this.props.state.time}
        </p>
        
		
        
        
        <div style={{ textAlign: 'center' }}>
        <Ons.Button onClick={this.getData.bind(this)}>บันทึก</Ons.Button>
        </div>

          </Ons.Card>
      </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}

var bankcheck;
var bankcheck1;

class Payment1 extends React.Component {
  constructor(){
    super()
    this.state={
      date: '',
      time:'',
      totalsnack:'',
      totalpricesnack:'',
      totalprice:'',
      banks: [
        'ป๊อปคอร์น (S) : 90 บาท',
        'ป๊อปคอร์น (M) : 150 บาท',
        'ป๊อปคอร์น (L) : 200 บาท'
      ],
      selectedBanks: 'No'

    }
  }

 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>ระบบขายขนมและเครื่องดื่ม</div>
        <Ons.BackButton> กลับ</Ons.BackButton>
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

  Payment3() {
     bankcheck1 = this.state.selectedBanks
    this.props.navigator.pushPage({ component: Payment2, props: { key: 'Payment2',state:this.state } });
  }
  
  

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }
  
  
  handletotalsnackChange(e) {
    this.setState({totalsnack: e.target.value});
  }
  handleTotalpricesnackChange(e) {
    this.setState({totalpricesnack: e.target.value});
  }
   handleTotalpriceChange(e) {
    this.setState({totalprice: e.target.value});
  }


  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedBanks}
            onChange={this.handleBanksChange.bind(this, row)}
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
           <h1>ข้อมูลการสั่งซื้อ</h1>
          

          
           <Ons.List
          dataSource={this.state.banks}
          renderHeader={() => <Ons.ListHeader>เลือกขนม</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />



         </div>
               <form >
           <div>
           <br/>
           <br/>
           <div>
                 <label>จำนวนขนมที่เลือก:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalsnack}
                onChange={this.handletotalsnackChange.bind(this)}
                modifier='underbar'
                float
                placeholder='จำนวนขนม' />
              </p>
          
           </div> 
           
           <div>
                 <label>ราคาขนมทั้งหมด:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalpricesnack}
                onChange={this.handleTotalpricesnackChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ราคารวมของขนม' />
              </p>
          
           </div> 
           
           <div>
                 <label>ราคารวมทั้งรายการ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalprice}
                onChange={this.handleTotalpriceChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ราคารวมทั้งรายการ' />
              </p>
          
           </div> 
           
           
              
                <label>เลือกวันที่สั่งซื้อ:</label> &ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

              <div>
              
                <p>
                <Ons.Input
                value={this.state.date}
                onChange={this.handleDateChange.bind(this)}
                modifier='underbar'
                float
                placeholder='Date' />
                </p>

              </div>
           </div>
           
           
           <div>
                 <label>เลือกเวลาที่สั่งซื้อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              
              <p>
                <Ons.Input
                value={this.state.time}
                onChange={this.handleTimeChange.bind(this)}
                modifier='underbar'
                float
                placeholder='Time' />
              </p>
          
           </div>
           <br/>  <div style={{ textAlign: 'center' }}>
                         <Ons.Button value = {this.state.banks} onClick={this.Payment3.bind(this )}>ถัดไป </Ons.Button><br/><br/>
                  </div>

        </form>
             </div>
        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}

var d1;
var d2;
var d3;

class Payment extends React.Component {
  constructor(){
    super()
    this.state={
      idBill: '',
      totaldrink:'',
      totalpricedrink:'',
      banks: [
       
        'โค๊ก : 30 บาท',
        'เปปซี่ : 30 บาท',
        'แฟนต้า : 30 บาท',
        'โอชิกรีนที : 40 บาท'
      ],
      selectedBanks: 'No'

    }
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>ระบบขายขนมและเครื่องดื่ม</div>
        <Ons.BackButton> กลับ</Ons.BackButton>
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

  Payment2() {
     bankcheck = this.state.selectedBanks
     d1 = this.state.idBill
     d2 = this.state.totaldrink
     d3 = this.state.totalpricedrink
    this.props.navigator.pushPage({ component: Payment1, props: { key: 'Payment1',state:this.state } });
  }
 

  handleIdBillChange(e) {
    this.setState({idBill: e.target.value});
  }


  handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }
  
  handleTotaldrinkChange(e) {
    this.setState({totaldrink: e.target.value});
  }
  handletotalpricedrinkChange(e) {
    this.setState({totalpricedrink: e.target.value});
  }


  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedBanks}
            onChange={this.handleBanksChange.bind(this, row)}
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
           <h1>ข้อมูลการซื้อ</h1>

          <p>
            <Ons.Input
            value={this.state.idBill}
            onChange={this.handleIdBillChange.bind(this)}
              modifier='underbar'
              float
              placeholder='เลขที่ใบบันทึกการจอง' />
          </p>
          
          <Ons.List
          dataSource={this.state.banks}
          renderHeader={() => <Ons.ListHeader>รายการเครื่องดื่ม</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
         />
         



         </div>
               <form >
            
            <br/>
            <br/>
            
            <div>
                 <label>จำนวนเครื่องดื่มที่เลือก:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totaldrink}
                onChange={this.handleTotaldrinkChange.bind(this)}
                modifier='underbar'
                float
                placeholder='จำนวนเครื่องดื่ม' />
              </p>
          
           </div>  
           
           <div>
                 <label>ราคาเครื่องดื่มทั้งหมด:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalpricedrink}
                onChange={this.handletotalpricedrinkChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ราคารวมของเครื่องดื่ม' />
              </p>
          
           </div>
           <br/>  <div style={{ textAlign: 'center' }}>
                         <Ons.Button value = {this.state.banks} onClick={this.Payment2.bind(this, Payment2)}>ถัดไป </Ons.Button><br/><br/>
                  </div>

        </form>
             </div>
        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}


export default class Menu4 extends React.Component {
   renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'> ยินต้อนรับ </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }


  PagePayment() {
    this.props.navigator.pushPage({ component: Payment, props: { key: 'payment' } });
  }

render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      
        <div style={{ textAlign: 'center' }}>
          <br />

           <Ons.Button onClick={this.PagePayment.bind(this)}>ระบบขายขนมและเครื่องดื่ม</Ons.Button>

        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}


