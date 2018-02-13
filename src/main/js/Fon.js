var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


////////////////////////////////////////////////////////////////////////////////
var num= [1,2,3,4,5,6,7,8,9];
var camp;
var name;
var img;
var URL = ["http://student.sut.ac.th/b5711512/img/thumb_2030.jpg",
"http://student.sut.ac.th/b5711512/img/thumb_1429.jpg"];

class Page2 extends React.Component {
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
    client({method: 'GET', path:"/name/"+name+"/camp/"+camp+"/detail/"+detail+"/date/"+date+"/employee/"+Emplo+"/comingSoon/"+Mid}).done(
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
          ค่ายหนัง : {camp}
        </p>

        <p>
          ประเภทหนัง : {detail}
        </p>

        <p>
          กำหนดออกจากโรงภาพยนตร์ : {date}
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
var Mid;
class Page extends React.Component {
constructor(props) {
        super(props);
        this.state = {comingSoons: []};
        this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',

      selectedBanks: 'No'

    }

}
componentDidMount() {
    client({method: 'GET', path: '/api/comingSoons'}).done(response => {
      this.setState({comingSoons: response.entity._embedded.comingSoons});
    });
}
 handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }
  pushPage(event,event1) {
//      ons.notification.alert('บันทึก');
  Mid=event1;
   name = event;
  this.props.navigator.pushPage({ component: Page1, props: { key: 'Page1' } });
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
         <b style={{color: 'blue' }}>
         <p>
            &emsp; ชื่อภาพยนตร์ : {row.name}
         </p>
         <p>
            &emsp; ค่ายหนัง : {row.camp}
         </p>
         <p>
            &emsp; ประเภทหนัง : {row.detail}
         </p>
      
             </b>
       </div>
       <div className='center'>

          </div>
        <div className='right'>
        <Ons.Button style={{ margin: '6px' }} onClick={this.pushPage.bind(this, row.name,num[c])} >Select</Ons.Button>
        </div>
        </Ons.ListItem>
        </div>
          </Ons.List>
      )
  }
renderToolbar() {
   return (
     <Ons.Toolbar  >
      <div className='center' >รายชื่อหนัง</div>
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
          dataSource={this.state.comingSoons}
          renderHeader={() => <Ons.ListHeader>เลือกรายการภาพยนต์ที่มี</Ons.ListHeader>}
          renderRow={this.renderRow.bind(this)}
        />

      </Ons.Page>

    );
  }
}

////////////////////////////////////////////////////////////////////////////////
var detail;
var camp;
var date;
var Emplo;
class Page1 extends React.Component {
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
    this.props.navigator.pushPage({ component: Page2, props: { key: 'Page2',state:this.state } });
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
             <Ons.List renderHeader={() => <Ons.ListHeader>กำหนดออกจากโรงภาพยนตร์</Ons.ListHeader>}  />
             <div>
             <br/>
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

/////////////////////////////////////////////////////////////////////////////////////////////////
export default class Fon extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'></div>
      </Ons.Toolbar>
  );
}

  showMenu() {
    this.props.showMenu();
  }

  PageAdd() {
    this.props.navigator.pushPage({ component: Page, props: { key: 'Page' } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <img src={"https://www.picz.in.th/images/2018/02/10/Food-and-Health-Related-Documentaries-1024x576.jpg"}
      style={{width: '100%'}}  />
        <div style={{ textAlign: 'center' }}>
          <br />
           <Ons.Button onClick={this.PageAdd.bind(this)} modifier='large' >จัดสถานะภาพยนตร์ออกฉาย</Ons.Button>
        </div>
      </Ons.Page>
      );
    }
  }

