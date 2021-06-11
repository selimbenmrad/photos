import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class QuinoaFishSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/QuinoaFishSalad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Quinoa Fish Salad",
    Min: " 20 min",
    Ingredients: "1-0.22 lb (ca.100 g) of tomato.\n2-One small onion.\n3-One tbsp of parsley.\n4-0.22 lb (ca.100 g) of quinoa.\n5-0.441 lb (ca.200 g) of white fish.\n6-Two garlic.\n7-Salt, pepper, and  cumin.\n8-Half tbsp of lemon juice.\n9-One tbsp of olive oil.\n",
    Preparation: "1-Boil the quinoa for 15 minutes, then drain it from the water.\n2-Cut the tomatoes into pieces.\n3- Mix the tomato with lemon juice, garlic , parsley, onion and  quinoa.\n4-Drizzle the fish with olive oil, salt and pepper and cumin.\n5-Put the fish in the oven for 15 minutes.\n6-Cut the fish into little pieces.\n7-On the plate, put the fish with quinoa salad.\n"





  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/QuinoaFishSalad.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"سلطة سمك والكينيوا",
        Min: "20 دقيقة",
        Ingredients: "1- 100 غ من الطماطم.\n2-بصلة صغيرة.\n3-ملعقة كبيرة بقدونس.\n4- 100 غ من الكينوا.\n5- 200 غ  من السمك الأبيض.\n6- ثومان.\n7- ملح ، فلفل ، وكمون.\n8- نصف ملعقة كبيرة عصير ليمون.\n9- ملعقة كبيرة زيت زيتون.\n",
        Preparation: "1- اسلق الكينوا لمدة 15 دقيقة، ثم صفيها من الماء.\n2- قطّع الطماطم إلى قطع.\n3- اخلط الطماطم مع عصير الليمون والثوم والبقدونس والبصل والكينوا.\n4- تبل السمك بزيت الزيتون والملح والفلفل ، و كمون.\n5- ضع السمك في الفرن لمدة 15 دقيقة.\n6- قطّع السمك إلى قطع صغيرة.\n7- ضع السمك مع سلطة الكينوا على الطبق.\n"




    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day4/QuinoaFishSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Salade de poisson au quinoa",
      Min: "20 min",
      Ingredients: "1-100 g de tomate.\n2-Un petit oignon.\n3-Une cuillère à soupe de persil.\n4-100 g de quinoa.\n5-200 g de poisson blanc.\n6-Deux ail.\n7-Sel, poivre et cumin.\n8-Une demi-cuillère à soupe de jus de citron.\n9-Une cuillère à soupe d'huile d'olive.\n",
      Preparation: "1-Faites bouillir le quinoa pendant 15 minutes, puis l'égoutter de l'eau.\n2-Coupez les tomates en morceaux.\n3- Mélangez la tomate avec le jus de citron, l'ail, le persil, l'oignon et le quinoa.\n4- Arrosez le poisson d'huile d'olive, sel, poivre et cumin.\n5- Mettez le poisson au four pendant 15 minutes.\n6-Coupez le poisson en petits morceaux.\n7-Dans l'assiette, mettez le poisson avec la salade de quinoa.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(QuinoaFishSalad);






