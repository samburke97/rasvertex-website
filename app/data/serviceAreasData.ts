// Single source of truth for the suburbs RAS-VERTEX services.
// Used by the ServiceAreas UI component and by the SEO structured-data schemas.

export const SERVICE_REGIONS = [
  {
    label: "South Coast",
    suburbs: [
      "Caloundra", "Caloundra West", "Kings Beach", "Moffat Beach",
      "Dicky Beach", "Golden Beach", "Pelican Waters", "Kawana Waters",
      "Bokarina", "Wurtulla", "Warana", "Birtinya",
    ],
  },
  {
    label: "Central Coast",
    suburbs: [
      "Sippy Downs", "Mountain Creek", "Mooloolaba", "Cotton Tree",
      "Maroochydore", "Twin Waters", "Mudjimba", "Marcoola",
      "Bli Bli", "Buderim", "Kunda Park",
    ],
  },
  {
    label: "North Coast",
    suburbs: [
      "Mount Coolum", "Yaroomba", "Coolum Beach", "Peregian Springs",
      "Sunrise Beach", "Sunshine Beach", "Noosa", "Noosa Heads",
      "Noosaville", "Tewantin", "Cooroibah",
    ],
  },
  {
    label: "Hinterland",
    suburbs: [
      "Mooloolah Valley", "Palmwoods", "Nambour", "Yandina",
      "Maleny", "Mount Mellum", "Pomona", "Cootharaba",
      "Kin Kin", "Cooroy", "Cooroy Mountain", "Gympie",
    ],
  },
] as const;

export const SUBURBS: string[] = SERVICE_REGIONS.flatMap((region) => region.suburbs);
