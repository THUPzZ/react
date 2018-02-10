var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Home from './Home';


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
var name = "mm";
class Settings extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>Company</div>
        <div className='left'>
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


}
class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'รายการเลือกที่นั่งโรงภาพยนตร์',
      nextTitle: null
    };
  }
  handleClick() {
  name = this.props.state.name


    client({method: 'GET', path : '/name/'+name+'/aa/'+gg}).done(
        ons.notification.alert('ันทึกข้อมูล')
     );

  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className="center">{this.state.title}</div>
        <div className="right">
        <Ons.Button onClick={this.pushPage.bind(this)} modifier='quiet'><Ons.Icon icon="md-home"></Ons.Icon></Ons.Button></div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    this.props.navigator.pushPage({ component: Home, props: { key: 'home' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <p>
          ชื่อคนเลือกเลขที่นั่ง : {aa}
        </p>
        <p>
          ที่นั่ง :{aa}
        </p>
       </Ons.Card>


        <div style={{ textAlign: 'center',marginRight: '20', }}>
          <Ons.Button onClick={this.handleClick.bind(this)}>
            บันทึกข้อมูลการทำรายการ
          </Ons.Button>
        </div>


      </Ons.Page>
    );
  }
}
var aa;
class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  pushPage() {
    this.props.navigator.pushPage({ component: Bill, props: { key: 'Bill' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }
  show(num){

    if(num=='1'){
       if(a==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='A';
       ons.notification.confirm('Are you ready?')
       a='1';
      }
    }else if(num=='2'){
      if(b==1){
      ons.notification.alert('จองแล้ว')
      }else{
       aa='B';
       ons.notification.confirm('Are you ready?')
       b='1';
      }
    }else if(num=='3'){
      if(c==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='C';
       ons.notification.confirm('Are you ready?')
       c='1';
      }
    }else if(num=='4'){
      if(d==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='D';
       ons.notification.confirm('Are you ready?')
       d='1';
      }
    }else if(num=='5'){
      if(e==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='E';
       ons.notification.confirm('Are you ready?')
       e='1';
      }
    }else if(num=='6'){
      if(f==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='F';
       ons.notification.confirm('Are you ready?')
       f='1';
      }
    }else if(num=='7'){
      if(g==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='G';
       ons.notification.confirm('Are you ready?')
       g='1';
      }
    }else if(num=='8'){
      if(h==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='H';
       ons.notification.confirm('Are you ready?')
       h='1';
      }
    }else if(num=='9'){
      if(i==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='I';
       ons.notification.confirm('Are you ready?')
       i='1';
      }
    }else if(num=='10'){
      if(j==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='J';
       ons.notification.confirm('Are you ready?')
       j='1';
      }
    }else if(num=='11'){
      if(k==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='K';
       ons.notification.confirm('Are you ready?')
       k='1';
      }
    }else if(num=='12'){
      if(l==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='L';
       ons.notification.confirm('Are you ready?')
       l='1';
      }
    }else if(num=='13'){
      if(m==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='M';
       ons.notification.confirm('Are you ready?')
       m='1';
      }
    }else if(num=='14'){
      if(n==1){
      ons.notification.alert('จองแล้ว')
      }else{
        aa='N';
       ons.notification.confirm('Are you ready?')
       n='1';
      }
    }
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <img src={" https://www.picz.in.th/images/2018/01/26/60d8371ee9e77553f.jpg"} alt="Onsen UI"
        style={{ width: '100%' }} />

      <Ons.Card>

      <p style={{textAlign: 'center'}}>
           <table style={{width:'110%'}}>
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

class Zone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : ' zone',
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

  pushPage() {
    this.props.navigator.pushPage({ component: Seat, props: { key: 'Seat' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{ textAlign: 'left' }}>
         <table style={{width:'100%'}}>
            <tr>
              ภาพแสดงโซนที่นั่ง:&emsp;&emsp;
            </tr>
          </table>

           <img src={"https://www.picz.in.th/images/2018/01/26/c8c450627fb914e73fa1700e53fdd2ab.png"} alt="Onsen UI"
        style={{ width: '50%' }} />

        <section style={{margin: '10px'}}>
         <table style={{width:'100%'}}>
            <tr>
             เก้าอี้หรู (ZONE A1-A2)&emsp;&emsp;
            </tr>
          </table>
          <p style={{textAlign: 'left'}}>
               <img src={"https://www.picz.in.th/images/2018/01/26/c4.jpg"} alt="Onsen UI"
        style={{ width: '45%' }} />
          </p>

          <p style={{textAlign: 'left'}}>
          <table style={{width:'70%'}}>
            <tr>
             เก้าอี้ธรรมดา (ZONE B1-B2)&emsp;&emsp;
            </tr>
          </table>
               <img src={"https://www.picz.in.th/images/2018/01/26/c5.jpg"} alt="Onsen UI"
        style={{ width: '45%' }} />
          </p>

        </section>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.pushPage.bind(this)}>
            Next
          </Ons.Button>
        </div>
      </Ons.Page>
    );
  }
}

export default class Menu6 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>ระบบเลือกที่นั่งโรงภาพยนตร์</div>
        <div className='left'>
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

  pushPage() {
    this.props.navigator.pushPage({ component: Zone, props: { key: 'Zone' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
         <img src={"https://www.picz.in.th/images/2018/01/26/c3.jpg"} alt="Onsen UI"
        style={{ width: '100%' }} />
        <div style={{ textAlign: 'center' }}>
          <br />

          <Ons.Button onClick={this.pushPage.bind(this)}>
            WELLCOME
          </Ons.Button>

        </div>
        <br />
      </Ons.Page>
    );
  }
}
