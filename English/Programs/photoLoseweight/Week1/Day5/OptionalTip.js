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
    
    OptionnelTip: "Getting enough sleep is extremely important for losing weight, as well as for preventing future weight gain: It stands to reason that sleep deprivation causes you to eat more food, because staying awake longer gives more opportunity to eat. Also, lack of sleep disrupts the regulation of the hormones of satiety and hunger. Consequently, this negatively affects the mood of the person, not to mention the feeling of extreme hunger throughout the day.\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: "الحصول على قسط كافٍ من النوم مهم للغاية لفقدان الوزن ، وكذلك لمنع زيادة الوزن في المستقبل: من المنطقي أن يتسبب الحرمان من النوم في تناول كمية أكبر من الطعام، لأن البقاء مستيقظا لفترة أطول يتيح فرصة أكبر لتناول الطعام.  كما  إن نقص  النوم   يخل بتنظيم إفراز هرمونات الشبع والجوع . وبتالي  ينعكس هذا سلبا على الحالة المزاجية للإنسان، ناهيك عن الشعور بالجوع الشديد طوال اليوم.\n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Dormir suffisamment est extrêmement important pour perdre du poids, ainsi que pour prévenir une prise de poids future: il va de soi que la privation de sommeil vous pousse à manger plus de nourriture, car rester éveillé plus longtemps donne plus de possibilités de manger. De plus, le manque de sommeil perturbe la régulation des hormones de satiété et de faim. Par conséquent, cela affecte négativement l'humeur de la personne, sans parler de la sensation de faim extrême tout au long de la journée .\n",


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