var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class ReservationRoom3 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
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

  loadPage() {
    this.props.navigator.resetPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } }, { animation: 'fade' });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1><b style={{color: 'blue'}}>บันทึกการซื้อภาพยนต์</b></h1>   
      
           </div>
            </div>
        <Ons.Card style={{backgroundColor:'#7fa884',width: '100%'}}>
        <tr>
          <td>
          </td>
        </tr>
          <center>
            <tr>
              <td>
                <p> <b style={{color: 'blue'}}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; ชื่อภาพยนต์ :</b> <b style={{color: 'black'}}>&ensp;{namemovie}</b></p>
                <p> <b style={{color: 'blue'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ราคา :</b><b style={{color: 'black'}}>&ensp;{price} THB</b></p>
                <p> <b style={{color: 'blue'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; รหัสหนัง : </b><b style={{color: 'black'}}>&ensp;{idmovie}</b></p>
                <p> <b style={{color: 'blue'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ค่ายหนัง :</b><b style={{color: 'black'}}>&ensp;{camp}</b></p>
                <p> <b style={{color: 'blue'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ค่ายหนัง :</b><b style={{color: 'black'}}>&ensp;{detail}</b></p>
                 <p> <b style={{color: 'blue'}}> &ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ชื่อพนักงาน:</b><b style={{color: 'black'}}>&ensp;{name}</b></p>
                  <p> <b style={{color: 'blue'}}> &ensp; &ensp;&ensp;&ensp;&ensp;&ensp; หมายเหตุ:  </b><b style={{color: 'black'}}>&ensp;{note}</b></p>
              </td>
            </tr>
          </center>
        </Ons.Card>
        <Ons.Card>
        <tr>
          <td>
          </td>
        </tr>
          <center>
            <tr>
              <td>
                 <Ons.Button >พิมพ์ใบบันทึก</Ons.Button>
              </td>
            </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
    );
  }
}
var name;
var note;

class ReservationRoom2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      note: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }
  
  handleChange(key) {
   return function (e) {
     var state = {};
     state[key] = e.target.value;
     this.setState(state);
   }.bind(this);

 }

 handleSubmit(event) {
   var data = {
       name: this.state.name,
       note: this.state.note
   }
 }

  showMenu() {
    this.props.showMenu();
  }

  loadPage() {
    this.props.navigator.resetPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } }, { animation: 'fade' });
  }
  
  pushPage() {
    name=this.state.name
    note=this.state.note

    client({method: 'GET', path: '/idmovie/' + idmovie+'/namemovie/' + namemovie+'/camp/' + camp+'/price/' + price+'/name/' + name+'/note/' + note}).done(
      this.props.navigator.pushPage({ component: ReservationRoom3, props: { key: 'ReservationRoom3' } })
    );
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{backgroundColor:'#7fa884',width: '100%'}}>
         <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1><b style={{color: 'blue'}}>ระบบซื้อภาพยนต์</b></h1>   
          <center>
            <table style={{width:'50%'}}>
            <tr>
              <td>
                <div>
                  <style dangerouslySetInnerHTML={{__html: "\ninput[type=text]{\n   width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ninput[type=email]{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ntextarea{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nselect {\n    width: 23.3%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 70%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n" }} />
                  <div>
                    <form onSubmit={this.handleSubmit}>
                    <table style={{width:'100%'}}>
                    <tr>
                      <b style={{color: 'blue'}}>ชื่อพนักงาน:&emsp;</b>
                      <input style={{ width: '70%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>
                    <tr>
                      <b style={{color: 'blue'}}>หมายเหตุ:&emsp;&emsp;</b>
                      <input style={{ width: '70%'}} type="text" value={this.state.note} onChange={this.handleChange('note')} required />
                    </tr>
                    </table>
                    </form>
                  </div>
                </div>
              </td>
            </tr>
            </table>
            <Ons.Button onClick={this.pushPage.bind(this)}>ซื้อภาพยนต์</Ons.Button>
          </center>
          </div>
          </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

var URL = ["https://www.picz.in.th/images/2018/01/26/black.jpg",
"https://www.picz.in.th/images/2018/01/26/doctor-strange-1.jpg",
"https://www.picz.in.th/images/2018/01/26/moana-fallback_fde4d101.jpg",
"https://www.picz.in.th/images/2018/01/26/Fantastic-Beasts.jpg"];
var idmovie;
var price;
var namemovie;
var camp;
var detail;

var order = 0;
class ReservationRoom1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
      </Ons.Toolbar>
    );
  }
  showMenu() {
    this.props.showMenu();
  }


  pushPage(event,event2,event3,event4,event5) {
    namemovie = event;
    price = event2;
    idmovie = event3;
    camp = event4;
    detail = event5;
      this.props.navigator.pushPage({ component: ReservationRoom2, props: { key: 'ReservationRoom2' } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  componentDidMount() {
    client({ method: 'GET', path: '/api/movies' }).done(response => {
      this.setState({ movies: response.entity._embedded.movies});
    });
  }

  renderRow(row, c) {
    return (
        <Ons.List>
        <div style={{width: '100%', backgroundColor: '#a8c4bf'}}>
            <Ons.ListHeader></Ons.ListHeader>
      <Ons.ListItem key={row._links.self.href} tappable>
        <div className='left'>
          <span style={{ textAlign: 'left' }}>&emsp;
          <img src={URL[c]} style={{ width: '500' }} /></span>
        </div>
        <div>
          <b style={{color: 'blue'}}>
              &emsp;&emsp;{row.idmovie}
          </b>
            <p> <b style={{color: 'black'}}> ชื่อหนัง : {row.namemovie} </b> </p>
            <p> <b style={{color: 'black'}}>ค่ายหนัง :{row.camp}</b> </p>
            <p> {row.detail} </p>
            <p> <b style={{color: 'black'}}>ราคา :{row.price} THB </b> </p>
        </div>
        <div className='right'>
          <Ons.Button style={{ margin: '6px', textAlign: 'right' }} onClick={this.pushPage.bind(this, row.namemovie, row.price, row.idmovie,row.camp, row.detail)}>Select</Ons.Button>
        </div>
      </Ons.ListItem>
      </div>
        </Ons.List>
    )
  }

  render() {
   return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
         <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1><b style={{color: 'blue'}}>รายชื่อหนัง</b></h1>   
      
           </div>
            </div>
        <Ons.List
          dataSource={this.state.movies}
          renderRow={this.renderRow.bind(this)}
        />
      </Ons.Page>
    );
  }
}

export default class Menu3 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>  </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    this.props.navigator.pushPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/01/25/1357217786-m2013JPG-o.jpg"}
      style={{width: '100%'}}  />
        <div style={{ textAlign: 'center' }}>
          <br />
         <Ons.Button onClick={this.pushPage.bind(this)} modifier='large' >ระบบซื้อภาพยนต์</Ons.Button>
        </div>
      </Ons.Page>
    );
  }
}

