import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

export const objectsAnim = (tl, laptopTl) => {
  const textCodeCover = CSSRulePlugin.getRule(".laptop__text-code:before");
  const textCodeLine = CSSRulePlugin.getRule(".laptop__text-code:after");
  const steps = "steps(6)";

  //===texts
  tl.fromTo(
    ".hero-text",
    {
      opacity: () => 0,
      x: () => -500,
    },
    {
      opacity: () => 1,
      x: () => 0,
      duration: 1,
      delay: 0.25,
      ease: "power2",
      stagger: 0.15,
    }
  );
  //===objects
  tl.fromTo(
    ".hero__objects",
    {
      opacity: () => 0,
      x: () => 500,
    },
    {
      opacity: () => 1,
      x: () => 0,
      duration: 1.3,
      ease: "power2",
    },
    0.25
  );
  //===laptop
  //=text line
  //line blink
  laptopTl.fromTo(
    textCodeLine,
    {
      cssRule: {
        opacity: () => 1,
      },
    },
    {
      cssRule: {
        opacity: () => 0,
      },
      ease: "steps(1)",
      duration: 1,
      repeat: 2,
    },
    0
  );
  //line move
  laptopTl.fromTo(
    [textCodeLine, textCodeCover],
    {
      cssRule: {
        xPercent: () => "0",
        opacity: () => 1,
      },
    },
    {
      cssRule: {
        xPercent: () => "100",
        opacity: () => 1,
      },
      ease: steps,
      duration: 1,
    }
  );
  //final blinks
  laptopTl.fromTo(
    textCodeLine,
    {
      cssRule: {
        opacity: () => 1,
      },
    },
    {
      cssRule: {
        opacity: () => 0,
      },
      ease: "steps(1)",
      duration: 1,
      repeat: 2,
    }
  );
  //fade out text-code
  laptopTl.fromTo(
    ".laptop__text-code",
    {
      opacity: () => 1,
    },
    {
      opacity: () => 0,
      ease: "steps(1)",
    }
  );
  //==animate text
  //fade in
  laptopTl.fromTo(
    ".laptop__text-animate",
    {
      opacity: () => 0,
    },
    {
      opacity: () => 1,
      ease: "steps(1)",
    }
  );
  //fill
  laptopTl.fromTo(
    ".laptop__first-letter",
    {
      strokeDasharray: () => 118,
      strokeDashoffset: () => 118,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    }
  );
  laptopTl.fromTo(
    ".laptop__second-letter",
    {
      strokeDasharray: () => 108,
      strokeDashoffset: () => 108,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__third-letter",
    {
      strokeDasharray: () => 75,
      strokeDashoffset: () => 75,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__fourth-letter",
    {
      strokeDasharray: () => 164,
      strokeDashoffset: () => 164,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__fifth-letter",
    {
      strokeDasharray: () => 113,
      strokeDashoffset: () => 113,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__sixth-letter",
    {
      strokeDasharray: () => 80,
      strokeDashoffset: () => 80,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__seventh-letter",
    {
      strokeDasharray: () => 113,
      strokeDashoffset: () => 113,
    },
    {
      strokeDashoffset: () => 0,
      duration: 1,
    },
    ">-.5"
  );
  laptopTl.fromTo(
    ".laptop__letters-animate",
    {
      fill: "transparent",
    },
    {
      fill: "#49f1c1",
      duration: 1,
    },
    ">-.5"
  );
  //fade out text-animate
  laptopTl.fromTo(
    ".laptop__text-animate",
    {
      opacity: () => 1,
    },
    {
      opacity: () => 0,
      ease: "steps(1)",
      delay: 1,
    }
  );

  //==design text
  //fade in
  laptopTl.fromTo(
    ".laptop__text-cover, .laptop__text-design",
    {
      opacity: () => 0,
    },
    {
      opacity: () => 1,
      ease: "steps(1)",
    }
  );
  //move
  laptopTl.fromTo(
    ".laptop__text-cover",
    {
      xPercent: () => 0,
    },
    {
      xPercent: () => 100,
      duration: 3,
      ease: "power2",
    }
  );
};
