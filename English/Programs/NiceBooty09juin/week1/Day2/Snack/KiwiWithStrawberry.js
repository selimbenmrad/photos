import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class KiwiWithStrawberry extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/KiwiWithStrawberry.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Kiwi With Strawberry",
        Min: "5 min",
        Ingredients: "1- Five strawberries.\n2- 2 kiwi.\n3- One tbsp dried basil (optional).\n4- Two tbsps of flower water (optional).\n5- 0.33 lb (15 g) almond.\n",
        Preparation: "1- Cut up strawberry and kiwi into pieces, then mix all ingredients together.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/KiwiWithStrawberry.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "كيوي بالفراولة",
        Min: "5 دقائق",
        Ingredients: "1- خمس حبات فراولة.\n2- حبتين من الكيوي.\n3- ملعقة كبيرة ريحان مجفف (اختياري).\n4- ملعقتان كبيرتان من ماء ال (اختياري) .\n5- 15 غ لوز .\n ",
        Preparation: "1- قطع الفراولة و الكيوي الى قطع و امزج المكونات معا .\n" 

    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/KiwiWithStrawberry.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Kiwi avec fraise",
      Min: "5 min",
      Ingredients: "1- Cinq fraise.\n2- Deux kiwi.\n3- Une cuiérre à soupe de basilic séchéé (optionel).\n4- Deux cuillères à soupe d'eau de fleur (optionel).\n5- 15 g d'amande.\n",
      Preparation: "1- Coupez la fraise et le kiwi en morceaux.\n2-Mélangez tous les ingrédients ensemble.\n" 


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


export default connect(mapStateToProps, mapDispatchToProps)(KiwiWithStrawberry);






