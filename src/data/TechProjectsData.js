import { v4 as uuidv4 } from "uuid";

import lego from "../assets/project-img/lego3.jpeg";
import soundscrapers1 from "../assets/project-img/soundscrapers-1.png";
import soundscrapers2 from "../assets/project-img/soundscrapers-2.png";
import soundscrapers3 from "../assets/project-img/soundscrapers-3.png";
import mixim1 from "../assets/project-img/mixim-1.png";
import mixim2 from "../assets/project-img/mixim-2.png";
import mixim3 from "../assets/project-img/mixim-3.png";
import rytmGenerator from "../assets/project-img/rytm-generator.png";
import hargreaves1 from "../assets/project-img/hargreaves-1.png";
import dubDelayEffect from "../assets/project-img/dub-delay-effect.png";

export const TechProjectsData = [
  {
    id: uuidv4(),
    year: "2021",
    title: "Sound Scrapers",
    descShort: "interactive system for generative music composition.",
    summary:
      "This project combined interactive design and audio programming with methods of algorithmic composition in an attempt to create an interactive system for generative music composition.",
    body:
      "The concept is called Sound Scrapers, and is a sound toy in which users can compose music in an exploratory way, both visually and audibly. The goal of the project was to establish through research whether or not an interactive system for generative composition can be beneficial for music producers of all levels. Additionally, we investigated how we can effectively represent a composition work-flow in a playful way, and what type of musician could find this concept valuable. We conducted user testing of the application prototype, performed time-measurements on specific application tasks, and gave the user questionnaires and semi-structured interviews to gather data. The composition workflow can be effectively represented in a playful way through strong metaphors, using the DAW workflow as a foundation, together with cohesive UI and UX that has little cognitive friction. The application was built in Unity with the Tracktion Engine hosting JUCE VST plugins.",
    img1: soundscrapers1,
    img2: soundscrapers2,
    img3: soundscrapers3,
    video: "https://www.youtube.com/embed/3UdytvyWobA",
    github: "",
  },

  {
    id: uuidv4(),
    year: "2021",
    title: "MIXIM",
    descShort: "An immersive VR mixing interface",
    summary:
      "This project explored and developed an intuitive solution for creative mixing in the virtual reality (VR) space, and investigated if such a solution can improve creativity and decision making for a mix engineer or music producer.",
    body:
      "This project explored and developed an intuitive solution for creative mixing in the virtual reality (VR) space, and investigated if such a solution can improve creativity and decision making for a mix engineer or music producer. The project aimed to create an immersive VR mixing interface that tries to break out of the traditional design paradigm, attempting to create an intuitive system where the user can use the senses and physical movement to control an audio signal. This project involves technologies and theory in music production, signal processing, virtual reality, interaction design, spatial audio and innovation. The application was built in Unity, using Wwise as a sound engine and using the Oculus and Leap Motion SDKs for interactions.",
    img1: mixim1,
    img2: mixim2,
    img3: mixim3,
    video: "https://www.youtube.com/embed/nAmuq3J_A2w",
    github: "",
  },

  {
    id: uuidv4(),
    year: "2021",
    title: "Lego MIDI Controller",
    descShort: "New Interfaces for Musical Expression",
    summary:
      "A MIDI controller and sequencer built with Teensy 4.0 and Arduino. Casing in LEGO with Adafruit neotrellis button pads.",
    body: "",
    img1: lego,
    video: "",
    github: "https://github.com/sandy999999/miditrellis",
  },

  {
    id: uuidv4(),
    year: "2021",
    title: "Dub Style Delay Effect",
    descShort: "Sound Processing",
    summary:
      "A simple delay effect with higher-order cutoff filter built in MATLAB.",
    img1: dubDelayEffect,
    video: "",
    github: "https://github.com/sandy999999/dub_effect",
  },

  {
    id: uuidv4(),
    year: "2021",
    title: "Physical Models for Sound Synthesis",
    descShort: "Modal Texture Synthesizer",
    summary:
      "Numerical sound synthesis. Modal texture synthesizer built in JUCE, using finite difference schemes.",
  },

  {
    id: uuidv4(),
    year: "2021",
    title: "Euclidean MIDI Rhythm Generator",
    descShort: "A Euclidean midi generator built in JUCE.",
    summary: "A Euclidean midi generator built in JUCE.",
    img1: rytmGenerator,
    github: "https://github.com/sandy999999/rhythm_generator",
  },

  {
    id: uuidv4(),
    year: "2020",
    title: "Website for ArtByHargreaves",
    descShort: "Website prototype of art gallery/webshop built in React. ",
    summary: "Website prototype of art gallery/webshop built in React.",
    img1: hargreaves1,
    github: "https://github.com/sandy999999/art-by-hagreaves",
  },
];
