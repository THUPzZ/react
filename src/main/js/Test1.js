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
var movie ;
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
   /* clickdrink = this.props.state.selectedVegetable
    totalprice = this.props.state.totalprice
    pricesnack = this.props.state.totalpricesnack */

   
    
   client({method: 'GET', path:"/Movie/"+movie+"/Theshow/"+clickdrink+"/Member/"+pricedrink+"/price/"+totalprice}).done(
    ons.notification.alert('บันทึก')
    );

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
      
        <p>
        รายละเอียดตั๋วภาพยนตร์ : {clickdrink}
        </p>
        
         <p>
          ราคาตั๋วภาพยนตร์ : {totalprice}
         </p>

         <p>
          ไอดีตั๋วภาพยนตร์ : {pricesnack}
         </p>
         
       

       

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.getData.bind(this)}>ยืนยัน</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}


var snack;

////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////

var name;
var Mid;


var clickdrink;
var clicksnack;
var totaldrink;
var pricedrink;
var totalsnack;
var pricesnack;
var totalprice;
var billdate;

var num = [1,2,3,4];
////////////////////////////////////////////////////////////////////////////////
class Page extends React.Component {
constructor(props) {
        super(props);
        this.state = {theshows: []};
        this.state = {snackses: []};
        this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',

      selectedVegetable: 'null'
      

    }

}
componentDidMount() {
		client({method: 'GET', path: '/api/theshows'}).done(response => {
      this.setState({theshows: response.entity._embedded.theshows});
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
handleMovieChange(e) {
    this.setState({movie: e.target.value});
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

handleMidChange(e) {
  this.setState({mid: e.target.value});
}




 handleVegetablChange(drinkses) {
  this.setState({selectedVegetable: drinkses});
}

handleVegetablChange1(snackses) {
  this.setState({selectedVegetable1: snackses});
}

Page1() {
  if(!this.state.selectedVegetable || !this.state.totalprice || !this.state.totalpricedrink || !this.state.totalpricedrink || !this.state.movie){
     ons.notification.alert('กรุณากรอกข้อมูลให้ครบ')
  }else{
      clickdrink = this.state.selectedVegetable;
      totalprice = this.state.totalprice;
      pricesnack = this.state.totalpricesnack;
      pricedrink = this.state.totalpricedrink;
      movie = this.state.movie;

      this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1',state:this.state } });
  }

}
 
 renderCheckboxRow(row,c) {
  return (
    <Ons.ListItem key={row.name} tappable>
      <label className='left'>
        <Ons.Checkbox
          inputId={`checkbox-${row.name}`}
          checked={row.name === this.state.selectedVegetable}
          onChange={this.handleVegetablChange.bind(this, row.name)}
        />
      </label>
      <label htmlFor={`checkbox-${row.room,row.name,row.time}`} className='center'>
        โรงภาพยนตร์ : {row.room} &nbsp;&nbsp;&nbsp;
        ชื่อภาพยนตร์ : {row.name} &nbsp;&nbsp;&nbsp;
        ช่วงเวลาฉาย : {row.time}
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
          dataSource={this.state.theshows}
          renderHeader={() => <Ons.ListHeader>รายละเอียดตั๋วภาพยนตร์</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />


        <Ons.Card>
        <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>

          
           </div>
               <form >
            
            <br/>
            <br/>
            
            
           <br/> 

           
           <div>
                 <label>ราคาตั๋วภาพยนตร์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalprice}
                onChange={this.handleTotalpriceChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ราคาตั๋วภาพยนตร์' />
              </p>
          
           </div>

                   <div>
                       <label>ไอดีโรงภาพยนตร์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                       &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

                       <p>
                           <Ons.Input
                               value={this.state.movie}
                               onChange={this.handleMovieChange.bind(this)}
                               modifier='underbar'
                               float
                               placeholder='ราคาตั๋วภาพยนตร์' />
                       </p>

                   </div>
                   <div>
                 <label>ไอดีภาพยนตร์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalpricesnack}
                onChange={this.handleTotalpricesnackChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ราคาตั๋วภาพยนตร์' />
              </p>
          
           </div> 

           <div>
                 <label>ไอดีสมาชิก:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              
              <p>
                <Ons.Input
                value={this.state.totalpricedrink}
                onChange={this.handletotalpricedrinkChange.bind(this)}
                modifier='underbar'
                float
                placeholder='ไอดีสมาชิก' />
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
export default class Test1 extends React.Component {
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
              <Ons.Button  onClick={this.Billpro.bind(this)}>ระบบซื้อตั๋วภาพยนตร์</Ons.Button><br/><br/>
            </div>
          
        
        </Ons.Card>
      </Ons.Page>
    );
  }
}
