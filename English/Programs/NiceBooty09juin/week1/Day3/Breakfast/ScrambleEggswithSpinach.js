import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class YogurtOatsWithSpinachEggs extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Yogurt Oats With Spinach Eggs",
    Min: " 10 min",
    Ingredients: "1- Two eggs.\n2- 0.26 lb (120 g) of spinach.\n3- Half a spoonful of olive oil.\n4- One  plain yogurt low-fat (100 g).\n5- 0.13 lb (60 g) of oats.\n6- A piece of tomato.\n",
    Preparation: "1- Chop the spinach and then put it in the skillet with the oil for five minutes.\n2- Add eggs with spinach, then mix them well until the mixture is cooked.\n3- Place the tomatoes over the spinach and eggs mixture.\n4- Mix oats with yogurt.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "شوفان مع   الزبادي و البيض مع  السبانخ",
      Min: " 10 min",
      Ingredients: "1- بيضتين.\n2- 120 غرام من السبانخ.\n3-نصف ملعقة زيت زيتون.\n4- 100  غرام  من الياغورت قليل الدسم .\n5-60 غرام من الشوفان.\n6- قطعة طماطم.\n",
      Preparation: "1- قم بتقطيع السبانخ ثم ضعها في المقلاة مع الزيت لمدة خمسة دقائق.\n2-أضف البيض السبانخ ثم قم بمزجهم جيدا إلى ان يطبخ الخليط.\n3-ضع الطماطم فوق خليط السبانخ والبيض.\n4-امزج الشوفان مع الياغورت.\n" 



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Avoine au yogourt et oeufs aux épinards",
      Min: " 10 min",
      Ingredients: "1- Deux oeufs.\n2- 120 g d'épinards.\n3-Une demi-cuillerée d'huile d'olive.\n4-100 g de yaourt naturel.\n5-60 g d'avoine.\n6-Une tomate.\n",
      Preparation: "1- Hachez les épinards puis mettez-les dans la poêle avec l'huile pendant cinq minutes.\n2-Ajouter les œufs aux épinards, puis bien les mélanger jusqu'à ce que le mélange soit cuit.\n3-Déposer les tomates sur le mélange d'épinards et d'œufs.\n4-Mélanger l'avoine avec du yogourt.\n" 


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


export default connect(mapStateToProps, mapDispatchToProps)(YogurtOatsWithSpinachEggs);






