import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drinks from "./HealthyDrinks"




class AppleJuice extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/BananaPearCocktail.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
    ],
    Title:"Apple Juice With Milk",
    Min: "5 min",
    Ingredients: "1- One apple (medium size).\n2- One cup of milk low-fat (200 ml).\n",
    Preparation: "1- Using the blender, mix all ingredients together.\n"
    



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/BananaPearCocktail.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"عصير التفاح بالحليب",
      Min: "5 دقائق",
      Ingredients: "1- تفاحة واحدة (متوسطة الحجم).\n2- كوب حليب قليل الدسم (200 مل).\n",
      Preparation: "1- اخلط جمیع المكونات بالخلاط الكهرئي.\n"
      



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/English/Diet/drinktof/BananaPearCocktail.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Jus de pomme au lait",
      Min: "5 min",
      Ingredients: "1- Une pomme (taille moyenne).\n2- Une tasse de lait faible en gras (200 ml).\n",
      Preparation: "1- Dans un blender, mixez tous les ingrédients  ensemble.\n"
      



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
        NamePage: < Drinks />,
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


export default connect(mapStateToProps, mapDispatchToProps)(AppleJuice);








