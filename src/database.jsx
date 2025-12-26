// my simulated database

export const securityData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-shield-fill-check"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 
            1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 
            2.465 9.99a11.777 11.777 0 0 0 
            2.517 2.453c.386.273.744.482 
            1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 
            7.159 0 0 0 1.048-.625 11.775 11.775 
            0 0 0 2.517-2.453c1.678-2.195 
            3.061-5.513 2.465-9.99a1.541 1.541 
            0 0 0-1.044-1.263 62.467 62.467 
            0 0 0-2.887-.87C9.843.266 8.69 0 
            8 0zm2.146 5.146a.5.5 0 0 1 
            .708.708l-3 3a.5.5 0 0 1-.708 
            0l-1.5-1.5a.5.5 0 1 1 
            .708-.708L7.5 7.793l2.646-2.647z"
        />
      </svg>
    ),
    title: "256-bit SSL Encryption",
    text: "Your data is protected with the same encryption used by major banks.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-person-check-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
        />
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
    title: "Identity Verification",
    text: "Multi-factor authentication ensures your account stays protected.",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
      </svg>
    ),
    title: "Compliance Certificate",
    text: "NMLS licensed and compliant with all federal regulations.",
  },
];





// my decision table

export const decisionData = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-cpu-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1.5a2 2 0 0 1 2 2V5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1.5a2 2 0 0 1-2 2H10v1.5a.5.5 0 0 1-1 0V14H8v1.5a.5.5 0 0 1-1 0V14H6v1.5a.5.5 0 0 1-1 0V14H3.5a2 2 0 0 1-2-2V10H0V9h1.5a.5.5 0 0 1 0-1H0V7h1.5a.5.5 0 0 1 0-1H0V5h1.5a.5.5 0 0 1 0-1H2V2.5a2 2 0 0 1 2-2H5V.5A.5.5 0 0 1 5 .zM4 5v6h8V5H4z" />
      </svg>
    ),
    title: "Smart Calculations",
    text: "Advanced algorithms help you find the best rates and terms for your situation.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-speedometer2"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3.086l2.707 2.707a.5.5 0 0 1-.708.708L7.5 8.293V4.5A.5.5 0 0 1 8 4z" />
        <path fillRule="evenodd" d="M6.664 12.89a6 6 0 1 1 2.672 0l-.35-1.342A4.999 4.999 0 1 0 8 13a4.978 4.978 0 0 0-1.336-.11z" />
      </svg>
    ),
    title: "Real-time Rates",
    text: "Get the most current rates from our network of trusted lending partners.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-patch-check-fill"
        viewBox="0 0 16 16"
      >
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638c-.259.265-.638.38-1.006.302l-.856-.18A2.89 2.89 0 0 0 .87 3.933l.18.856c.078.368-.037.747-.302 1.006l-.638.622a2.89 2.89 0 0 0 0 4.134l.638.622c.265.259.38.638.302 1.006l-.18.856a2.89 2.89 0 0 0 2.579 2.578l.856-.179c.368-.078.747.037 1.006.302l.622.638a2.89 2.89 0 0 0 4.134 0l.622-.638c.259-.265.638-.38 1.006-.302l.856.179a2.89 2.89 0 0 0 2.578-2.578l-.179-.856a1.007 1.007 0 0 1 .302-1.006l.638-.622a2.89 2.89 0 0 0 0-4.134l-.638-.622a1.007 1.007 0 0 1-.302-1.006l.179-.856A2.89 2.89 0 0 0 12.067.87l-.856.18a1.007 1.007 0 0 1-1.006-.302L10.067.87zM8 11.5a.5.5 0 0 1-.374-.832l2.5-3a.5.5 0 1 1 .748.664L8.748 11.332A.5.5 0 0 1 8 11.5zm-2.646-3.146a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 1 1 .708.708L5.354 8.354z" />
      </svg>
    ),
    title: "Compliance Certificate",
    text: "NMLS licensed and compliant with all federal regulations.",
  },
];




export const NavbarLinks = [ 
  {
    id: 1,
    link: "/",
    text: "Home",
  },
  {
    id: 2,
    link: "/about",
    text: "About",
  },
  {
    id: 3,
    link: "/packages",
    text: "Packages",
  },
  {
    id:4,
    link: "/contact",
    text: "Contact",
  }
]

export const PricingSection = [
    {
      id:1,
      title: "Basic",
      price: "Free",
      features: ["Unlimited access", "Basic features", "Email support"],
      gradient: "from-blue-500 to-cyan-400",
      scale: 0.95,
      shadow: "shadow-md",
      zIndex: 10,
    },
    {
      id:2,
      title: "Pro",
      price: "$19/mo",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Priority support",
      ],
      gradient: "from-purple-500 to-pink-400",
      scale: 1.05,
      shadow: "shadow-2xl",
      zIndex: 30,
      highlight: true,
    },
    {
      id:3,
      title: "Enterprise",
      price: "$49/mo",
      features: [
        "Everything in Pro",
        "Dedicated manager",
        "Custom integrations",
      ],
      gradient: "from-amber-500 to-orange-400",
      scale: 0.95,
      shadow: "shadow-lg",
      zIndex: 20,
    },
  ];