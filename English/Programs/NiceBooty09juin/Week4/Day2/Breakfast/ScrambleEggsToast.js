import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class DarckChocolatMandarins extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ScreambleSpinachEggs.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Eggs with Scramble Spinach ",
    Min: "15 min",
    Ingredients: " 1- Half cup of spinach (60g).\n2- One tbsp of olive oil.\n3-Two tbsp  of ricotta cheese (40g).\n4- Three slices of brown bread (80).\n5- One egg.\n",
    Preparation: " 1- In the skillet, fry the spanich in the oil over medium heat.\n2-Whisk eggs together until combined.\n3-Pour the eggs over the spinach, and cook until browned then add the ricotta cheese.\n"





  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ScreambleSpinachEggs.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "البيض المخفوق مع السبانخ",
        Min: " 15 دقيقة",
        Ingredients: "1- (60غ) نصف كوب من السبانخ.\n2- ملعقة كبيرة من زيت الزيتون.\n3-(40غ)ملعقتين كبيرتين من جبن الريكوتا.\n4-(80غ) ثلاث شرائح من الخبز الاسمر.\n5-بيضة واحدة.\n",
        Preparation: "1- في مقلاة،اقلي السبانخ في الزيت على نار هادئة.\n2-اخفق البيض  معها حتى تمتزج.\n3-اسكب البيض فوق السبانخ و اتركه حتى يصبح لونه بني ثم أضف جبن الريكوتا.\n"




    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day3/ScreambleSpinachEggs.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Œufs avec épinards brouillés",
        Min: "15 min",
        Ingredients: "1- Demi-tasse d'épinards , émincé (60 g).\n2- Une cuiérre à soupe d'huile d'olive.\n3- Deux cuiérres à soupe de fromage ricotta (40 g).\n4- Trois tranches de pain brun (80 g).\n5- Un œuf.\n",
        Preparation: "1- Dans la poêle, faire frire les épinards dans l'huile à feu moyen.\n2-Fouetter les œufs ensemble jusqu'à ce qu'ils soient combinés.\n3-Verser les œufs sur les épinards et cuire jusqu'à ce qu'ils soient dorés puis ajouter la ricotta.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(DarckChocolatMandarins);






