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
    
    OptionnelTip: "Make sure to provide protein in your diet as it is very important for weight loss. Protein metabolism requires more calories for them to be digested, compared to the calories needed to burn fat or sugars.Therefore we recommend that you eat protein in your three meals, such as eggs, chicken, fish or legumes (lentils, beans, chickpeas ...).\n",
    


  }]
  
    const ListeDataAR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
      ],
      Title: "نصيحة اختيارية ",
      
      OptionnelTip: "احرص على توفير  البروتينات في نظامك الغذائي، لأنها مهمة للغاية في إنقاص الوزن، حيث إن حرق البروتين يحتاج الى حرق سعرات حرارية أكبر من السعرات التي يحتاجها حرق الدهون، لذلك ننصحك بتناول البروتين في وجباتكِ الثلاث، مثل البيض المسلوق والدجاج أو السمك  أو البقوليات.\n",



    }]
    const ListeDataFR= [{
      key:1,
      Img: "https://github.com/selimbenmrad/photos/blob/master/English/Diet/PhotoLunch/TunaRiceSalad.jpg?raw=true",
      ListImg: [
        {img: "https://github.com/selimbenmrad/Files/blob/master/high%20protein.png?raw=true"},
        {img: "https://github.com/selimbenmrad/Files/blob/master/gluten%20free.png?raw=true"},
      ],
      
      Title:"Astuce optionnelle  du jour ",
    
      OptionnelTip: "Assurez-vous de fournir des protéines dans votre alimentation, car elles sont très importantes pour perdre du poids. Le métabolisme  des protéines nécessite plus  de calories pour qu'ils soit  digérer, par rapport aux  calories nécessaires pour brûler les graisses ou les sucres. Ansi  nous  vous  recommander de  manger des protéines dans vos trois repas, comme des œufs , du poulet, de poisson ou des légumineuses (lentilles, haricots, pois chiches...).\n"

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