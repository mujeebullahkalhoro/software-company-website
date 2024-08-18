import Introduction from "../components/why-choose-us/Introduction"
import './WhyChooseUs.css';
import USPs from "../components/why-choose-us/USPs";
import AwardsRecognition from "../components/why-choose-us/AwardsRecognition";
export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
        <Introduction />
        <USPs />
        <AwardsRecognition />
    </div>
  )
}
