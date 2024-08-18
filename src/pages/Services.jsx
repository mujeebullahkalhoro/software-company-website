
import ServiceContainer from "../components/services/ServiceContainer";
import './Services.css';
export default function Services() {

    // Web Development
let webDevelopment= "Our Web Development services offer cutting-edge solutions tailored to meet your business needs. We specialize in creating responsive, user-friendly websites that are optimized for speed and SEO. Our team leverages modern technologies like HTML5, CSS3, JavaScript, React, and Node.js to build websites that not only look great but perform exceptionally well across all devices.";

// Mobile Development
let mobileDevelopment = "We offer comprehensive Mobile Development services for both iOS and Android platforms. Whether you need a native app or a cross-platform solution, our team delivers intuitive, user-friendly mobile applications that align with your business goals. We utilize Swift, Kotlin, React Native, and Flutter to create apps that are scalable, secure, and high-performing.";

// Data Analysis
let dataAnalysis= "Our Data Analysis services help businesses make informed decisions by turning raw data into actionable insights. We specialize in data collection, cleaning, visualization, and reporting, using tools like Python, R, SQL, Power BI, and Tableau. Our data-driven approach ensures that you have the information you need to drive growth and efficiency.";

// Graphics Design
let graphicsDesign= "Our Graphics Design services bring your brand to life with visually compelling designs. From logos and brochures to social media graphics and promotional materials, we create designs that communicate your message effectively. We use tools like Adobe Photoshop, Illustrator, and CorelDRAW to craft designs that stand out.";

// UI/UX Design
let uiUxDesign = "We provide UI/UX Design services that focus on creating intuitive and engaging user experiences. Our designs prioritize usability, accessibility, and aesthetic appeal, ensuring that your digital products not only look great but also offer a seamless experience. We use Figma, Adobe XD, and Sketch to design interfaces that users love.";

// Video Animation
let videoAnimation = "Our Video Animation services create captivating animations that tell your story in a visually engaging way. Whether it's explainer videos, promotional content, or motion graphics, we bring your ideas to life using tools like After Effects, Blender, and Cinema 4D. Our animations help you connect with your audience and convey complex information in an easy-to-understand format.";


  return (
    <div className="services">
        <ServiceContainer image="src\assets\services\webdev1.webp"  heading="Web Development" text={ webDevelopment} />
        <ServiceContainer image="src\assets\services\mbapp.webp" heading="Mobile Development" text={mobileDevelopment}/>
        <ServiceContainer image="src\assets\services\dataanyalsis.webp" heading="Data Analysis" text={dataAnalysis}/>
        <ServiceContainer image="src\assets\services\grahicdesign.webp" heading="Graphics Design" text={graphicsDesign}/>
        <ServiceContainer image="src\assets\services\uiuxdesign.png" heading="UI/UX Design" text={ uiUxDesign}/>
        <ServiceContainer image="src\assets\services\videoanimation_processed.webp" heading="Video Animation" text={videoAnimation}/>

    </div>
  )
}
