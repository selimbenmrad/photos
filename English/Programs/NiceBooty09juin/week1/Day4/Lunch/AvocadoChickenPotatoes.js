import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class AvocadoChickenPotato extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day3/AvocadoChickenPotato.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Avocado Chicken Potato",
        Min: "40 min",
        Ingredients: "1-One sweet potato (150g).\n2-Two cups lettuce (150g).\n3-One egg\n4-Half tbsp of olive oil\n5-Half of avocado(50g)\n6-Half tbsp of lemon.\n7-Two tbsp of milk\n8-Salt, black pepper, paprika, cumin, vinegar, thyme.\n9-0.33 lb (100g) chicken breast.\n",
        Preparation: "1-Cut the potatoes into small cubes.\n2- Cook the potatoes until tender (15 minutes).\n3-Mash the potatoes and milk together until creamy.\n4-Season the potato mixture with salt and pepper.\n5-Cut the avocados.\n6-Combine the avocado, paprika, and cumin in the bowl.\n7-Mix the potatoes, avocado mixture together.\n8-Season the chicken with salt; black pepper and thyme.\n9-Bake the chicken in the oven 180°C (356°F) (15 min).\n10-In the pot, Boil an egg in the water and vinegar for four minutes.\n11- In a plate put the lettuce, mashed potato and avocado and the chicken.\n12-Top the plate with poached egg.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day3/AvocadoChickenPotato.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"افوكادو دجاج وبطاطا",
        Min: "40 دقيقة",
        Ingredients: "1- 150 غ البطاطا الحلوة.\n2- خس.\n3- بيضة.\n4- نصف ملعقة كبيرة من زيت الزيتون.\n5- (50 غ ) نصف قطعة افوكادو.\n6-نصف ملعقة كبيرة من الليمون.\n7- ملعقتان كبيرتان من الحليب.\n8-ملح ،فلفل اسود،بابريكا،كمون،خل،زعتر.\n9-من صدر دجاج 100غ.\n",
        Preparation: "1- قطع البطاطا الى مكعبات صغيرة.\n2- اطهي البطاطا لمدة 15 دقيقة.\n3- اهرس البطاطا مع الحليب  الى ان تصبح متجانسة.\n4- تبل البطاطا بالملح و الفلفل الاسود.\n5- قطع الافوكادو.\n6- يمزج الافوكادو و البابريكا و الكمون في وعاء.\n7- اخلط البطاطا و مزيج الافوكادو معا.\n8- تبل الدجاج بالملح و الفلفل الاسود الزعتر.\n9- 180°C سخن الفرن على درجة حرارة (15 دقيقة).\n10- في اناء اسلق البيض مع الخل لمدة اربع دقائق.\n11- ضع الخس و البطاطا المهروسة و الافوكادو و الدجاج في طبق.\n12- ثم اضف البيض المسلوق على الطبق.\n"




    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Programs/PhotoMenusProgram/Week2/Day3/AvocadoChickenPotato.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20vegan.png?raw=true"},
        ],
        Title:"Pomme de terre au poulet à l'avocat",
        Min: "40 min",
        Ingredients: "1-150 g patate douce.\n2-laitue (150g).\n3-Un œuf.\n4-Demi cuillère à soupe d'huile d'olive.\n5-Demi-avocat (50g).\n6-Demi cuillère à soupe de citron.\n7-Deux cuillères à soupe de lait.\n8-Sel, poivre noir, paprika, cumin, vinaigre, thym.\n9-100 g Blanc de poulet.\n",
        Preparation: "1-Coupez les pommes de terre en petits cubes.\n2-Faites cuire les pommes de terre jusqu'à ce qu'elles soient tendres (15 minutes).\n3-Mélangez les pommes de terre et le lait jusqu'ont obtient une consistance crémeuse.\n4-Assaisonnez le mélange de pommes de terre avec du sel et du poivre.\n5-Coupez les avocats, jetez le noyau.\n6-Combinez l'avocat, le paprika et le cumin dans le bol.\n7-Mélangez les pommes de terre et le mélange d'avocat.\n8-Assaisonnez le poulet avec du sel; poivre noir et thym.\n9-Cuire le poulet au four à 180 ° C (15 min).\n10-Dans la casserole, faire bouillir un œuf dans l'eau et le vinaigre pendant quatre minutes.\n11- Dans une assiette mettre la laitue, la purée de pommes de terre, l'avocat et le poulet.\n12-Garnir l'assiette d'œuf poché.\n"


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


export default connect(mapStateToProps, mapDispatchToProps)(AvocadoChickenPotato);






