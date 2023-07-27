/*
  This file exports an object which contains information that 
  will be displayed on your resume. You can add or remove any
  items that you want.

*/

export interface AboutMe {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  githubLink?: string;
  siteLink?: string;
}

const aboutMe: AboutMe = {
  firstName: "John",
  lastName: "Smith",
  emailAddress: "jsmith@example.com",
  phoneNumber: "555-555-1212",
  githubLink: "https://github.com/",
  siteLink: "https://example.com"
}

export default aboutMe;