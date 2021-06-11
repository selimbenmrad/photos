import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class OrangeAppleSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OrangeApplesalad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Orange Apple Salad",
    Min: "5 min",
    Ingredients: "1- One orange\n2- One small apple.\n3- One basil leaf\n4-One tbsp of rose water (optional).\n",
    Preparation: "1- Cut the orange into small pieces.\n2- Cut the apple into small pieces.\n3- Mix the fruits together.\n4- Drizzle the mixture with a basil leaf and rose water.\n" 


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OrangeApplesalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "سلطة البرتقال و التفاح",
      Min: " 5 دقائق",
      Ingredients: "1- برتقالة.\n2-تفاحة صغيرة.\n3-ورقة ريحان.\n4-ملعقة كبيرة من ماء الورد (اختياري).\n",
      Preparation: "1- قطع البرتقالة الى قطع صغيرة.\n2-قطع التفاحة الى قطع صغيرة.\n3-امزج الفواكه مع بعضها.\n4-رش الخليط بورق الريحان و ماء الورد.\n" 


    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day2/OrangeApplesalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Salade d'orange et de pomme",
      Min: "5 min",
      Ingredients: "1-Une orange.\n2-Une petite pomme.\n3-Une feuille de besilic.\n4-Une cuillére à soupe d'eau de rose (optionel).\n",
      Preparation: "1-Coupez l'orange en petits morceaux.\n2-Coupez la pomme en petits morceaux.\n3-Mélangez les fruits ensemble.\n4-Arrosez le mélange avec une feuille de basilic et de l'eau de rose.\n" 

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
        NamePage: < Desserts />,
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


export default connect(mapStateToProps, mapDispatchToProps)(OrangeAppleSalad);






