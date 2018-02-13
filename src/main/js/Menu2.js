var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');var Amount = '0';
var Amount = '0';
var JSONDATA = {};
var pushpage='';

////////////////////////////////////////////////////////////////////////////////
var num= [1,2,3,4,5,6,7,8,9];
var camp;
var name;
class Status extends React.Component {
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
    client({method: 'GET', path:"/name/"+name+"/detail/"+detail+"/camp/"+camp+"/date/"+date+"/employee/"+Emplo+"/id/"+id}).done(
    ons.notification.alert('บันทึก')
    );

  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
        <p>
          ชื่อภาพยนตร์ : {name}
        </p>

        <p>
           ประเภทหนัง : {detail}
        </p>

        <p>
          ค่ายหนัง : {camp}
        </p>

       <p>
          วันที่เข้าฉาย : {date}
        </p>

        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.getData.bind(this)}>บันทึก</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
var name;
var id;
class Page extends React.Component {
    constructor(props) {
        super(props);
            this.state = {buyMovies: []};
            this.state={
        name: '',
        idBill: '',
        date: '',
        time:'',

      selectedBanks: 'No'
    }
}

    componentDidMount() {
		client({method: 'GET', path: '/api/buyMovies'}).done(response => {
			this.setState({buyMovies: response.entity._embedded.buyMovies});
        });
    }
 handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }
  pushPage(event,event1) {
//      ons.notification.alert('บันทึก');
  id=event1;
   name = event;
  this.props.navigator.pushPage({ component: Coming, props: { key: 'Coming' } });
 }
  renderRow(row,c) {
      return (
        <Ons.List>
       <div style={{width: '100%', backgroundColor: '#faebd7'}}>
           <Ons.ListHeader></Ons.ListHeader>
           <Ons.ListItem key={row._links.self.href} tappable>
       <div className='left'>
         <span style={{ textAlign: 'left' }}>&emsp;
         <img src= {URL[c]} style={{ width: '40%',height: '50%' }} /></span>
         <b style={{color: 'red' }}>
         <p>
             &emsp; ชื่อภาพยนตร์ : {row.namemovie}
         </p>

         </b>
       </div>
       <div className='center'>

          </div>
        <div className='right'>
        <Ons.Button style={{ margin: '6px' }} onClick={this.pushPage.bind(this, row.namemovie,num[c])} >Select</Ons.Button>
        </div>
        </Ons.ListItem>
        </div>
          </Ons.List>
      )
  }

renderToolbar() {
   return (
     <Ons.Toolbar  >
      <div className='center' >ComingSoon</div>
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
          dataSource={this.state.buyMovies}
          renderHeader={() => <Ons.ListHeader>รายชื่อภาพยนตร์</Ons.ListHeader>}
          renderRow={this.renderRow.bind(this)}
        />
      </Ons.Page>

    );
  }
}

////////////////////////////////////////////////////////////////////////////////
var camp;
var detail;
var date;
var Emplo;
class Coming extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      detail: '',
      date: '',
      fastival : '',
      employee : '',
      promov :""
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
    detail=this.state.fastival;
    camp=this.state.promov;
    date=this.state.date;
    Emplo=this.state.employee;
    this.props.navigator.pushPage({ component: Status, props: { key: 'Status',state:this.state } });
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
        <img src={"https://www.picz.in.th/images/2018/01/25/27152611_1770343766358920_50798626_n.jpg"} style={{width: '100%'}}  />
       <Ons.Card>
        <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>

          <br/>
          <Ons.List renderHeader={() => <Ons.ListHeader>ประเภทหนัง</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
            <Ons.Select id="choose-sel" value={this.state.fastival} fastival={this.state.fastival} onChange={this.handleFastivalChange.bind(this)}>
                    <option value=""></option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Animation">Animation</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                  </Ons.Select>

            <Ons.List renderHeader={() => <Ons.ListHeader>ค่ายหนัง</Ons.ListHeader>} renderRow={this.renderCheckboxRow.bind(this)} />
              <Ons.Select id="choose-sel" value={this.state.promov} promov={this.state.promov} onChange={this.handlePromovChange.bind(this)}>
                    <option value=""></option>
                    <option value="Sony Pictures">Sony Pictures</option>
                    <option value="Century Fox">Century Fox</option>
                    <option value="Columbia Pictures">Columbia Pictures</option>
                    <option value="Marvel">Marvel</option>
                    <option value="Walt Disney Pictures">Walt Disney Pictures</option>
               </Ons.Select>

          <br/>
          <div>
          <br/>
             <Ons.List renderHeader={() => <Ons.ListHeader>วันที่เข้าฉาย</Ons.ListHeader>}  />
             <div>
              <input type="date"  value={this.state.date}
               onChange={this.handleDateChange.bind(this)}/>
               &ensp;&ensp;&ensp;
             </div>

           </div>
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
              <Ons.Button value = {this.state.movie} onClick={this.Billpro.bind(this, Page)}>ถัดไป </Ons.Button><br/><br/>
            </div>
          </form>
        </div>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
export default class Menu2 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'> Coming Soon </div>
      </Ons.Toolbar>
  );
}

  showMenu() {
    this.props.showMenu();
  }

  PageAddmovie() {
    this.props.navigator.pushPage({ component: Page, props: { key: 'Page' } });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/02/10/RJMC-4-Web-2.png"}
      style={{width: '100%'}}  />
        <div style={{ textAlign: 'center' }}>
          <br />
           <Ons.Button onClick={this.PageAddmovie.bind(this)} modifier='large' >เพิ่มรายการภาพยนตร์</Ons.Button>
        </div>
      </Ons.Page>
      );
    }
  }
