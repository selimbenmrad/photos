import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class BlackBeansSauce extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Black Beans Sauce",
    Min: "35 min",
    Ingredients: "1- 0.55 lb (ca.250 g) of red beans.\n2- 0.55 lb (ca.300 g) of tomatoes.\n3- One tbsp olive oil.\n4- Two garlic.\n5- Two white eggs\n6- Salt, black pepper and four-spices.\n",
    Preparation: "1- Boil the tomato for 10 minutes.\n2- Blend the tomato, olive oil, and garlic together in the blender.\n3-In the pan, cook the tomato mixture and red beans with one cup of water for 20 minutes.\n4- Season the sauce with salt, black pepper, and four-spices.\n5- Add white egg to the sauce, cook for an additional 5 minutes.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "صلصة الفاصوليا الحمراء",
      Min: "35 دقيقة",
      Ingredients: "1- 250 غ من الفاصوليا الحمراء .\n2- 300 غ من الطماطم.\n3- ملعقة كبيرة من زيت الزيتون.\n4- حبتي ثوم.\n5- 2 ابيض بيض.\n6- ملح،فلفل اسود، بهارات اربع.\n",
      Preparation: "1- اغلي الطماطم لمدة 10 دقائق.\n2- اخفق الطماطم و زيت الزيتون و الثوم في الخلاط معا.\n3-يطهى مزيج الطماطم مع الفاصوليا الحمراء  في مقلاة مع كوب ماء لمدة 20 دقيقة.\n4-تبل الصلصة بالملح و الفلفل الاسود و البهارات الاربع.\n5- اضف البيضة الى الصلصة و اطبخها لمدة 5 دقائق.\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Sauce aux haricots rouge",
        Min: "35 min",
        Ingredients: "1- 250 g de haricots rouge.\n2- 300 g de tomate.\n3- Une cuillère à soupe d'huile d'olive.\n4- Deux ail.\n5- Deux œufs blancs.\n6- Sel , poivre noir et quatre épices.\n",
        Preparation: "1- Faites bouillir la tomate pendant 10 minutes.\n2- Mélangez la tomate, l'huile d'olive et l'ail dans le mixeur.\n3- Dans la poêle, faites cuire le mélange de tomates et les haricots rouges avec une tasse d'eau pendant 20 minutes.\n4- Assaisonnez la sauce avec du sel, du poivre noir et 4 épices.\n5- Ajouter l'oeuf blanc à la sauce, cuire encore 5 minutes.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(BlackBeansSauce);






