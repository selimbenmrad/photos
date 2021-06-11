import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class YogurtKiwiWithToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Yogurt Kiwi With Toast",
    Min: "5 min",
    Ingredients: "1- One boiled egg.\n2- Four  toasts (ca.75 g).\n3- Half tbsp of honey.\n4- One natural yogurt low fat.\n5- One kiwi.\n6- One tbsp of peanut butter.\n",
    Preparation: "1- Mix the yogurt and the honey together in a bowl, then add the kiwi in the mixture.\n2- Put the toast and spread the peanut butter,put the egg on the side .\n" 




  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "زبادي بالفول السوداني و الكيوي",
        Min: " 5 دقائق",
        Ingredients: " 1- بيضة مسلوقة.\n2- اربع قطع توست (حوالي.75 غ).\n3-نصف ملعقة كبيرة من العسل.\n4-زبادي طبيعي قليل الدسم.\n5-حبة كيوي.\n6-ملعقة كبيرة من زبدة الفول السوداني\n",
        Preparation: " 1- اخلط الزبادي و العسل في وعاء معا, ثم اضف الكيوي فوق الخليط.\n2-افرد زبدة الفول السوداني فوق التوست ثم ضع البيض على جانب .\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Yogourt à la cacahuète et au kiwi",
        Min: " 5 min",
        Ingredients: " 1-Un œuf à la coque.\n2- Quatre toasts (environ 75 g).\n3-Une demi-cuillère à soupe de miel.\n4-Un yogourt naturel faible en gras.\n5-Un kiwi.\n6-Une cuillère à soupe de beurre de cacahuète.\n",
        Preparation: " 1-Mélangez le yaourt et le miel dans un bol, puis garnissez le mélange de kiwi.\n2-Mettez le pain grillé et étalez le beurre de cacahuète,mettre les oeufs de côté .\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(YogurtKiwiWithToast);






