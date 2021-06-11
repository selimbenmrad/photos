import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class CarrotChickpeaSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Carrot Chickpea Salad",
    Min: " 60 min",
    Ingredients: "1-One cup  soaked chickpeas (160g).\n2- three carrots (200g).\n3-160g Tuna.\n4- Salt.\n5-One Tbsp olive oil.\n",
    Preparation: "1-In a bowl, boil in water the carrot for about 10 minutes.\n2-In a pot, boil the chickpeas for one hour until tender then drain it from the water.\n3-Mix the chickpeas with cooked vegetables, olive oil, salt then top with Tuna.\n" 




  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "سلطة الحمص و الجزر",
      Min: " 60 دقيقة",
      Ingredients: "1- (160 غ) 1 كوب  حمص منقوع.\n2- (200غ) ثلاث حبات جزر .\n3-تونة  160غ\n4- ملح \n5-ملعقة كبيرة من زيت الزيتون.\n",
      Preparation: "1- اسلق الجزر في ماء لمدة 10 دقائق.\n2- في وعاء اخر اغلي الحمص لمدة ساعة حتى ينضج ثم صفيه من الماء.\n3-اخلط الخضار المطبوخة مع الحمص و اضف زيت الزيتون و الملح و التونة.\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Salade de pois chiches aux carottes",
        Min: "60 min",
        Ingredients: "1-Une tasse de pois chiches trempée (160 g).\n2-Trois carottes (200g).\n3-160g Thon.\n4-Sel.\n5-Une cuillère à soupe d'huile d'olive.\n",
        Preparation: "1-Dans un bol, faire bouillir dans l'eau la carotte et les haricots verts pendant environ 10 minutes.\n2-Dans une casserole, faire bouillir les pois chiches pendant une heure jusqu'à ce qu'ils soient tendres puis l'égoutter de l'eau.\n3-Mélanger les pois chiches avec les légumes cuits, l'huile d'olive, le sel puis garnir de Thon.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(CarrotChickpeaSalad);






