import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"
 
 
 
 
class PizzaPotatoes extends Component {
 
  constructor(props) {
    super(props);
 
 
  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Pizza Potatoes",
    Min: "40 min",
    Ingredients: "1-0.22 lb (100 g) of tomatoes.\n2-0.35 lb (160 g) of Tuna.\n3-0.066 lb (30 g) of Mozzarella cheese.\n4-Two potatoes medium-size (200g).\n5-One egg.\n6-Thyme,salt and black pepper.\n7-Three cloves of garlic.\n8-A tablespoon of olive oil.\n9-Cucmber salad.\n",
    Preparation: "1-Put the tomatoes in boiling water for five minutes, then peel the tomatoes and put them in a blender with salt, black pepper, thyme and garlic.\n2-Cook the tomato sauce with the addition of two cups of water, and let the sauce cook on a low heat until it thickens.\n3-Cut the potato in half, then empty it from the inside.\n4-Put the potatoes and the emptied parts in boiling water for 20 minutes. Keep the potatoes in shape.\n5-Add the emptied portions to the tomato sauce, add the egg and mix well.\n6-Fill the potatoes with the mixture.\n7-Place the stuffed potatoes in the oven for 20 minutes at 356 °F (180°C).\n8-Before fully cooking, place the mozzarella cheese on top of the potatoes and let it cook for another five minutes.\n9-Place the tuna over the stuffed potato.\n10-Place the stuffed potatoes on a serving plate and add the cucumber salad  a side.\n"
 
 
 
  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"بيتزا البطاطس",
      Min: "40 min",
      Ingredients: "1- 100 غرام من الطماطم.\n2-160 غرام من التونه.\n3-30 جرام من جبن الموتزاريلا.\n4- حبتين من البطاطس (غرام 200).\n5-بيضه.\n6-زعتر,ملح,  فلفل اسود.\n7- فصوص ثوم3 .\n8- ملعقة كبيرة من زيت الزيتون.\n9-سلطه خيار.\n",
      Preparation: "1- ضع الطماطم في ماء مغلي لمدة خمس دقائق, قم بتقشير الطماطم وضعها في الخلاط مع الملح الفلفل الأسود الزعتر والثوم.\n2- قم بطبخ صلصة الطماطم مع إضافة كاسين من الماء, واتركي الصلصة تطبخ على نار هادئه الى ان تصبح متماسكة.\n3-قطع  البطاطس  إلى نصفين ثم قم بإفراغ  البطاطس من الداخل.\n4-ضع البطاطس و الأجزاء التي تم إفراغها في ماء المغلي لمدة 20 دقيقة حافظ على شكل البطاطس .\n5-قم بإضافة  الأجزاء التي تم افراغها الى صلصة الطماطم  واضف البيض و امزج جيدا.\n6-قم بتعبئة  البطاطس بالخليط.\n7-ضع البطاطس المحشية في الفرن لمده 20 دقيقه على درجه حراره 180 درجه.\n8-قبل أن تطبخ بشكل كامل قم بوضع جبنه الموزاريلا فوق البطاطس ونتركها تطبخ لمده خمس دقائق أخرى.\n9- قم بوضع  التونه فوق البطاطس المحشيه.\n10-ضع البطاطس المحشية في طبق التقديم واضف بجانبها  سلطة الخيار.\n"
 
 
 
    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"Pizza au pomme de terre ",
      Min: "40 min",
      Ingredients: "1- 100g de tomate.\n2- 160g de thon.\n3- 30g de fromage mozzarella.\n4- Deux pommes de terre ( moyennes) (200 g).\n5- Un oeuf.\n6- thym, sel, poivre noir.\n7- Trois gousses d'ail.\n8- Une cuillère à soupe d'huile d'olive.\n9- Salade de concombre.\n",
      Preparation: "1- Mettez les tomates dans l'eau bouillante pendant cinq minutes, épluchez les tomates et mettez-les dans un mélangeur avec du sel, du poivre noir, du thym et de l'ail.\n2- Faites cuire la sauce tomate avec l'ajout de deux tasses d'eau, et laissez la sauce cuire à feu doux jusqu'à ce qu'il devienne cohérent.\n3- Morceaux de pommes de terre en moitiés, puis vider les pommes de terre de l'intérieur.\n4- Mettre les pommes de terre et les parties qui ont été vidées dans l'eau bouillante pendant 20 minutes. Conserver la forme des pommes de terre.\n5- Ajouter les parties vidées à la sauce tomate et ajouter l'œuf.\n6- Remplir les pommes de terre avec le mélange.\n7- Placer les pommes de terre farcies au four pendant 20 minutes à un température de 180 degrés.\n8- Avant qu'il ne soit complètement cuit, placez le fromage mozzarella sur les pommes de terre et laissez cuire encore cinq minutes.\n9- Placez le thon sur la pomme de terre farcie.\n10-Placez les pommes de terre farcies sur une assiette de service et ajouter la salade de concombre à côté.\n"
 
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
 
 
export default connect(mapStateToProps, mapDispatchToProps)(PizzaPotatoes);
 
 
 
 
 
 
 

