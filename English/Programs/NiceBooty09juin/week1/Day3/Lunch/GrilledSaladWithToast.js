import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class GrilledSaladWithToast extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/Grilled%20salad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Grilled Salad With Toast",
    Min: "30 min",
    Ingredients: "1-Two peppers.\n2-One onion.\n3-Two garlic.\n4-Two tomatoes.\n5-One boiled egg.\n6-Tuna 0.22 lb ( ca 100 g).\n7-Three brown toasts(75g).\n8-Four spice, salt, and black pepper.\n9-One tbsp of olive oil.\n",
    Preparation: "1-Preheat the oven over 180°C (356°F).\n2-Cut the vegetables into small slices.\n3-Spread the vegetables on the pan.\n4-Bake the vegetables in the oven for 15 minutes.\n5-Mix all vegetables in the blender, then sprinkle with, salt, pepper, and four spice.\n6-Top the vegetable mixture with tuna and egg in the middle, with olive oil.\n7-Eat the salad with brown toast.\n"




  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/Grilled%20salad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "سلطة مشوية",
      Min: "30 دقيقة",
      Ingredients: "1- 2 فلفل.\n2- حبة بصل.\n3- 2 ثوم.\n4- 2 طماطم.\n5- بيضة مسلوقة.\n6- تن ( حوالي 100 غ) .\n7- (75 غ ) 3 توست بني.\n8- التوابل الاربع، الملح و الفلفل الاسود.\n9- ملعقة كبيرة من زيت الزيتون.\n",
      Preparation: "1- 180°C سخن الفرن على درجة حرارة.\n2- قطع الخضروات الى قطع صغيرة.\n3- ضع الخضروات في طبق.\n4- اطهي الخضروات في الفرن لمدة 15 دقيقة.\n5- نخلط جميع الخضار في الخلاط ، ثم نرشها بالملح ، والفلفل ، وأربع بهارات .\n6- يُسكب مزيج الخضار مع التونة والبيض في المنتصف  مع زيت الزيتون.\n7- تناول السلطة مع خبز التوست.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day4/Grilled%20salad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "Salade Grillée",
      Min: " 30 min",
      Ingredients: "1-Deux poivrons.\n2-Un oignon.\n3-Deux ail.\n4-Deux tomates.\n5-Un œuf dur.\n6- 100 g thon.\n7-Trois toasts bruns (75g).\n8-Quatre épices, sel et poivre noir.\n9-Une cuillère à soupe d'huile d'olive .\n",
      Preparation: "1-Préchauffer le four à 180 °C.\n2-Couper les légumes en petites tranches.\n3-Étaler les légumes sur la poêle.\n4-Cuire les légumes au four pendant 15 minutes.\n5-Mélangez tous les légumes dans le mixeur, puis saupoudrez de sel, poivre et quatre épices.\n6-Reposez le mélange de légumes avec le thon et l'oeuf au milieu, avec de l'huile d'olive.\n7-Mangez la salade avec du pain grillé.\n"

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


export default connect(mapStateToProps, mapDispatchToProps)(GrilledSaladWithToast);






