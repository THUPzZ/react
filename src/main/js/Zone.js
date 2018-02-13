
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var n;
var name ;
import Home from './Home';
var employee;
var aa;
var mov;
var tell;
////////////////////////////////////////////////

class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'รายการเลือกที่นั่งโรงภาพยนตร์',
      nextTitle: null
    };

  }

    handleClick(){
employee = this.props.state.employee;
//aa = this.props.state.aa;
mov = this.props.state.promov;
tell = this.props.state.tell;
		client({method: 'GET', path:"/employee/"+employee+"/aa/"+aa+"/tell/"+tell+"/mov/"+mov}).done(
            ons.notification.alert('บันทึก')
    );

  }


  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">{this.state.title}</div>
        <div className="right">
        <Ons.Button onClick={this.pushPage.bind(this)} modifier='quiet'><Ons.Icon icon="md-menu"></Ons.Icon></Ons.Button></div>
      </Ons.Toolbar>
///
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
   this.props.navigator.pushPage({ component: Bill, props: { key: 'bill' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <p>
            ไอดีลูกค้า : {this.props.state.employee}
        </p>
        <p>
          ที่นั่ง :{aa}
        </p>
         <p>
                 tell: {this.props.state.tell}
                </p>
            <p>
                 เลือกหนัง: {this.props.state.promov}
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
var camp;
var aa;
class Seat extends React.Component {
  constructor(props) {
    super(props);
     this.state = {theshows: []};
    this.state = {
          customer:'',
            date:'',
            time:'',
            room:'',
            promov:'',
      title: props.title ? props.title : 'Select Seat',
      nextTitle: null
    };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">{this.state.title}</div>

      </Ons.Toolbar>
    );
  }


  showMenu() {
    this.props.showMenu();
  }
    handleEmployeeChange(e) {
    this.setState({employee: e.target.value});
  }
 handleTellChange(e) {
    this.setState({tell: e.target.value});
  }
  handlePromovChange(e) {
     this.setState({promov: e.target.value});
   }
     pushPage() {
    this.props.navigator.pushPage({ component: Bill, props: { key: 'bill',state:this.state} });
  }

  show(num){

    if(num=='1'){
       if(a==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='A';
       ons.notification.confirm('เลือกที่นั่ง')
       a='1';
      }
    }else if(num=='2'){
      if(b==1){
      ons.notification.alert('จองแล้ว')
      }else{
       aa='B';
       ons.notification.confirm('เลือกที่นั่ง')
       b='1';
      }
    }else if(num=='3'){
      if(c==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='C';
       ons.notification.confirm('เลือกที่นั่ง')
       c='1';
      }
    }else if(num=='4'){
      if(d==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='D';
       ons.notification.confirm('เลือกที่นั่ง')
       d='1';
      }
    }else if(num=='5'){
      if(e==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='E';
       ons.notification.confirm('เลือกที่นั่ง')
       e='1';
      }
    }else if(num=='6'){
      if(f==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='F';
       ons.notification.confirm('เลือกที่นั่ง')
       f='1';
      }
    }else if(num=='7'){
      if(g==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='G';
       ons.notification.confirm('เลือกที่นั่ง')
       g='1';
      }
    }else if(num=='8'){
      if(h==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='H';
       ons.notification.confirm('เลือกที่นั่ง')
       h='1';
      }
    }else if(num=='9'){
      if(i==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='I';
       ons.notification.confirm('เลือกที่นั่ง')
       i='1';
      }
    }else if(num=='10'){
      if(j==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='J';
       ons.notification.confirm('เลือกที่นั่ง')
       j='1';
      }
    }else if(num=='11'){
      if(k==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='K';
       ons.notification.confirm('เลือกที่นั่ง')
       k='1';
      }
    }else if(num=='12'){
      if(l==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='L';
       ons.notification.confirm('เลือกที่นั่ง')
       l='1';
      }
    }else if(num=='13'){
      if(m==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='M';
       ons.notification.confirm('เลือกที่นั่ง')
       m='1';
      }
    }else if(num=='14'){
      if(n==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='N';
       ons.notification.confirm('เลือกที่นั่ง')
       n='1';
      }
    }
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <table style={{width:'100%'}}>
            <tr>
              ไอดีลูกค้า:
              <input style={{ width: '30%'}} type="text" onChange={this.handleEmployeeChange.bind(this)} value={this.state.employee}  required />
            </tr>
        </table>
  <table style={{width:'100%'}}>
            <tr>
              Tell :
              <input style={{ width: '30%'}} type="text" onChange={this.handleTellChange.bind(this)} value={this.state.tell}  required />
            </tr>
        </table>
 <p>
                                     เลือกหนังสำหรับจองล่วงหน้า: {camp}
                                    </p>
 <table style={{width:'100%'}}>
            <tr>
             <Ons.Select id="choose-sel" value={this.state.promov} promov={this.state.promov} onChange={this.handlePromovChange.bind(this)}>

                    <option value=""></option>
                    <option value="Sony Pictures">Sony Pictures</option>
                    <option value="Dreamwork">Dreamwork</option>
                    <option value="Columbia Pictures">Columbia Pictures</option>
                    <option value="Marvel">Marvel</option>
                    <option value="Walt Disney Pictures">Walt Disney Pictures</option>
                   </Ons.Select>
          <br/>
          <br/>

            </tr>
                  </table>

      <Ons.Card>

      <p style={{textAlign: 'center'}}>
           <table style={{width:'100%'}}>
            <tr>
              จอภาพ&emsp;&emsp;
            </tr>
          </table>

          </p>

        <section style={{margin: '16px'}}>

          <p style={{textAlign: 'center'}}>
            <Ons.Button ref='button' onClick={this.show.bind(this,'1')}>A</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'2')}>B</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'3')}>C</Ons.Button>&emsp;
            <Ons.Button ref='button' onClick={this.show.bind(this,'4')}>D</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'5')}>E</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'6')}>F</Ons.Button>

          </p>

          <p style={{textAlign: 'center'}}>
            <Ons.Button ref='button' onClick={this.show.bind(this,'7')}>G</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'8')}>H</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'9')}>I</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'10')}>J</Ons.Button>&emsp;
            <Ons.Button ref='button' onClick={this.show.bind(this,'11')}>K</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'12')}>L</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'13')}>M</Ons.Button>
            <Ons.Button ref='button' onClick={this.show.bind(this,'14')}>N</Ons.Button>

          </p>

          <Ons.Card>

         <table style={{width:'100%'}}>
            <tr>
            **สามารถเลือกที่นั่งได้ครั้งละคนเท่านั้น เลือกเกินสองครั้งเอาครั้งล่าสุด**&emsp;&emsp;
            </tr>
          </table>
          </Ons.Card>
        </section>
        </Ons.Card>

          <div style={{ textAlign: 'right',marginRight: '20', }}>
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Next
          </Ons.Button>
        </div>
      </Ons.Page>
    );
  }
}
//////////////////////////////////////////////////////
export default class Zone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'Wellcom ',
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
    this.props.navigator.pushPage({ component: Seat, props: { key: 'Seat' + this.props.navigator.routes.length, title: this.state.nexTitle } });
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
          ระบบเลือกที่นั่งดูภาพยนตร์
          </Ons.Button>
        </div>

      </Ons.Page>
    );
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
