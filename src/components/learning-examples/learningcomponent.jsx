import FirstComponent from './Firstcomponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './Firstcomponent';
import LearningJavaScript from './LearningJvaScript';

export default function Learningcomponent(){
  return(
    <div className="App">
      My Todo Application 
      <FirstComponent></FirstComponent> 
      <SecondComponent></SecondComponent>  
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
      <LearningJavaScript/>
    </div>
  )
}