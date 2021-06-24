import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class OrangekiwiSaladWithChia extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/Orange%20walnuts%20salad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Orange, kiwi Salad With Chia",
        Min: " 15 min ",
        Ingredients: "1-0.44 lb (200 g) orange.\n2-0.15 lb (70 g) kiwi.\n3-One tablespoon of chia seeds(20g).\n4- Two white eggs.\n5- three basil leaves.\n6- tablespoon vinegar.\n7- One small tomato.\n",
        Preparation: "1-Cut the kiwi and oranges into large cubes.\n2-Mix the kiwi and orange and sprinkle the chia on top.\n3- Cut the tomatoes into small cubes.\n4- Chop the basil and mix it with tomatoes.\n5- Boil the water with vinegar.\n6- Stir the water in a circular motion.\n7- Put the egg white in the water while the water is bowled and leave it until soft.\n8- Place the mixture of tomato basil with egg white next to a bowl of orange and kiwi salad.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/Orange%20walnuts%20salad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "سلطة البرتقال والكيوي مع الشييا",
        Min: " 15 دقيقة ",
        Ingredients: " 1- 200 غ برتقال.\n2-70 غ كيوي.\n3- ملعقة  (غ20) من بذور الشييا.\n4- أبيض بيضتين.\n5-ثلاث أوراق ريحان.\n6-ملعقة كبيرة خل.\n7-حبة طماطم صغيرة.\n",
        Preparation: " 1- قطع الكيوي و البرتقال إلى مكعبات كبيرة.\n2-أخلط الكيوي و البرتقال و رش فوقها الشييا.\n3-قطع الطماطم إلى مكعبات صغيرة.\n4-أفرم الريحان و  إخلطه  مع الطماطم.\n5-غلي الماء مع الخل.\n6-حرك الماء بشكل دائري.\n7-ضع أبيض البيض في الماء أثناء تحرك الماء و أتركه حتى ينضج.\n8-ضع مزيج الطماطم ريحان مع بياض البيض إلى جانب وعاء سلطة البرتقال والكيوي.\n" 




    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/Orange%20walnuts%20salad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Salade d'orange et kiwi avec chia",
      Min: "15 min ",
      Ingredients: "1-200g d'orange.\n2-70 g de kiwi.\n3- Une cuillère à soupe (20g) de graines de chia.\n4- Deux blanc d'œufs.\n5- trois feuilles de basilic.\n6- cuillère à soupe de vinaigre.\n7- Une  petite tomate\n",
      Preparation: "1-Coupez le kiwi et les oranges en gros cubes.\n2- Mélangez le kiwi et l'orange et saupoudrez le chia dessus.\n3- Coupez les tomates en petits cubes.\n4- Hachez le basilic et mélangez-le avec les tomates.\n5- Faites bouillir l'eau avec du vinaigre.\n6- Remuez l'eau dans un mouvement circulaire.\n7- Mettez le blanc d'oeuf dans l'eau pendant que l'eau est cuite et laissez-le jusqu'à ce qu'il soit ramolli.\n8- Placez le mélange de tomate basilic au blanc d'œuf à côté d'un bol de salade d'orange et de kiwi.\n" 


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


export default connect(mapStateToProps, mapDispatchToProps)(OrangekiwiSaladWithChia);













