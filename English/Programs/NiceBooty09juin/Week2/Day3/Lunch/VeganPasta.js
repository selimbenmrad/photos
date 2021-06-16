import React, { Component } from 'react';
import { connect } from 'react-redux';
import Desserts from "./Desserts"




class VeganPasta extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
    ],
    Title:"Vegan Pasta",
    Min: "40 min",
    Ingredients: "1- 0.22 lb whole wheat spaghetti (100 g).\n2-0.44 lb (ca.200 g)tomatoes.\n3- 0.11 lb (ca.50 g) of quinoa.\n4-Spoonful of olive oil.\n5-0.44 lb (ca.200 g) red beans (canned , rinsed and drained).\n6- Two cloves of garlic.\n7-Salt, black pepper and allspices.\n8- Some lettuce leaves.\n",
    Preparation: "1- Cook the quinoa in boiling water for 15 minutes.\n2- Put the tomatoes in a blender with the garlic and olive oil and mix them.\n3-Put the tomato mixture in a saucepan and  add a cup of water, salt, black pepper and a tsp of allspieces then cook them over medium heat for 20 minutes.\n4-Mix the quinoa and the beans and add them to the rest of the ingredients and cook for another 10 minutes until the sauce thikens.\n5- Meanwhile, boil the spaghetti in boiling water with a little salt for ten minutes.\n6- Combine the spaghetti with the tomato sauce, beans and quinoa in a bowl and serve with lettuce leaves.\n"



  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title:"باستا مع الكينوا ",
      Min: "40 دقيقة ",
    Ingredients: "1- 100غ  معكرونة سباقتي القمح الكامل.\n2- 200غ طماطم.\n3- 50غ كينوا.\n4- ملعقة كبيرة زيت زيتون.\n5- 200غ فاصوليا حمراء (معلبة ، مغسولة ومصفاة).\n6- 2 فصوص ثوم .\n7- ملح و فلفل أسود و اربع توابل.\n8- بعض أوراق الخس.\n",
    Preparation: "1- قم بطهي الكينوا في   ماء  مغلي  لمدة 15دقيقة .\n2- ضع الطماطم في خلاط مع ثوم و زيت الزيتون و قم برحيها .\n3- ضع خليط  الطماطم في قدر و  أضف  كوب من  الماء ، ملح ، فلفل أسود وملعقة صغيرة تابل  و أتركه يطهى  عل نار  متوسطه لمدة 20 دقيقة.\n4-امزج الكينوا و الفصولياء و اضفهم الي بقية المكونات و أتركهم يطبخ لي 10 دقيقة اضافيه  الي إن تحصل عل صلصه  متماسكه.\n5- و في الاثناء  قم  بسلق  المعكرزنه  في ماء  مغلي  مع قليل  من الملح  لمدة سبع  دقائق .\n6- امزج  المعكرزنه مع صلصة  الطماطم و الفاصوليا  و الكينوا  في و ضعهم  في  طبق التقديم مع أوراق الخس.\n"



    }]
    const ListeDataFR= [{
      key:1,
        Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/PumpkinOmelette.jpg?raw=true",
        ListImg: [
          {img: "https://github.com/selimbenmrad/Files/blob/master/icon%20%20vegetarian.png?raw=true"},
          {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        ],
        Title:"Vegan Pasta",
        Min: "40 min",
        Ingredients: "1- 100 g spaghetti de blé entier.\n2-200 g de tomates.\n3-50 g de quinoa.\n4-Une cuillère à soupe d'huile d'olive.\n5- 200g de haricots rouges (en conserve, rincés et égouttés).\n6- Deux gousses d'ail.\n7-Sel, poivre noir et quatre-épices.\n8- Quelques feuilles de laitue.\n",
        Preparation: "1- Faites cuire le quinoa dans l'eau bouillante pendant 15 minutes.\n2- Mettez les tomates dans un mixeur avec l'ail et l'huile d'olive et mélangez-les.\n3-Mettez le mélange de tomates dans une casserole et ajoutez  un verre d'eau, de  sel , poivre noir et  cuillère à café de quatre-épices et laissez cuire à feu moyen pendant 20 minutes.\n4-Mélangez le quinoa et les haricots et ajoutez-les au reste des ingrédients et faites cuire encore 10 minutes jusqu'à ce que la sauce épaississe.\n5- Pendant ce temps, faites bouillir le spaghetti dans l'eau bouillante avec un peu de sel pendant sept minutes.\n6- Mélanger le spaghetti avec la sauce tomate, les haricots et le quinoa dans un plat et servir avec  les feuilles de  laitue.\n"
    
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


export default connect(mapStateToProps, mapDispatchToProps)(VeganPasta);





