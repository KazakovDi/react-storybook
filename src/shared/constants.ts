export const twoLevelItems = [
  {
    id: "home",
    label: "Home",
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "media",
    label: "Media Library",
    children: [
      {
        id: "images",
        label: "Images",
        icon: Image,
        children: [
          {
            id: "photos",
            label: "Photos",
            onClick: () => console.log("Photos"),
          },
          {
            id: "graphics",
            label: "Graphics",
            onClick: () => console.log("Graphics"),
          },
          {
            id: "screenshots",
            label: "Screenshots",
            onClick: () => console.log("Screenshots"),
          },
        ],
      },
      {
        id: "audio",
        label: "Audio",
        children: [
          {
            id: "music",
            label: "Music",
            onClick: () => console.log("Music"),
          },
          {
            id: "podcasts",
            label: "Podcasts",
            onClick: () => console.log("Podcasts"),
          },
          {
            id: "recordings",
            label: "Recordings",
            onClick: () => console.log("Recordings"),
          },
        ],
      },
      { id: "videos", label: "Videos", onClick: () => console.log("Videos") },
    ],
  },
  {
    id: "profile",
    label: "Profile",
    children: [
      {
        id: "account",
        label: "Account",
        children: [
          {
            id: "personal-info",
            label: "Personal Information",
            onClick: () => console.log("Personal Info"),
          },
          {
            id: "contact-info",
            label: "Contact Information",
            onClick: () => console.log("Contact Info"),
          },
        ],
      },
      {
        id: "preferences",
        label: "Preferences",
        onClick: () => console.log("Preferences"),
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
];
