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
    client({method: 'GET', path:"/clickdrink/"+clickdrink+"/clicksnack/"+clicksnack+"/totaldrink/"+totaldrink+"/pricedrink/"+pricedrink
    +"/totalsnack/"+totalsnack+"/pricesnack/"+pricesnack+"/totalprice/"+totalprice+"/billdate/"+billdate}).done(
    ons.notification.alert('บันทึก')
    );

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
        เครื่องดื่มที่เลือก : {clickdrink}
        </p>
        <p>
        ขนมที่เลือก : {clicksnack}
        </p>   
      
        <p>
          จำนวนเครื่องดื่มที่เลือก : {totaldrink}
        </p>

         <p>
          ราคารวมของเครื่องดื่ม : {pricedrink}
        </p>

         <p>
          จำนวนขนมที่เลือก : {totalsnack}
        </p>

         <p>
          ราคารวมของขนม : {pricesnack}
        </p>

         <p>
          ราคารวมทั้งรายการ : {totalprice}
         </p>

         <p>
          วันที่สั่งซื้อ : {billdate}
         </p>

       

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.getData.bind(this)}>ยืนยัน</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

var Mid
var snack;

////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////

var name;
var Mid;


var clickdrink;
var totaldrink;
var pricedrink;
var clicksnack;
var totalsnack;
var pricesnack;
var totalprice;
var billdate;

////////////////////////////////////////////////////////////////////////////////
class Page extends React.Component {
constructor(props) {
        super(props);
        this.state = {drinkses: []};
        this.state = {snackses: []};
        this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',

      selectedVegetable: 'null',
      selectedVegetable1: 'null',
      snackprice: 0,
      drinkprice: 0
    }

}
componentDidMount() {
		client({method: 'GET', path: '/api/drinkses'}).done(response => {
      this.setState({drinkses: response.entity._embedded.drinkses});
     console.log(response);
    });
    client({method: 'GET', path: '/api/snackses'}).done(response => {
      this.setState({snackses: response.entity._embedded.snackses});
     console.log(response);
		});
}
 
  pushPage(event,event1) {
//      ons.notification.alert('บันทึก');
  Mid=event1;
   name = event;
  this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1' } });
 }

 

handleTotaldrinkChange(e) {
  this.setState({totaldrink: e.target.value});
}
handletotalpricedrinkChange(e) {
  this.setState({totalpricedrink: e.target.value});
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

handleDateChange(e) {
  this.setState({date: e.target.value});
}




 handleVegetablChange(drinkses,drinkprice) {
  this.setState({selectedVegetable: drinkses,drinkprice: drinkprice});
}

handleVegetablChange1(snackses) {
  this.setState({selectedVegetable1: snackses});
}

Page1() {
  
  clickdrink = this.state.selectedVegetable;
  totaldrink = this.state.totaldrink;
  pricedrink = this.state.totalpricedrink;
  clicksnack = this.state.selectedVegetable1;
  totalsnack = this.state.totalsnack;
  pricesnack = this.state.totalpricesnack;
  totalprice = this.state.totalprice;
  billdate = this.state.date;

 this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1',state:this.state } });
}
 
 renderCheckboxRow(row,c) {
  return (
    <Ons.ListItem key={row.drinksname} tappable>
      <label className='left'>
        <Ons.Checkbox
          inputId={`checkbox-${row.drinksname}`}
          checked={row.drinksname === this.state.selectedVegetable}
          onChange={this.handleVegetablChange.bind(this, row.drinksname,row.price)}
        />
      </label>
      <label htmlFor={`checkbox-${row.drinksname}`} className='center'>
        {row.drinksname} : {row.price} บาท
      </label>
    </Ons.ListItem>
  )
}

renderCheckboxRow1(row,c) {
  return (
    <Ons.ListItem key={row.snacksName} tappable>
      <label className='left'>
        <Ons.Checkbox
          inputId={`checkbox-${row.snacksName}`}
          checked={row.snacksName === this.state.selectedVegetable1}
          onChange={this.handleVegetablChange1.bind(this, row.snacksName)}
        />
      </label>
      <label htmlFor={`checkbox-${row.snacksName}`} className='center'>
        {row.snacksName} : {row.price} บาท
      </label>
    </Ons.ListItem>
  )
}

renderToolbar() {
   return (
     <Ons.Toolbar  >
      <div className='center' >ข้อมูลการสั่งซื้อ</div>
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
          dataSource={this.state.drinkses}
          renderHeader={() => <Ons.ListHeader>เลือกเครื่องดื่ม</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />

        <Ons.List
          dataSource={this.state.snackses}
          renderHeader={() => <Ons.ListHeader>เลือกขนม</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow1.bind(this)}
        />

        <Ons.Card>
        <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>

          
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
                <input type="date"  value={this.state.date}
                onChange={this.handleDateChange.bind(this)}/>
                &ensp;&ensp;&ensp;
                </p>

              </div>

              <br/>  <div style={{ textAlign: 'center' }}>
                         <Ons.Button value = {this.state.banks} onClick={this.Page1.bind(this, Page1)}>ถัดไป </Ons.Button><br/><br/>
                  </div>
                    
           

        </form>
             </div>
        </Ons.Card>
        

    </Ons.Page>

    );
  }
}
var room;
var time;
var date;
var Emplo;
////////////////////////////////////////////////////////////////////////////////
export default class Test extends React.Component {
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

        <div className='center'> ยินดีต้อนรับ </div>

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
   
    this.props.navigator.pushPage({ component: Page, props: { key: 'Page'} });
  }
  


 

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

       <Ons.Card>
        
            <div style={{ textAlign: 'center' }}>
              <Ons.Button  onClick={this.Billpro.bind(this)}>ระบบขายขนมและเครื่องดื่ม</Ons.Button><br/><br/>
            </div>
          
        
        </Ons.Card>
      </Ons.Page>
    );
  }
}
