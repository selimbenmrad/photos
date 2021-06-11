import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class MushroomRiceWhiteFish extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Rice with mushrooms and white fish",
    Min: "40 min",
    Ingredients: "1- 0.33 lb (150 g) of white fish.\n2- 0.33 lb (150 g) of spinach.\n3-0.55 lb (250 g) of pumpkin.\n4- 0.11 lb (50 g) of mushroom.\n5-0.33 lb (150 g) of rice.\n6-A tablespoon of olive oil.\n7-3 Cloves of garlic.\n8-Salt and black pepper.\n",
    Preparation: "1- Cut the pumpkin into cubes and put it in boiling water for 14 minutes.\n2- Mash the pumpkin well and season with salt and black pepper.\n3-Put the spinach in a frying pan with a little oil and stir for 5 minutes.\n4-Cook the mushrooms and garlic in the skillet with the oil for 7 minutes while stirring.\n5-Cook the rice in boiling water for 15 minutes while stirring.\n6-Drain the rice and sprinkle with salt and black pepper.\n7-Season the fish with salt and black pepper and put in the oven for 10 minutes at a temperature of 302°F (150°C).\n8-In a plate, place the rice, mushrooms, the cooked vegetables and the fish.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"الأرز بالفطر مع السمك الأبيض",
        Min: "40 دقيقة",
        Ingredients: "1- 150 غرام من سمك الابيض.\n2- 150 غرام من السبانخ.\n3-250 غرام من اليقطين .\n4- 50 غرام من الفطر.\n5- 150 غرام من الأرز .\n6- ملعقة كبيرة من زيت الزيتون.\n7-3فصوص ثوم.\n8-ملح وفلفل اسود.\n",
        Preparation: "1- قطع اليقطين لمكعبات و ضعه في الماء المغلي لمدة 14 دقيقة.\n2- اهرس اليقطين جيدا و تبله  بالملح و الفلفل الأسود.\n3-ضع السبانخ في مقلاة مع قليل من الزيت و تقلب لمدة 5 دقائق .\n4- اطهي الفطر والثوم في المقلاة مع زيت لمدة 7 دقائق مع تحريك.\n5-اطهي الأرز في الماء المغلي لمدة 15 دقيقة مع تحريك.\n6-قم بتصفية الأرز ورش عليه القليل من الملح والفلفل أسود.\n7-يتبل السمك بالملح والفلفل الأسود ويوضع  في الفرن لمدة 10 دقائق على درجة حرارة 150 درجه.\n8-في صحن  ضع  الأرز مع الفطر  والخضار المطبوخة الى جانب السمك.\n"




    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Riz aux champignons et poisson blanc",
      Min: "40 min",
      Ingredients: "1-150 g de poisson blanc ( un filet).\n2-150 g d'épinards.\n3-250 g de citrouille\n4-50 g de champignons.\n5-150 g de riz.\n6-Une cuillère à soupe d'huile d'olive.\n7- 3 gousses d'ail.\n8- Sel et poivre noir.\n",
      Preparation: "1-Coupez la citrouille en cubes et mettez-la dans l'eau bouillante pendant 14 minutes.\n2- Écrasez bien la citrouille et assaisonnez avec du sel et du poivre noir.\n3- Placez les épinards dans une poêle avec un peu d'huile et remuez pendant 5 minutes.\n4- Faites cuire les champignons et l'ail dans la poêle. Avec de l'huile pendant 7 minutes en remuant.\n5- Faites cuire le riz dans l'eau bouillante pendant 15 minutes en remuant.\n6- Filtrez le riz et saupoudrez-le d'un peu de sel et de noir poivre.\n7- Assaisonner le poisson avec du sel et du poivre noir et mettre au four pendant 10 minutes A une température de 150 ° C.\n8- Dans un bol, déposer le riz aux champignons et les légumes cuits, avec le poisson.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(MushroomRiceWhiteFish);






