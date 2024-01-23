import heroImage from "/public/images/illustration-working.svg"
import iconBrand from "/public/images/icon-brand-recognition.svg"
import iconRecords from "/public/images/icon-detailed-records.svg"
import iconCustomizable from "/public/images/icon-fully-customizable.svg"
import { IButton, IContent, IFooter, IShortenContent } from "../interfaces";

export const heroContent: IContent = {
  title: "More than just shorter links",
  description: "Build your brand's recognition and get detailed insights on how your links are performing.",
  imageURL: heroImage
}

export const cardContent: IContent[] = [
  {
    title: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    imageURL: iconBrand
  },
  {
    title: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    imageURL: iconRecords
  },
  {
    title: "Fully Customizable",
    description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    imageURL: iconCustomizable
  }
]

export const navLink: string[] = [
  "Features", "Pricing", "Resources"
]

export const navButton: IButton[] = [
  {
    message: "Login",
    type: "hollow"
  },
  {
    message: "Sign Up",
    type: "round"
  }
]

export const statsContent: IContent = {
  title: "Advanced Statistics",
  description: "Track how your links are performing across the web with our advanced statistics dashboard."
}

export const footerContent: IFooter[] = [
  {
    sectionName: "Features",
    sectionLinks: [
      "Link Shortening", "Branded Links", "Analytics"
    ]
  },
  {
    sectionName: "Resources",
    sectionLinks: [
      "Blog", "Developers", "Support"
    ]
  },
  {
    sectionName: "Company",
    sectionLinks: [
      "About", "Our Team", "Careers", "Contact"
    ]
  }
]

export const shortenContent: IShortenContent = {
  btnType: "submit",
  btnMessage: "Shorten It!",
  placeholderMessage: "Shorten a link here...",
  cautionMessage: "Please add a link"
}