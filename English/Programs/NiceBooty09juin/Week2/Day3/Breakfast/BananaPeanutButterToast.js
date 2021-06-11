import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class BananaPeanutButterToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"}
    ],
    Title:"Banana Peanut Butter Toast",
    Min: " 5 min",
    Ingredients: "1- Four slices of whole-wheat bread toast (100g).\n2- Two tbsps of peanut butter (25g).\n3- One  small banana, sliced (150g).\n4- Half tsp of cinnamon powder.\n",
    Preparation: "1- Spread peanut butter over the toast.\n2- Put the slices of  banana  on the top of the toast.\n3- Sprinckle  the toasts with  cinnamon.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"توست بزبدة الفول السوداني والموز",
      Min: " 5 دقائق",
      Ingredients: "1-أربع شرائح توست من القمح الكامل (100 غ)\n2-ملعقتان كبيرتان من زبدة الفول السوداني (25 غ).\n3-موزة صغيرة مقطعة إلى شرائح (150 غ).\n4- نصف ملعقة صغيرة من مسحوق القرفة.\n",
      Preparation: "1- يُدهن الخبزالمحمّص بزبدة الفول السّودانيّ.\n2- ضع شرائح الموز فوق الخبز المحمص.\n3-رش الخبز المحمص  و الموز بالقرفة.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Toast aux bananes et au beurre d'arachide",
      Min: " 5 min",
      Ingredients: "1- Quatre tranches de pain grillé de blé entier (100g).\n2- Deux cuillères à soupe de beurre de cacahuète.\n3- Une petite banane, tranchée (150g).\n4- Une demi-cuillère à café de cannelle en poudre.\n",
      Preparation: "1- Tartiner du pain grillé avec du beurre de cacahuète.\n2- Mettre les tranches de  banane sur le dessus.\n3- Saupoudrez les toasts de cannelle.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(BananaPeanutButterToast);








