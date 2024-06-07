import leslie from "../../assets/Image/png/leslie-profile.png";
import janny from "../../assets/Image/png/jenny.png";
import jacob from "../../assets/Image/png/jocab.png";
import blogPostmain from "../../assets/Image/png/our-blog-left-img.png";
import blogPost from "../../assets/Image/png/our-blog-right-img.png";

import {
  CleaningIcon,
  DoubleTikIcon,
  ElectricianIcon,
  MachanicIcon,
  PaintIcon,
  PlambIcon,
  RepairIcon,
} from "./Icons";

export const linkTabs = [
  {
    tabs: "Home",
    path: "/",
  },

  {
    tabs: "About Us",
    path: "/about-us",
  },
  {
    tabs: "Our Services",
    path: "/services",
  },
  {
    tabs: "Testimonials ",
    path: "/testimonials ",
  },
  {
    tabs: "Contact us",
    path: "/contact-us",
  },
];
export const serviceCard = [
  {
    icon: <CleaningIcon />,
    heading: "Cleaning",
    description:
      "Experience the joy of a spotless home with our professional cleaning services. From regular maintenance to deep cleaning, we've got you covered.",
  },
  {
    icon: <RepairIcon />,
    heading: "Repairing",
    description:
      "Quick and efficient solutions for all your household repairs. Our skilled technicians ensure that your home stays in top condition.",
  },
  {
    icon: <PaintIcon />,
    heading: "Painting",
    description:
      "Transform your living spaces with our expert painting services. Choose from a variety of colors and finishes to suit your style.",
  },
  {
    icon: <ElectricianIcon />,
    heading: "Electrician",
    description:
      "From minor fixes to major installations, our electricians are ready to handle all your electrical needs, ensuring safety and compliance.",
  },
  {
    icon: <PlambIcon />,

    heading: "Plumbing",
    description:
      "Say goodbye to leaks and plumbing issues. Our experienced plumbers provide timely and effective solutions to keep your water systems running smoothly.",
  },
  {
    icon: <MachanicIcon />,
    heading: "Mechanic",
    description:
      "From routine maintenance to complex repairs, our skilled mechanics have the expertise to handle a wide range of automotive issues.",
  },
];
export const weChooseCard = [
  {
    icon: <DoubleTikIcon />,
    heading: "Convenience",
    description:
      "Book services at your fingertips through our user-friendly app. We bring the experts to you, saving you time and effort.",
  },
  {
    icon: <DoubleTikIcon />,
    heading: "Quality Assurance",
    description:
      "Our team of skilled professionals is committed to delivering top-notch services with a focus on quality and customer satisfaction.",
  },
  {
    icon: <DoubleTikIcon />,
    heading: "Transparent Pricing",
    description:
      "No hidden costs. Our transparent pricing ensures that you know exactly what to expect, making budgeting simple and stress-free.",
  },
  {
    icon: <DoubleTikIcon />,
    heading: "24/7 Support",
    description:
      "Need assistance or have a question? Our dedicated customer support team is available around the clock to address your concerns.",
  },
];
export const OurClientCard = [
  {
    img: leslie,
    fname: "Leslie",
    lname: "Alexander",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie cursus sem non eleifend. Praesent vitae commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus varius placerat eu non felis.",
  },
  {
    img: janny,
    fname: "Jenny Wlson",
    lname: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie cursus sem non eleifend. Praesent vitae commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus varius placerat eu non felis.",
  },
  {
    img: jacob,
    fname: "Jacob Jones",
    lname: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie cursus sem non eleifend. Praesent vitae commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus varius placerat eu non felis.",
  },
];
export const blogPostData = [
  {
    mainImg: blogPostmain,
    date: "27 Jan 2023",
    heading: "Nullam viverra nunc sit amet libero rutrum,",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nibh in ex consectetur pellentesque ac porttitor ipsum. Ut iaculis lectus quis feugiat rutrum. Sed non venenatis est. Praesent tortor leo,",
    suggestions: [
      {
        img: blogPost,
        date: "19 Jan 2022",
        heading: "Nullam viverra nunc sit amet libero rutrum,",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      },
      {
        img: blogPost,
        date: "19 Jan 2022",
        heading: "Nullam viverra nunc sit amet libero rutrum,",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      },
    ],
  },
];
export const contactUsData = [
  {
    inputName: "First Name",
    inputType: "text",
    placeholder: "first name",
    id: "fname",
  },
  {
    inputName: "Last Name ",
    inputType: "text",
    placeholder: "last name",
    id: "lname",
  },
  {
    inputName: "Email Address*",
    inputType: "email",
    placeholder: "email",
    id: "email",
  },
  {
    inputName: "Phone Number",
    inputType: "number",
    placeholder: "phone Number",
    id: "mob",
  },
];
