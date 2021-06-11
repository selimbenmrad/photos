import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class SavoryBreakfast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"}
    ],
    Title:"Savory Breakfast",
    Min: " 5 min",
    Ingredients: "1- Four slices of whole-wheat bread toast (100g).\n2- Four tbsp of cottage cheese (60g).\n3- One tomato.\n4- salt and black pepper, thyme.\n5-a small spoon of olive oil.\n",
    Preparation: "1- Cut the tomatoes into small cubes and season with salt, black pepper, thyme, and olive oil.\n2-Spread cottage cheese  over the toasts then put the tomato mixture on top.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"توست الجبنه و الطماطم",
      Min: " 5 دقائق",
      Ingredients: "1- أربع شرائح توست من القمح الكامل (100 غ ).\n2- أربع ملاعق كبيرة من جبنة قريش  (60 غ).\n3-حبة طماطم.\n4- ملح وفلفل أسود و زعتر.\n5-ملعقة صغيرة زيت زيتون.\n",
      Preparation: "1- قطع الطماطم إلى مكعبات صغيرة وتتبل بالملح والفلفل الأسود والزعتر وزيت الزيتون.\n2- افرد  جبن قريش فوق التوست وضع فوقها خليط الطماطم.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Petit-déjeuner salé",
      Min: " 5 min",
      Ingredients: "1- Quatre tranches de pain grillé de blé entier (100 g).\n2- Quatre cuillères à soupe de fromage cottage (60g).\n3- Une tomate.\n4- sel et poivre noir, thym.\n5-une petite cuillère d'huile d'olive.\n",
      Preparation: "1- Coupez les tomates en petits cubes et assaisonnez avec du sel, du poivre noir, du thym et de l'huile d'olive.\n2-Étalez du fromage cottage sur les toasts puis déposez le mélange de tomates sur le dessus.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(SavoryBreakfast);








