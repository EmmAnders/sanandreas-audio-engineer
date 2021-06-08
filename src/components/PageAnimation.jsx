export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.7,
    },
  },
};

export const sentence = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },

  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.7,
    },
  },
};

export const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    y: "50",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const photoAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const slider = {
  hidden: {
    opacity: 0,
    x: "-100",
  },
  show: {
    opacity: 1,
    x: "0",
    transition: { duration: 0.7 },
  },
};
