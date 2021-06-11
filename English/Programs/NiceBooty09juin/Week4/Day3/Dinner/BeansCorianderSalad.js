import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class BeansCorianderSalad extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
    ],
    Title: "Beans Coriander Salad",
    Min: "35 min",
    Ingredients: "1- 0.33 lb (ca. 150 g) green beans.\n2- 0.39 lb (ca.180 g) white beans (soaked in water overnight).\n3- 0.22 lb (ca.100g) tomatoes.\n4- One small onion.\n5- Ten coriander leaves.\n6- A teaspoon of balsamic vinegar.\n7- A tablespoon of oil Olives.\n8- Salt, black pepper.\n9- 0.06 lb (30 g) of low-fat feta cheese.\n",
    Preparation: "1- Cook the white beans for an hour (you should add hot water if it is finished before they are cooked).\n2- Meanwhile, cook the green beans in another pot of boiling water for half an hour.\n3- Chop the tomatoes, onion and coriander.\n4- Drain the green and white beans from the water and put them in a bowl.\n5- Add the chopped vegetables, feta cheese, olive oil, vinegar, a pinch of salt and black pepper, then mix them together.\n" 



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      Title: "سلطة الفاصوليا والكزبرة",
      Min: "35 دقيقة",
      Ingredients: "1- 150غ فاصوليا خضراء.\n2- 180 غ فاصوليا بيضاء (منقوعة في الماء لليلة).\n3- 100غ طماطم.\n4- بصله صغيرة .\n5- 10 أوراق كزبرة.\n6- ملعقة صغيرة خل بلزاميك.\n7- ملعقة كبيرة زيت زيتون.\n8-ملح، فلفل أسود.\n9- 30 غ جبن الفيتا قليل الدسم.\n",
      Preparation: "1-اطهي الفاصوليا  البيضاء لمدة ساعه (يجب إضافة ماء ساخن في حالة إنتهائه قبل أن تنضج).\n2- و في الأثناء  قم طهي الفاصوليا الخضراء  في وعاء آخر   من الماء مغلي لي مدة  نصف ساعة.\n3-قم بتقطيع الطماطم و البصل  و الكزبرة.\n4-صفي الفاصوليا الخضراء والبيضاء من الماء  وضعهم في وعاء.\n5-أضف الخضروات المقطعة، جبنة الفيتا، الزيت زيتون ، الخل ،القليل من الملح وفلفل الأسود ثم إمزجهم معاً.\n" 



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/FevabeanswithChard.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Sauce aux haricots noirs",
        Min: "35 min",
        Ingredients: "1- 150 g de haricots verts.\n2- 180 g de haricots blancs (trempés dans l'eau toute la nuit).\n3- 100 g de tomates.\n4- Un petit oignon.\n5- Dix feuilles de coriandre.\n6- Une cuillère à café de vinaigre balsamique.\n7- Une cuillère à soupe d'huile d'olive.\n8- Sel, poivre noir.\n9- 30 g de feta allégé.\n",
        Preparation: "1- Faites cuire les haricots blancs pendant une heure (vous devez ajouter de l'eau chaude si c'est fini avant qu'ils ne soient cuits).\n2- Pendant ce temps, faites cuire les haricots verts dans une autre casserole d'eau bouillante pendant une demi-heure.\n3- Hachez les tomates, l'oignon et  la coriandre.\n4- Égouttez les haricots verts et blancs de l'eau et mettez-les dans un bol.\n5- Ajoutez les légumes hachés, la feta, l'huile d'olive, le vinaigre, une pincée de sel et de poivre noir, puis mélangez-les ensemble.\n" 

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


export default connect(mapStateToProps, mapDispatchToProps)(BeansCorianderSalad);






