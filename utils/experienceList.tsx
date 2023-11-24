export interface Experience {
  company: string;
  position: string;
  time: string;
  image: string;
  width: number;
  height: number;
}

export const experiences: Experience[] = [
  {
    company: "Twine",
    position: "Software Engineer Intern",
    time: "May '23 - Present",
    image: "/twine.svg",
    width: 75,
    height: 75,
  },
  {
    company: "Bentoswap",
    position: "Frontend Engineer",
    time: "Dec '22 - Jan '23",
    image: "/bentoswap.svg",
    width: 75,
    height: 75,
  },
  {
    company: "Kairos Trading",
    position: "Frontend Engineer Intern",
    time: "Oct '22 - Nov '22",
    image: "/kairos.svg",
    width: 75,
    height: 75,
  },
  {
    company: "TheMorningNews",
    position: "Contributor",
    time: "June '21 - Present",
    image: "/tmn.png",
    width: 80,
    height: 80,
  },
  {
    company: "CloudMandu",
    position: "Software Consultant",
    time: "May '21 - Aug '21",
    image: "/cloudmandu.svg",
    width: 105,
    height: 105,
  },
  {
    company: "YouTube",
    position: "Software Content",
    time: "Feb '21 - Present",
    image: "/youtube.svg",
    width: 75,
    height: 75,
  },
  {
    company: "Neupane Technologies",
    position: "Founder",
    time: "July '20 - Present",
    image: "/neupane.svg",
    width: 80,
    height: 80,
  },
];
