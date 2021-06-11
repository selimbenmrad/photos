import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class PumpkinPasteSandwich extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
    ],
    Title:"Pumpkin Paste Sandwich",
    Min: " 15 min",
    Ingredients: "1- Two slices of whole wheat bread (100g).\n2- 0.397 lb (ca. 180 g) of chopped  pumpkin.\n3- One tbsp of olive oil.\n4- Two poached eggs.\n5- Pinch of salt.\n6- One teaspoon of turmeric.\n7- Olive (8g) and parsley.\n ",
    Preparation: "1- Heat the oil in a frying pan over medium heat, then add the pumpkin, fry 5 minutes.\n2- Add half a cup of water, salt, and turmeric (cook until the pumpkin is soft and we get a sauce).\n3- Spread the bread with pumpkin sauce, then add  poached eggs, olives, and parsley to it.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"ساندوتش بمعجون اليقطين",
      Min: "15 دقيقة",
      Ingredients: "1- (100 غرام ) شريحتان من خبز القمح الكامل.\n2- 180 غرام من اليقطين (مقشّر و مقطّع).\n3- ملعقة  أكل من زيت الزّيتون.\n4- بيضتان مسلوقتان مقطّعة (شرائح).\n5-القليل من الملح (حسب الرّغبة).\n6- ملعقة صغيرة من الكركم المرحيّ.\n7- للتّزيين: حبّات زيتون و القليل من البقدونس المقطّع.\n ",
      Preparation: "1 سخِّن الزّيت في مقلاة على نار متوسّطة ثمّ أضف اليقطين يقلّى قليلا.\n2- أضف نصف كوب ماء ،الملح والكركم (يطبخ إلى ان ينضج اليقطين و نتحصّل على صلصة).\n3- ادهن الخبز بصلصة اليقطين ثمّ أضف عليها القليل من  البيض المسلوق ،الزّيتون والبقدونس.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/pumpkin%20pasta%20sandwich.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      ],
      Title:"Sandwich à la citrouille",
      Min: " 15 min",
      Ingredients: "1- Deux tranches de pain de blé entier (100g).\n2- 180g de citrouille.\n3- Une cuillère à soupe d'huile d'olive.\n4- Deux œufs pochés.\n5- un peu de sel.\n6- Une cuillère à café de curcuma .\n7- Olive (8g) et persil.\n",
      Preparation: "1- Chauffer l'huile dans une poêle à feu moyen, puis ajouter la citrouille, faire sauter un peu. \n2- Ajouter une demi-tasse d'eau, sel et curcuma (cuire jusqu'à ce que la citrouille soit cuite et obtenir une sauce).\n3- Graisser le pain avec la sauce à la citrouille, puis y ajouter quelques œufs durs, olives et persil.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(PumpkinPasteSandwich);









