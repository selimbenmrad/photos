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
    
    OptionnelTip: "Eat Slowly: People who eat fast are more likely to be obese than those who eat slowly. Eating too fast can cause you to eat large amounts and be high in calories before you realize you're full. Therefore, we recommend that you eat slowly and chew well, as it helps to eat fewer calories and increase the production of hormones associated with weight loss and the satiety hormone, leptin.\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: "'تناول  الطعام ببطء:  إن الأشخاص الذين يتناولون الطعام بسرعه  معرضون  للسمنة ، مقارنة بمن يأكلون ببطء . حيث إن الأكل  بسرعة كبيرة ، قد   يجعلك تأكل  كميات كبيرة وبتالي الكثير من السعرات الحرارية قبل أن تدرك أنك قد  إممتلئت . لذلك ننصح بالأكل ببطء و المضغ الجيد  للطعام  حيث يساعد على  تناول سعرات حرارية أقل وزيادة إنتاج الهرمونات المرتبطة بفقدان الوزن وهرمون الشبع 'اللبتين.\n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Mangez lentement: les personnes qui mangent rapidement sont plus susceptibles d'être obèses que celles qui mangent lentement. Manger trop vite peut vous amener à manger de grandes quantités et à être riche en calories avant de vous rendre compte que vous êtes rassasié. Par conséquent, nous vous recommandons de manger lentement et de bien mâcher, car cela aide à manger moins de calories et à augmenter la production d'hormones associées à la perte de poids et à l'hormone de satiété, la leptine.\n",


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