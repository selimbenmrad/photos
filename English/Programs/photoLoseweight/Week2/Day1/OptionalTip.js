import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class OptionalTipOfTheDay extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},

    ],
    Title:"Optional Tip Of The Day",
    
    OptionnelTip: "Whenever you feel hungry between meals, eat fresh vegetables. Vegetables contain very small amounts of  calories, and they are rich in vitamins and minerals and give a feeling of fullness .\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: " . كلما شعرت بالجوع  بين الوجبات  ،  تناول الخضار الطازجة, فالخضراوات تحتوي على كميات قليلة  جداً من الدهون والسعرات الحرارية ، كما انها غنية  بالفيتامينات والمعادن وتعطي الشعور بالشبع \n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Chaque fois que vous avez faim entre les repas, mangez des légumes frais. Les légumes contiennent de très petites quantités de graisses et de calories, et ils sont riches en vitamines et minéraux et donnent une sensation de satiété .\n",


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
        NamePage: < LunchOrDinner />,
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


export default connect(mapStateToProps, mapDispatchToProps)(OptionalTipOfTheDay);