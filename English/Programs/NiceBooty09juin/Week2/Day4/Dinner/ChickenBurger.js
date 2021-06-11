import React, { Component } from 'react';
import { connect } from 'react-redux';
import EasyHealthyLunchOrDinner from "./EasyHealthyLunchOrDinner"
 
 
 
 
class ChickenBurger extends Component {
 
  constructor(props) {
    super(props);
 
 
  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/MassGainer/PhotosDietMAssGainer/week4/Day2(3)/ChickenBurger.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Chicken Burger",
        Min: " 25 min",
        Ingredients: "1-Brown burger bread (75g).\n2-0.11 lb (50 g) of green pepper.\n3-0.11 lb (50 g) of onion.\n4-Two tablespoons of white cheese low-fat.\n5-A spoonful of olive oil.\n6-0.22 lb (100 g) of tomatoes.\n7-0.11 (50 g) of lettuce.\n8-0.44 lb (200 g) of minced chicken breast.\n9-Salt and black pepper.\n10-Four spices.\n",
        Preparation: "1-In a bowl, season the minced chicken with black pepper, salt and four-spices.\n2-Divide the mixture into equal pieces, each piece weighing 100 grams.\n3-In a frying pan on a quiet fire, place the hamburger piece and cook well for about five minutes, then turn it over on the other side until it is cooked on both sides.\n4-Cut the peppers, onions, and tomatoes into a circular shape.\n5-Open the bread using a knife in half, grease the first half of the piece of bread with white cheese, a piece of lettuce, tomatoes, then a piece of chicken and pepper, and at the end add a second piece of bread.\n" 
 
 
 
  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/MassGainer/PhotosDietMAssGainer/week4/Day2(3)/ChickenBurger.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "برغر الدجاج",
        Min: " 35 min",
        Ingredients: "1- (75غ) قطعة خبز البرجر البني.\n2- 50 غرام من الفلفل الأخضر .\n3-50 غرام من البصل.\n4-ملعقتين كبيرتين من الجبن الأبيض قليل الدسم.\n5- ملعقة من زيت الزيتون.\n6-100 غرام من الطماطم.\n7-50 غرام من الخس.\n8-200 غرام من صدر الدجاج مفروم.\n9-ملح و فلفل اسود.\n10-أربعة بهارات.\n",
        Preparation: "1-  في وعاء قم بتتبيل دجاج المفروم بالفلفل الاسود، الملح و 4 بهارات.\n2-قسم الخليط قطع متساوية كل قطعة تزن 100 غرام.\n3-في مقلاة على النار هادئة،  يوضع قطعة الهامبرغر ويطبخ جيداً لمدة خمس دقائق تقريباً ثم يقلب على الجهة الثانية حتى ينضج من الجهتين.\n4-قم بتقطيع الفلفل ،البصل، الطماطم على شكل دائري.\n5- افتح الخبز باستعمال سكين إلى نصفين، ادهن النصف الاول من القطعة الخبز بالجبن الابيض قطعة من الخس، الطماطم ثم قطعة الدجاج و الفلفل و في الأخير أضف قطعة ثانية من الخبز.\n" 
 
 
 
    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/MassGainer/PhotosDietMAssGainer/week4/Day2(3)/ChickenBurger.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
        ],
        Title: "Burger de poulet",
        Min: " 35 min",
        Ingredients: "1-Pain hamburger brun (75g).\n2-50 g de poivron vert.\n3-50 g d'oignon.\n4-Deux cuillères à soupe de fromage blanc faible en matiere grasse.\n5-Une cuillère d'huile d'olive.\n6-100 g de tomates.\n7-50 g de laitue.\n8-200 g de  blanc  de poulet, hachée.\n9-Sel et poivre noir.\n10-Quatre épices.\n",
        Preparation: "1-Dans un bol, assaisonnez le poulet haché avec du poivre noir, du sel et 4 épices.\n2-Divisez le mélange en morceaux égaux, chaque morceau pesant 100 g.\n3-Dans une poêle à feu doux, placez le morceau de hamburger et faites bien cuire pendant environ cinq minutes, puis retournez-le de l'autre côté jusqu'à ce qu'il soit cuit des deux côtés.\n4-Coupez les poivrons, les oignons et les tomates en forme circulaire.\n5-Ouvrez le pain à l'aide d'un couteau en deux, graissez la première moitié du morceau de pain avec du fromage blanc, un morceau de laitue, des tomates, puis un morceau de poulet et du poivre, et à la fin ajoutez un deuxième morceau de pain.\n" 
 
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
        NamePage: < EasyHealthyLunchOrDinner />,
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
 
 
export default connect(mapStateToProps, mapDispatchToProps)(ChickenBurger);
