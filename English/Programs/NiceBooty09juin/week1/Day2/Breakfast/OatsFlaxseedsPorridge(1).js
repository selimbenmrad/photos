import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class OatsFlaxseedsPorridge extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/StrawberryJuice.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Oats Flaxseeds Porridge",
    Min: "15 min",
    Ingredients: "1-200 ml of  milk low-fat.\n2-0.13 lb (60 g) of oat flour.\n3-One tbsp of honey (20g).\n4-0.04 lb (20 g) of flax seeds.\n",
    Preparation: "1-Put the milk in a saucepan over low heat with the addition of oat flour with constant stirring.\n2-Add honey, mix, and stir until you get porridge.\n3-Garnish the porridge with flaxseeds.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/StrawberryJuice.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "عصيدة الشوفان و بذور الكتان",
        Min: " 15 min",
        Ingredients: "1- 100 مللتر من الحليب قليل  الدسم.\n2- 60 غرام من طحين الشوفان.\n3-ملعقة  من العسل.\n4-20 غرام من بذور الكتان\n",
        Preparation: "1- قم بوضع الحليب في قدر على نار هادئة مع إضافة طحين الشوفان مع التحريك الدائم.\n2-اضف العسل المزيج مع التحريك الى ان تتحصل على عصيدة  .\n3-زين العصيدة ببذور الكتان.\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week1/Day1/StrawberryJuice.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Porrige d'avoine et de grain de lin",
        Min: " 15 min",
        Ingredients: "1-200 ml de lait demi-écrémé.\n2-60 g de farine d'avoine.\n3-20 g de miel.\n4-20 g de graines de lin.\n",
        Preparation: "1-Mettre le lait dans une casserole à feu doux et ajouter la farine d'avoine en remuant constamment.\n2-Ajouter le miel, mélanger et remuer jusqu'à ce que vous obteniez du porridge.\n3-Garnir la bouillie de graines de lin.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(OatsFlaxseedsPorridge);






