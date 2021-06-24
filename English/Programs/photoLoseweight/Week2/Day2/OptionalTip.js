import React, { Component } from 'react';
import { connect } from 'react-redux';
import LunchOrDinner from "./EasyHealthyLunchOrDinner"




class OptionalTipOfTheDay extends Component {

  constructor(props) {
    super(props);


  const   ListeDataEN= [{
    key:1,
    Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
    ListImg: [
      {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},

    ],
    Title:"Optional Tip Of The Day",
    
    OptionnelTip: "Cooking method: Use the least amount of oil possible and avoid high-calorie fried foods to prevent blood lipid problems and blood vessel problems and replace them with dishes in the oven, grilled, steamed, boiled, or use an oil-replacement cooking spray.\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: ".طريقة الطبخ : استعمل أقل  كمية ممكنة من الزيت وتجنب المأكولات  المقلية   العالية السعرات الحرارية  للوقاية من مشاكل الشحوم في الدم ومشاكل الأوعية الدموية  وتعويضها بـ أطباق في الفرن ,  مشوية ، مطهو عل بخار ، مسلوق،  أو إستعمل بخاخ الطبخ بديل الزيت \n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Méthode de cuisson: utilisez le moins d'huile possible et évitez les aliments frits riches en calories pour éviter les problèmes de lipides sanguins et de vaisseaux sanguins et remplacez-les par des plats au four, grillés, cuits à la vapeur, bouillis ou utilisez un spray de cuisson de remplacement d'huile .\n",


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
        NamePage: < LunchOrDinner />,
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


export default connect(mapStateToProps, mapDispatchToProps)(OptionalTipOfTheDay);