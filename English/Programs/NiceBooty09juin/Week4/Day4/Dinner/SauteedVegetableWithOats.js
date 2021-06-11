import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breakfast from "./EasyHealthyBreakfast"




class SauteedVegetableWithOats extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"}
    ],
    Title:"Sauteed Vegetable With Oats",
    Min: "30 min",
    Ingredients: "1- 100 g of mushrooms.\n2- One  small zucchini.\n3- One  carrot (75g).\n4- Two peppers.\n5- One tomato.\n6-a clove of garlic.\n7- A spoonful of olive oil.\n8- Three eggs.\n9- 0.11 lb (50 g) of oats.\n",
    Preparation: "1- Cut the vegetables lengthwise.\n2- Cook the carrots in boiling water for 10 minutes, then add the zucchini and cook them together for another 10 minutes.\n3- Heat a spoonful of oil olive oil in a pan and add the mushrooms, peppers, and tomato with a clove of garlic and sauté for 3 minutes.\n4- Add the zucchini, carrot, a little water with salt and pepper black, and stir until the vegetables are cooked.\n5-Mix the eggs and the oats, and cook in a pan (non-stick) for 7 minutes.\n6-In a plate put the oats-omelet with sautéed vegetables and mushrooms.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"خضار سوتيه مع  الشوفان",
      Min: "30 دقيقة",
      Ingredients: "1- 100غ فطر.\n2 ( 75 غ )  حبة كوسة صغيرة .\n3- ( 75 غ ) حبة جزر .\n4- حبتين فلفل.\n5- حبة طماطم.\n6-فص ثوم.\n7- ملعقة زيت زيتون.\n8- ثلاث بيضات .\n9- 50 غ شوفان.\n",
      Preparation: "1- قطّع الخضار بالطول.\n2- اطهي الجزر في الماء المغلي لمدة 10 دقائق ، ثم أضف الكوسا واطهيهما معًا لمدة 10 دقائق أخرى.\n3- سخني ملعقة زيت زيتون في مقلاة وأضيفي الفطر والفلفل ، والطماطم مع فص ثوم ونقلبها لمدة 3 دقائق.\n4- أضف الكوسة والجزر والقليل من الماء والملح والفلفل الأسود وحركي حتى تنضج الخضار.\n5-اخلط البيض والشوفان ، واطهه في مقلاة (غير لاصقة) لمدة 7 دقائق.\n6- في طبق ضع أمليت الشوفان مع الخضار المقلية والفطر.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/Files/blob/master/Pap%20Toest.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      ],
      Title:"Légumes sautés et omelette à l'avoine",
      Min: "30 min",
      Ingredients: "1- 100 g de champignons.\n2- 75 g d'une petite courgette.\n3- 75 g d'une carotte.\n4- 75 g de deux poivrons.\n5- 75 g d'une tomate.\n6- Une gousse d'ail.\n7- A cuillerée d'huile d'olive.\n8- Trois œufs.\n9- 50 g de flocons d'avoine.\n",
      Preparation: "1- Coupez les légumes dans le sens de la longueur.\n2- Faites cuire les carotte dans l'eau bouillante pendant 10 minutes, puis ajoutez les courgettes et laissez-les cuire ensemble pendant 10 minutes supplémentaires.\n3- Chauffez une cuillerée d'huile d'olive  dans un poêle et ajoutez les champignons , les poivrons et le tomate avec une gousse d'ail et faites revenir pendant 3 minutes.\n4- Ajouter le courgette , le carotte, un peu d'eau avec du sel et du poivre noir et remuer jusqu'à ce qu' les légumes soient cuit.\n5- Mélanger les œufs et les flocons d'avoine, et cuire dans une poêle (antiadhésive) pendant 7 minutes.\n6- Dans une assiette mettre l l'omelette de flocons d'avoine avec les légumes  et les champignons sautés.\n"



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


export default connect(mapStateToProps, mapDispatchToProps)(SauteedVegetableWithOats);








