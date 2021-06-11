import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class DatePomegranateCheeseBowl extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/DatePomegranateBowlWithcheese.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Date Pomegranate Bowl With cheese",
    Min: " 10 min",
    Ingredients: "1- Three dates.\n2-Pomegranate seeds, 0.22 lb (100 g).\n3- 0.06 lb (ca.30 g) of semi-soft white cheese low-fat.\n",
    Preparation: "1-  Mix  the fruits with the cheese in the bowl.\n",



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/DatePomegranateBowlWithcheese.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"مزيج جبن مع التمر والرمان",
      Min: " 10 دقائق",
      Ingredients: "1- ثلاث حبات من التمر.\n2-حب رمان ( 100 غ).\n3-30 غ جبن أبيض  قليل الدسم.\n",
      Preparation: "1- امزج جميع المكونات معًا في الوعاء.\n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/DatePomegranateBowlWithcheese.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Bol de grenade aux dattes avec fromage",
      Min: " 10 min",
      Ingredients: "1- Trois dattes.\n2- 100 g de graines de grenade.\n3- 30 g de fromage blanc faible en gras.\n",
      Preparation: "1- Mettre tous les Ingredients dans le bol, puis profiter.\n",


    }]


    var Data= null;
      
    if ( this.props.language == 'Arabic'){
      Data = ListeDataAR;
    }
    else if ( this.props.language == 'French'){
      Data = ListeDataFR;
    }
    else {
      Data = ListeDataEN;
    }


    this.state = {
      ListeSousHeader: [{
        Page: this.props.ChangePageToRenderDiet,
        NamePage: < Breakfast />,
        ChangeHeader: this.props.ChangeHeaderDiet,
        Value: true,
        Name: Data.map(i=>i.Title),
      }],
    
      ListeData:Data,
    };
    
  }

 


  render() {
    const {ReduxManagedDiet}=this.props;
    return (


      <ReduxManagedDiet  

      ListeSousHeader={this.state.ListeSousHeader}
      ListeData={this.state.ListeData}
      
      />

  )



  }

}







function mapStateToProps(state) {

  return {
    pageToRenderDiet: state.pageToRenderDiet,
    showHeaderDiet: state.ChangeHeaderDiet,
    ReduxManagedDiet:state.ReduxManagedDiet,
    language: state.language,
  }
};


function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    ChangeHeaderDiet: (value) => dispatch({ type: "ChangeHeaderDiet", data: value }),
    ChangePageToRenderDiet: (page) => dispatch({ type: 'ChangePageToRenderDiet', data: page })

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DatePomegranateCheeseBowl);






