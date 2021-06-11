import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class PancakeCocoa extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "cocoa Pancake",
    Min: " 15 min",
    Ingredients: "1-Two eggs.\n2-0.08 lb (40 g) of whole wheat flour.\n3-A tablespoon of unsweetened cocoa powder.\n4-Two tablespoons of peanut butter.\n5- 100ml milk.\n6-Three strawberries.\n7-Spoonful of honey.\n",
    Preparation: "1-Mix eggs, flour,milk ,peanut butter and cocoa together.\n2-Divide the mixture in three.\n3-Cook the mixture in a frying pan over low heat for 5 minutes per side.\n4-Decorate the pieces with strawberries and honey.\n" 


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "فطيرة بالكاكاو",
      Min: "15 min",
      Ingredients: "1- بيضتان.\n2-40 غرام من طحين القمح الكامل.\n3-ملعقة كبيرة من مسحوق الكاكاو غير المحلى.\n4-ملعقتين من زبدة الفول السوداني.\n5- 100 مل حليب .\n6-ثلاثة قطع من الفراولة.\n7-ملعقة من العسل.\n",
      Preparation: "1- قم بخلط كل من البيض، الطحين، الحليب ،زبدةالفول السوداني والكاكاو مع بعض.\n2-قم بتقسيم الخليط على ثلاث.\n3-قم بطبخ الخليط في مقلاة على نار هادئة لمدة  5 دقائق لكل جانب.\n4-قم بتزيين القطع بالفراولة والعسل.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Pancake au cacao",
      Min: "15 min",
      Ingredients: "1- Deux œufs.\n2-40 g de farine de blé entier.\n3-Une cuillère à soupe de poudre de cacao sans sucre.\n4-Deux cuillères à soupe de beurre de cacahuète.\n5-100 ml lait.\n6-Trois fraises.\n7-Cuillerée de miel.\n",
      Preparation: "1- Mélanger les œufs, la farine, le lait,le beurre de cacahuète et le cacao.\n2-Divisez le mélange en trois.\n4-Cuire le mélange dans une poêle à feu doux pendant 5 minutes de chaque côté.\n5-Décorez les pièces avec des fraises et du miel.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(PancakeCocoa);






