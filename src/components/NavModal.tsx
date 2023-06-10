import React from "react";
import { servicesListItems } from "../interfaces/global.interface";
import { useNavigate, Link } from "react-router-dom";

export const servicesList = [
  {
    id: 1,
    service: "Weddings",
    img: require("../assets/imgs/services_1.png"),
    desc: `Whether you're envisioning a fairy tale wedding, an unforgettable party, or any other special occasion, we're here to bring your vision to life.
              At Dsarah Daniels, we understand that your event should be a reflection of your personal style and preferences. 
              We work closely with you to understand your vision, and then utilize our expertise and creativity to design a one-of-a-kind experience that exceeds your dreams.
              Whether it's a lavish wedding, a milestone celebration, or a corporate gathering, we have the expertise to handle all types of events with precision and professionalism. Let us take care of the logistics and coordination, allowing you to relax and fully enjoy your special day.
              With Dsarah Daniels, your dream event is within reach. Together, we'll create an unforgettable experience that surpasses your expectations and leaves a lasting impression on you and your guests. Get ready to embark on an extraordinary journey as we bring your dreams to life!`,
    servicesRendered: [
      "Design and Decor",
      "Wedding Planning and Coordination",
      "Budget Management",
      "Guest Management",
      "Theme and Design Concept Development",
      "Wedding Day Coordination",
      "Cake Design and Selection",
      "Vendor Selection and Management",
      "Couple Clothing Styling",
      "Bridesmaid Coordination",
      "Souvenir Planning and Execution",
      "Partial Wedding Planning",
      "Entertainment Coordination",
      "Photography and Videography Services",
      "Timeline and Logistics",
    ],
  },
  {
    id: 2,
    service: "Private Events",
    img: require("../assets/imgs/services_2.png"),
    desc: `We are dedicated to making your private event a truly unforgettable experience. 
    Our team of experts will take care of every detail. ensuring that every aspect of your event is flawlessly executed. 
    From the moment you engage our service, we will work closely with you to understand your vision, preferences, and objectives. 
    Our personalized approach means that we will tailor our services to meet your unique needs, ensuring that your private event reflects your style and personality. 
    Our comprehensive services include venue selection and management, vendor coordination, budget planning and logistical support. We will source the finest vendors,
     negotiate contracts on your behalf and oversee all aspects of the event planning process. On the day of your private event, our team will be there to manage every detail, 
     allowing you to relax and enjoy the celebration`,
    servicesRendered: [
      "Theme Selection and Decoration",
      "Venue Selection",
      "Catering Services",
      "Entertainment and Activities",
      "Cake Design and Selection",
      "Invitation Design",
      "Party Favors and Gifts",
      "Event Coordination and Planning",
      "Photography and Videography",
      "Timeline Management",
    ],
  },
  {
    id: 3,
    service: "Birthday Parties",
    img: require("../assets/imgs/services_3.png"),
    desc: `We specialize in creating extraordinary birthday experiences that exceed expectations. 
    Our dedicated team is committed to ensuring that every birthday party is a memorable celebration filled with joy and wonder. 
    We work closely with our clients to develop unique and personalized birthday party themes that reflect their interests, passions, and personality. 
    From whimsical fairy tales to adventurous superheroes, our team will transform ideas into captivating party concepts. 
    Our expert event planners will assist in selecting the perfect venue for the birthday party, 
    considering factors such as space, ambiance, and location. We handle all aspects of venue decoration, creating a magical atmosphere with beautiful decor, lighting, and props that bring the chosen theme to life
        `,
    servicesRendered: [
      "Theme Selection and Decoration",
      "Venue Selection",
      "Catering Services",
      "Entertainment and Activities",
      "Cake Design and Selection",
      "Invitation Design",
      "Party Favors and Gifts",
      "Event Coordination and Planning",
      "Photography and Videography",
      "Timeline Management",
    ],
  },
  {
    id: 4,
    service: "Virtual Events",
    img: require("../assets/imgs/services_4.png"),
    desc: `We understand that virtual events require just as much creativity, planning, 
    and attention to detail as in-person gatherings. Our team is dedicated to delivering exceptional virtual event experiences, 
    including unforgettable virtual birthday celebrations.We work closely with our clients to create personalized virtual event experiences that align with their vision and the celebrant's preferences. 
    From interactive themes and custom backgrounds to virtual decorations and branding, we ensure a visually stunning and immersive experience.
    Our team handles all the technical aspects of setting up and managing the virtual event platform. 
    We collaborate with reliable virtual event platforms and coordinate live streaming, attendee registration, 
    and interactive features to ensure seamless connectivity and engagement.
    
        `,
    servicesRendered: [
      "Theme Selection and Decoration",
      "Venue Selection",
      "Catering Services",
      "Entertainment and Activities",
      "Cake Design and Selection",
      "Invitation Design",
      "Party Favors and Gifts",
      "Event Coordination and Planning",
      "Photography and Videography",
      "Timeline Management",
    ],
  },
  {
    id: 5,
    service: "Coorporate Events",
    img: require("../assets/imgs/services_5.png"),
    desc: `We understand that virtual events require just as much creativity, planning, and attention to detail as in-person gatherings.
     Our team is dedicated to delivering exceptional virtual event experiences, including unforgettable virtual birthday celebrations.
    We work closely with our clients to create personalized virtual event experiences that align with their vision and the celebrant's preferences. 
    From interactive themes and custom backgrounds to virtual decorations and branding, we ensure a visually stunning and immersive experience.
    Our team handles all the technical aspects of setting up and managing the virtual event platform. 
    We collaborate with reliable virtual event platforms and coordinate live streaming, attendee registration, 
    and interactive features to ensure seamless connectivity and engagement.
    `,
    servicesRendered: [
      "Theme Selection and Decoration",
      "Venue Selection",
      "Catering Services",
      "Entertainment and Activities",
      "Cake Design and Selection",
      "Invitation Design",
      "Party Favors and Gifts",
      "Event Coordination and Planning",
      "Photography and Videography",
      "Timeline Management",
    ],
  },
  {
    id: 6,
    service: "Consulting",
    img: require("../assets/imgs/services_1.png"),
    desc: `Celebrate your special day with a remarkable birthday party organized by Dsarah Daniels. We believe that birthdays should be unforgettable and reflect your personality and style.
              Our team will work closely with you to understand your vision and transform it into a memorable event. 
              From theme selection and decoration to entertainment and catering, we'll handle every aspect with creativity and attention to detail.
              Whether it's a grand celebration or an intimate gathering, we'll ensure that your birthday party is a unique and enjoyable experience for you and your guests. 
              Let us take care of the planning and coordination, allowing you to fully immerse yourself in the celebration and create beautiful memories.`,
    servicesRendered: [
      "Theme Selection and Decoration",
      "Venue Selection",
      "Catering Services",
      "Entertainment and Activities",
      "Cake Design and Selection",
      "Invitation Design",
      "Party Favors and Gifts",
      "Event Coordination and Planning",
      "Photography and Videography",
      "Timeline Management",
    ],
  },
];

const NavModal = () => {
  const navigate = useNavigate();

  //   const handleNav = (id: string, item: servicesListItems) => {
  //     navigate(`/service/?${id}`, { state: { item } });
  //   };

  const handleNav = (item: servicesListItems) => {
    navigate(`/service?id=${item.id}`, { state: { item } });
  };

  return (
    <div className=" w-[187px] h-48 p-3 cursor-pointer gap-1 absolute flex flex-col items-start top-20 z-10 bg-backgroundColor shadow-xl rounded-sm">
      {servicesList.map((item, index) => (
        <h1
          key={index}
          onClick={() => handleNav(item)}
          //onClick={() => handleNav(`${item.id}`, item)}
          className="text-sm font-normal hover:border-b-2 border-primaryColorBlue duration-300 ease-in-out"
        >
          {item.service}
        </h1>
      ))}
    </div>
  );
};

export default NavModal;