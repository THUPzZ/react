var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class ReservationRoom3 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '		#7aa5a0' }}>
      <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>ระบบโรงภาพยนต์</div>
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
           <h1><b style={{color: '#222e3a'}}>บันทึกการคืนภาพยนต์</b></h1>   
      
           </div>
            </div>
        <Ons.Card style={{backgroundColor:'#7aa5a0',width: '100%'}}>
        <tr>
          <td>
          </td>
        </tr>
          <center>
            <tr>
              <td>
                <p> <b style={{color: '#222e3a'}}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; ชื่อภาพยนต์ :</b> <b style={{color: 'black'}}>&ensp;{namemovie}</b></p>
                <p> <b style={{color: '#222e3a'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ราคา :</b><b style={{color: 'black'}}>&ensp;{price} THB</b></p>
                <p> <b style={{color: '#222e3a'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; รหัสหนัง : </b><b style={{color: 'black'}}>&ensp;{idmovie}</b></p>
                <p> <b style={{color: '#222e3a'}}>&ensp; &ensp;&ensp;&ensp;&ensp;&ensp; ค่ายหนัง :</b><b style={{color: 'black'}}>&ensp;{camp}</b></p>
               
                <p> <b style={{color: '#222e3a'}}> &ensp; &ensp;&ensp;&ensp;&ensp;&ensp; สาเหตุที่คืน :</b><b style={{color: 'black'}}>&ensp;{note}</b></p>
                 <p> <b style={{color: '#222e3a'}}> &ensp; &ensp;&ensp;&ensp;&ensp;&ensp; วันที่คืน :</b><b style={{color: 'black'}}>&ensp;{date}</b></p>
                 
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
var date;

class ReservationRoom2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      note: '',
      date: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  

  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '		#7aa5a0' }}>
      <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>ระบบโรงภาพยนต์</div>
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

 handleDateChange(e) {
  this.setState({date: e.target.value});
}

  showMenu() {
    this.props.showMenu();
  }

  loadPage() {
    this.props.navigator.resetPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } }, { animation: 'fade' });
  }
  
  pushPage() {
    name=this.state.name;
    note=this.state.note;
    date=this.state.date;

    client({method: 'GET', path: '/id/' + idmovie+'/namemovie/' + namemovie+'/camp/' + camp+'/price/' + price+'/note/' + note+'/date/' + date+"/employee/"+name}).done(
      this.props.navigator.pushPage({ component: ReservationRoom3, props: { key: 'ReservationRoom3' } })
    );
  }

  render() {
    return (

      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{backgroundColor:'#7aa5a0',width: '100%'}}>
         <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1><b style={{color: 'blue'}}>ระบบคืนภาพยนต์</b></h1>   
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
                    <b style={{color: '#222e3a'}}>ID พนักงาน :&emsp;</b>
                      <input style={{ width: '20%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>    
                   
                    <tr>
                      <b style={{color: '#222e3a'}}>สาเหตุที่คืน :&emsp;</b>
                      <input style={{ width: '70%'}} type="text" value={this.state.note} onChange={this.handleChange('note')} required />
                    </tr>
                    
             <div>
             <br/>
                <input type="date"  value={this.state.date}
                  onChange={this.handleDateChange.bind(this)}/>
                  &ensp;&ensp;&ensp;
             </div>
           

                    </table>
                    </form>
                  </div>
                </div>
              </td>
            </tr>
            </table>
            <Ons.Button onClick={this.pushPage.bind(this)} style={{ backgroundColor: '	black' }} >คืนภาพยนต์</Ons.Button>
          </center>
          </div>
          </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

var URL = ["https://www.img.in.th/images/d3a5ef9b0bebb0f52eaeab81d5629c74.jpg",
"https://www.img.in.th/images/12582954e9d75aa035f1da18cbb9fea5.jpg",
"https://www.img.in.th/images/a2239b84468106df8a4eff05cb396788.jpg",
"https://www.img.in.th/images/ac5e21e8a2f317545dabfba6dcb9a9bd.png"];
var idmovie;
var price;
var namemovie;
var camp;
var detail;
var num=[1,2,3,4,5,6,7,8,9];
var iddd;
var order = 0;
class ReservationRoom1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buyMovies: [] };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '		#7aa5a0' }}>
      <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>ระบบโรงภาพยนต์</div>
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
  //<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>

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
    client({ method: 'GET', path: '/api/buyMovies' }).done(response => {
      this.setState({ buyMovies: response.entity._embedded.buyMovies});
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
          <Ons.Button style={{ margin: '6px', textAlign: 'right' }} onClick={this.pushPage.bind(this, row.namemovie, row.price, num[c],row.camp, row.detail)}style={{ backgroundColor: '	#2a3a4c' }}>Select</Ons.Button>
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
          dataSource={this.state.buyMovies}
          renderRow={this.renderRow.bind(this)}
        />
      </Ons.Page>
    );
  }
}

export default class Render extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '		#7aa5a0' }}>
        <div className='center'>ระบบโรงภาพยนต์</div>
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

  pushPage() {
    this.props.navigator.pushPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/02/11/movie-film-video-production-ss-1920-800x450.jpg"}
      style={{width: '100%'}}  />
        <div style={{ textAlign: 'center' }}>
          <br />
         <Ons.Button onClick={this.pushPage.bind(this)} style={{ backgroundColor: '	#7aa5a0' }} modifier='large' >ระบบคืนภาพยนต์</Ons.Button>
        </div>
      </Ons.Page>
    );
  }
}

