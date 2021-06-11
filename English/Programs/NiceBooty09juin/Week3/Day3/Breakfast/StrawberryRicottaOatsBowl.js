import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class StrawberryRicottaOatsBowl extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Strawberry Ricotta Oats Bowl",
    Min: "5 min",
    Ingredients: "1- Eight tbsps (ca.80 g) of oats.\n2- 0.22 lb (100 g) strawberries.\n3- Five tbsp of ricotta cheese low-fat (50g).\n4- One cup of milk low-fat (200 ml).\n",
    Preparation: "1- In the blender, mix the strawberries and milk together , then pour it into bowl.\n2-Add oats and ricotta cheese to the mixture.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "صحن شوفان بالفراولة مع الريكوتا ",
        Min: "5 دقائق",
        Ingredients: "1- 80 غ  شوفان.\n2- 100 غ  فراولة.\n3-خمس ملاعق كبيرة من جبن الريكوتا قليل الدسم (50 غ ).\n4- كوب واحد من الحليب قليل الدسم (200 مل).\n",
        Preparation: "1- في الخلاط ، اخلط الفراولة والحليب معًا ، ثم اسكبيهما في وعاء.\n2- أضف الشوفان وجبن الريكوتا إلى الخليط.\n" 


    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/GranolaMix.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Avoine aux Fraises et Ricotta",
        Min: "5 min",
        Ingredients: "1- 80 g d'avoine.\n2- 100 g de fraises.\n3- Cinq cuillères à soupe de fromage ricotta (50 g).\n4- Une tasse de lait faible en gras (200 ml).\n",
        Preparation: "1- Dans le mélangeur, mélangez les fraises et le lait ensemble, puis versez-le dans un bol.\n2- Ajoutez de l'avoine et du fromage ricotta au mélange.\n"  

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


export default connect(mapStateToProps, mapDispatchToProps)(StrawberryRicottaOatsBowl);






