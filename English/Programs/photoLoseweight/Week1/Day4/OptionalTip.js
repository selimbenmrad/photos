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
    
    OptionnelTip: "Eat foods rich in soluble fibers (black beans, apples, carrots, apricots, flaxseeds, pears, chickpeas, oats, ...) as these fibers reduce the absorption of dietary fats, delay the emptying of the stomach, and help increase the feeling of fullness It feeds the beneficial gut bacteria, the microbiome, which plays an important role in weight loss and sends signals to the body to enhance the secretion of the satiety hormone leptin.\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: "'تناول أطعمة غنية بالألياف القابلة للذوبان :( الفاصوليا السوداء، التفاح، الجزر، المشمش،بذور الكتان ، اجاص ،الحمص،الشوفان،...)  فهذه الألياف تقلل من  إمتصاص الدهون  الغذائية و تؤخر عملية إفراغ المعدة,وتساعد في زيادة الشعور بالامتلاء كما انها تغذي باكتريا الأمعاء  النافعة الميكروبيوم التي تلعب دور هام في  إنقاص الوزن و تبعث إشارات  لجسم لتعزيز إفراز هرمون الشبع 'اللبتين.\n"



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Mangez des aliments riches en fibres solubles (haricots noirs, pommes, carottes, abricots, graines de lin, poires, pois chiches, avoine, ...) car ces fibres réduisent l'absorption des graisses alimentaires, retardent la vidange de l'estomac et aident à augmenter la sensation Il nourrit les bactéries intestinales bénéfiques, le microbiome, qui joue un rôle important dans la perte de poids et envoie des signaux au corps pour améliorer la sécrétion de l'hormone de satiété «leptine».\n",


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