export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  location: string;
  region: string;
  duration: string;
  rating: number;
  image: string;
  tagline: string;
  category: 'International' | 'Domestic' | 'MICE' | 'College' | 'School';
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export const TOUR_PACKAGES: Package[] = [
  // INTERNATIONAL PACKAGES
  {
    id: "bali-bliss",
    name: "Bali Bliss Escape",
    location: "Bali",
    region: "Indonesia",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    image: "/images/unsplash_1537996194471-e657df975ab4.jpg",
    tagline: "Misty temples, tropical beaches & Nusa Penida adventure",
    category: "International",
    inclusions: [
      "4 Nights accommodation in a 4-star Ubud/Kuta resort",
      "Daily breakfast & selected dinners",
      "Private air-conditioned transfers",
      "English-speaking tour guide",
      "Entry tickets to all attractions listed",
      "Speedboat to Nusa Penida island"
    ],
    exclusions: [
      "International flights & airport taxes",
      "Indonesian Visa on Arrival",
      "Personal expenses & tipping",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali & Ubud Transfer",
        description: "Receive a warm Balinese welcome at Denpasar Airport. Transfer to your resort in Ubud. Spend the evening relaxing or exploring Ubud's local craft markets."
      },
      {
        day: 2,
        title: "Kintamani Volcano & Tegallalang Rice Terrace",
        description: "Visit the stunning Tegallalang Rice Terraces and take a swing over the valley. Drive up to Kintamani to witness the breathtaking active Mt. Batur volcano. Finish the day with a visit to the sacred Tirta Empul water temple."
      },
      {
        day: 3,
        title: "Nusa Penida Island Expedition",
        description: "Take an early morning speedboat to the rugged island of Nusa Penida. Visit the famous Kelingking Beach (T-Rex Cliff), Broken Beach, and Angel’s Billabong. Enjoy lunch on the island before returning to Bali."
      },
      {
        day: 4,
        title: "Tanah Lot Sea Temple Sunset",
        description: "Spend a relaxing morning. In the afternoon, travel to the iconic Tanah Lot Temple, perched on a rock in the ocean. Capture one of the most famous golden sunsets in Southeast Asia."
      },
      {
        day: 5,
        title: "Departure from Bali",
        description: "Enjoy a final breakfast at your hotel. Indulge in some last-minute souvenir shopping before transferring to Denpasar Airport for your flight back home."
      }
    ]
  },
  {
    id: "singapore-spectacular",
    name: "Spectacular Singapore",
    location: "Singapore",
    region: "Southeast Asia",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    image: "/images/unsplash_1525625293386-3f8f99389edd.jpg",
    tagline: "Gardens by the Bay & Sentosa Island adventures",
    category: "International",
    inclusions: [
      "4 Nights accommodation in a 4-star hotel",
      "Daily buffet breakfast at the hotel",
      "Gardens by the Bay double dome entry ticket",
      "Universal Studios Singapore full day pass",
      "Night Safari admission with tram ride",
      "Sentosa cable car and wings of time tickets"
    ],
    exclusions: [
      "Flights & Singapore Visa fees",
      "Meals other than breakfast",
      "Personal expenses & tipping",
      "Tourism tax if applicable"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Night Safari",
        description: "Touch down at Changi Airport. Transfer to your central hotel. In the evening, explore the world's first nocturnal zoo, the Singapore Night Safari, and witness the Creatures of the Night show."
      },
      {
        day: 2,
        title: "City Tour & Gardens by the Bay",
        description: "Pass by Padang, Chinatown, and the Merlion Park for classic photos. In the afternoon, step into the futuristic Gardens by the Bay to explore the Flower Dome and the mist-veiled Cloud Forest."
      },
      {
        day: 3,
        title: "Universal Studios Singapore",
        description: "Spend a thrilling day at Universal Studios on Sentosa Island. Enjoy state-of-the-art rides based on your favorite blockbuster films, including Battlestar Galactica, Transformers, and Jurassic Park."
      },
      {
        day: 4,
        title: "Sentosa Island Play & Wings of Time",
        description: "Take a scenic Cable Car ride into Sentosa. Visit Madam Tussauds, enjoy the Skyline Luge, and conclude your evening with the Wings of Time multi-sensory water, laser, and fire light show on Siloso Beach."
      },
      {
        day: 5,
        title: "Jewel Changi & Departure",
        description: "Check out of the hotel. Visit Jewel Changi to see the majestic Rain Vortex, the world's tallest indoor waterfall, before boarding your flight back home."
      }
    ]
  },
  {
    id: "dubai-extravaganza",
    name: "Dubai Extravaganza",
    location: "Dubai",
    region: "United Arab Emirates",
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    image: "/images/unsplash_1512453979798-5ea266f8880c.jpg",
    tagline: "Burj Khalifa, Desert Safari & futuristic skyline cruises",
    category: "International",
    inclusions: [
      "5 Nights accommodation in a premium 4-star hotel",
      "Daily breakfast & Dhow Cruise dinner",
      "Burj Khalifa 124th floor ticket (non-prime time)",
      "Desert Safari with dune bashing, BBQ dinner & tanoura dance",
      "Dubai Miracle Garden & Global Village entry tickets",
      "Abu Dhabi Day Tour with Grand Mosque visit",
      "Airport transfers on private basis"
    ],
    exclusions: [
      "Airfare & Dubai Visa charges",
      "Tourism Dirham fee (approx. AED 15 per room per night)",
      "Lunch on all days",
      "Optional activities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Marina Dhow Cruise",
        description: "Arrive in Dubai. Transfer to your hotel. In the evening, step aboard a traditional wooden Dhow cruise at Dubai Marina. Enjoy a continental buffet dinner, soft music, and stunning views of illuminated skyscrapers."
      },
      {
        day: 2,
        title: "Half-Day City Tour & Burj Khalifa",
        description: "Discover Dubai’s heritage and modern marvels. Drive by Jumeirah Mosque, Burj Al Arab, and Palm Jumeirah. In the afternoon, ascend to the 124th floor of the Burj Khalifa for a panoramic view of the city and watch the fountain show."
      },
      {
        day: 3,
        title: "Desert Safari with BBQ Dinner",
        description: "Spend the morning at leisure. At 3:00 PM, depart in a 4x4 land cruiser for thrilling dune bashing in the golden desert. Watch the sunset, ride camels, get henna tattoos, and enjoy a delicious BBQ dinner under the stars with live belly dance shows."
      },
      {
        day: 4,
        title: "Miracle Garden & Global Village",
        description: "Explore the Dubai Miracle Garden, showcasing over 150 million blooming flowers arranged in colorful arches and designs. Later, head to Global Village, a massive cultural festival park representing over 80 countries."
      },
      {
        day: 5,
        title: "Abu Dhabi City Tour & Grand Mosque",
        description: "Embark on a day trip to Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, a white-marble masterpiece. Drive past the Corniche and Yas Island (Ferrari World photo stop) before heading back."
      },
      {
        day: 6,
        title: "Departure",
        description: "Savor a final breakfast. Complete check-out formalities. Depending on your flight schedule, transfer to Dubai International Airport for your departure."
      }
    ]
  },
  {
    id: "maldives-luxury",
    name: "Maldives Luxury Escape",
    location: "Maldives",
    region: "Indian Ocean",
    duration: "4 Days / 3 Nights",
    rating: 5.0,
    image: "/images/unsplash_1514282401047-d79a71a590e8.jpg",
    tagline: "Overwater villas, private beaches & crystal clear waters",
    category: "International",
    inclusions: [
      "3 Nights accommodation in a Beach Villa or Water Bungalow",
      "All-Inclusive meal plan (Breakfast, Lunch, Dinner & Select Beverages)",
      "Round-trip Speedboat transfers from Male Airport",
      "Complimentary snorkeling gear and kayak usage",
      "Green tax included"
    ],
    exclusions: [
      "International flights",
      "Scuba diving & motorized water sports fees",
      "Spa treatments & excursions",
      "Personal items"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Male & Speedboat Transfer",
        description: "Arrive at Velana International Airport in Male. Board your speedboat to the resort island. Check into your villa, dip your toes in the white sand, and enjoy a tropical sunset dinner."
      },
      {
        day: 2,
        title: "Snorkeling & Coral Reef Exploration",
        description: "Grab your complimentary snorkeling gear and dive into the crystal-clear house reef. Discover colorful corals, sea turtles, and exotic fish. In the afternoon, pamper yourself with a relaxing Balinese spa treatment (optional)."
      },
      {
        day: 3,
        title: "Sandbank Picnic & Sunset Dolphin Cruise",
        description: "Board a traditional Dhoni boat to a secluded sandbank for a private picnic lunch. In the evening, embark on a sunset cruise to spot playful spinner dolphins jumping alongside the boat."
      },
      {
        day: 4,
        title: "Leisure & Departure",
        description: "Enjoy a leisurely morning swim. Have a hearty breakfast. Check out and board the speedboat back to Male Airport for your onward journey."
      }
    ]
  },
  {
    id: "malaysia-wonders",
    name: "Wonders of Malaysia",
    location: "Malaysia",
    region: "Southeast Asia",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    image: "/images/unsplash_1596422846543-75c6fc197f07.jpg",
    tagline: "Kuala Lumpur skyline, Batu Caves & Genting Highlands",
    category: "International",
    inclusions: [
      "4 Nights accommodation in Kuala Lumpur (4-star)",
      "Daily breakfast at the hotel",
      "Kuala Lumpur City Tour (Petronas Towers photo stop)",
      "Genting Highlands day trip with return Cable Car ride",
      "Batu Caves excursion",
      "Airport transfers"
    ],
    exclusions: [
      "International flights & Malaysia Visa",
      "Tourism Tax (approx. MYR 10 per room per night)",
      "Lunch and dinner meals",
      "Personal tips"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Hotel Check-in",
        description: "Arrive at KL International Airport. Transfer to your hotel in the city center. Rest of the day is at leisure to explore Bukit Bintang or local street food at Jalan Alor."
      },
      {
        day: 2,
        title: "Kuala Lumpur City Tour",
        description: "Explore the capital city. Visit the King’s Palace, National Monument, Merdeka Square, and the Chocolate Gallery. Take iconic photographs in front of the Petronas Twin Towers and KL Tower."
      },
      {
        day: 3,
        title: "Batu Caves & Genting Highlands",
        description: "Head to the Batu Caves to view the giant golden statue of Lord Murugan and climb the 272 rainbow steps. Continue to Genting Highlands, riding the Awana SkyWay cable car over lush rainforests to the mountain resort."
      },
      {
        day: 4,
        title: "KL Forest Eco Park & Shopping Day",
        description: "Visit the KL Forest Eco Park for a canopy walk in the city's remaining rainforest. Spend the afternoon shopping at Pavilion KL, Suria KLCC, or Berjaya Times Square."
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at the hotel, check out, and transfer to KLIA for your return flight home."
      }
    ]
  },
  {
    id: "sri-lanka-explorer",
    name: "Sri Lanka Explorer",
    location: "Sri Lanka",
    region: "South Asia",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    image: "/images/unsplash_1586181108511-5e5511e12e7c.jpg",
    tagline: "Sigiriya Rock Fortress, Kandy temples & Bentota beach",
    category: "International",
    inclusions: [
      "5 Nights hotel accommodation (mix of hills and beach)",
      "Daily breakfast and dinner (Half Board)",
      "Private vehicle with English-speaking chauffeur-guide",
      "Sigiriya Rock Fortress entry ticket",
      "Temple of the Tooth Relic visit",
      "Bentota Madu River boat safari"
    ],
    exclusions: [
      "Flights & Sri Lanka ETA visa",
      "Lunch meals & beverages",
      "Camera & video permit fees at monuments",
      "Tipping & personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Colombo Tour",
        description: "Arrive in Colombo. Check in. Take a city tour highlighting the Galle Face Green, Gangarama Temple, and Pettah bazaar."
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        description: "Travel to Sigiriya. Climb the 5th-century UNESCO World Heritage rock fortress, Sigiriya (Lion Rock), showcasing ancient frescoes and water gardens."
      },
      {
        day: 3,
        title: "Kandy Cultural Center",
        description: "Drive to Kandy, stopping at the Dambulla Cave Temple en route. In Kandy, visit the sacred Temple of the Tooth Relic and watch a traditional Kandyan dance show."
      },
      {
        day: 4,
        title: "Tea Estates & Nuwara Eliya",
        description: "Winding drive through lush green tea plantations. Visit a tea factory to learn the leaf-to-cup process. Explore 'Little England' (Nuwara Eliya) and Gregory Lake."
      },
      {
        day: 5,
        title: "Bentota Golden Beach & Boat Safari",
        description: "Travel to the coastal town of Bentota. Take a boat safari along the scenic Madu River, passing mangrove forests. Visit a turtle hatchery to see baby sea turtles."
      },
      {
        day: 6,
        title: "Departure",
        description: "Breakfast at the resort. Enjoy beach views before transferring to Bandaranaike International Airport in Colombo for your flight home."
      }
    ]
  },
  {
    id: "paris-swiss-alps",
    name: "Paris & Swiss Alps Dream",
    location: "France & Switzerland",
    region: "Europe",
    duration: "8 Days / 7 Nights",
    rating: 5.0,
    image: "/images/unsplash_1502602898657-3e91760cbb34.jpg",
    tagline: "Eiffel Tower, Seine Cruise, Mt. Titlis & Swiss Lakes",
    category: "International",
    inclusions: [
      "3 Nights in Paris & 4 Nights in Central Switzerland (4-star)",
      "Daily European buffet breakfast",
      "Seine River cruise and Eiffel Tower 2nd floor access",
      "TGV high-speed train ticket from Paris to Switzerland",
      "Mount Titlis Cable Car with Ice Flyer tickets",
      "Lucerne City tour and Lake Lucerne cruise",
      "All transfers via comfortable coach"
    ],
    exclusions: [
      "International flights & Schengen Visa fees",
      "Lunch and dinner meals",
      "Local city taxes (paid directly at hotels)",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris & Seine Cruise",
        description: "Arrive in the city of light, Paris. Transfer to your hotel. In the evening, enjoy a romantic cruise down the River Seine, admiring the Louvre, Notre-Dame, and illuminated Eiffel Tower."
      },
      {
        day: 2,
        title: "Paris City Tour & Eiffel Tower",
        description: "Take a panoramic tour of Paris, driving through Champs-Élysées, Arc de Triombhe, and Place de la Concorde. Ascend the Eiffel Tower for unforgettable bird's-eye views of the capital."
      },
      {
        day: 3,
        title: "Louvre Museum & Montmartre",
        description: "Explore the world-famous Louvre Museum to see the Mona Lisa. In the afternoon, wander through the historic artist quarter of Montmartre and visit the Sacré-Cœur basilica."
      },
      {
        day: 4,
        title: "TGV to Switzerland & Interlaken",
        description: "Board the high-speed TGV train to Switzerland. Arrive in the scenic town of Interlaken, nestled between Lake Thun and Lake Brienz. Check into your Alpine hotel."
      },
      {
        day: 5,
        title: "Mount Titlis Snow Adventure",
        description: "Drive to Engelberg. Ascend Mt. Titlis using the Rotair revolving cable car. Play in the snow, walk the suspension Cliff Walk, and explore the ancient glacier cave."
      },
      {
        day: 6,
        title: "Lucerne Explorer & Lake Cruise",
        description: "Discover Lucerne. Walk across the landmark wooden Chapel Bridge, visit the Lion Monument, and board an afternoon scenic cruise on Lake Lucerne surrounded by mountain peaks."
      },
      {
        day: 7,
        title: "Zurich & Rhine Falls",
        description: "Travel to Zurich, the financial hub. Visit the stunning Rhine Falls, Europe's largest waterfall, and enjoy a boat ride close to the cascading waters."
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Zurich Airport for your departure flight back to India."
      }
    ]
  },

  // DOMESTIC PACKAGES
  {
    id: "wayanad-hills",
    name: "Wayanad Nature Escape",
    location: "Wayanad",
    region: "Kerala",
    duration: "3 Days / 2 Nights",
    rating: 5.0,
    image: "/images/unsplash_1627060938622-7f27ac14878a.jpg",
    tagline: "Misty hilltops, spice plantations and historical caves",
    category: "Domestic",
    inclusions: [
      "2 Nights accommodation in a scenic forest resort",
      "Daily breakfast & dinner",
      "Private sightseeing cab",
      "Banasura Sagar Dam entry fee",
      "Toll, driver allowance & parking"
    ],
    exclusions: [
      "Lunch meals",
      "Adventure activity tickets (zipline, rafting)",
      "Personal expenditures"
    ],
    itinerary: [
      {
        day: 1,
        title: "Banasura Sagar Dam & Lakkidi View Point",
        description: "Drive to Wayanad. Visit Banasura Sagar Dam, the largest earth dam in India. Later, take in the winding mountain views at Lakkidi View Point. Check in at your forest resort."
      },
      {
        day: 2,
        title: "Edakkal Caves & Soochipara Waterfalls",
        description: "Hike up to the historic Edakkal Caves to witness Neolithic carvings. Later, trek through coffee estates to reach the cascading Soochipara Waterfalls and take a refreshing dip."
      },
      {
        day: 3,
        title: "Pookode Lake & Return",
        description: "Boating in the natural freshwater Pookode Lake. Walk around the lake paths. Visit a spice shop for cardamom and pepper before returning."
      }
    ]
  },
  {
    id: "munnar-tea",
    name: "Munnar Tea Gardens",
    location: "Munnar",
    region: "Kerala",
    duration: "3 Days / 2 Nights",
    rating: 5.0,
    image: "/images/unsplash_1602216056096-3b40cc0c9944.jpg",
    tagline: "Rolling green mountains, tea museums & cold morning mist",
    category: "Domestic",
    inclusions: [
      "2 Nights stay in a premium hillview cottage",
      "Daily breakfast & dinner",
      "Private car for sightseeing",
      "Tea museum entry & tea tasting session"
    ],
    exclusions: [
      "Lunch charges",
      "Boating fees at Mattupetty",
      "Tips for driver & guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Tea Museum & Blossom Park",
        description: "Arrive in Munnar. Check in. Visit the Tata Tea Museum to understand tea manufacturing history. Walk through Blossom Hydel Park and watch a beautiful sunset."
      },
      {
        day: 2,
        title: "Mattupetty Dam & Echo Point",
        description: "Drive to Mattupetty Dam for speedboating. Head to Echo Point to hear your voice echo off hills. Visit Kundala Lake for a unique Shikara boat ride."
      },
      {
        day: 3,
        title: "Eravikulam National Park & Return",
        description: "Visit Eravikulam National Park, home of the endangered Nilgiri Tahr. Take a safari bus up the misty hills before checking out and returning home."
      }
    ]
  },
  {
    id: "kochi-heritage",
    name: "Kochi Coastal Heritage",
    location: "Kochi",
    region: "Kerala",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    image: "/images/unsplash_1589308078059-be1415eab4c3.jpg",
    tagline: "Dutch architecture, Jewish heritage and iconic Chinese fishing nets",
    category: "Domestic",
    inclusions: [
      "2 Nights boutique hotel stay in Fort Kochi",
      "Daily breakfast",
      "Guided walking tour of Fort Kochi heritage sites",
      "Airport/Railway station transfers"
    ],
    exclusions: [
      "Lunch & dinners",
      "Monument entrance charges",
      "Boat ride charges"
    ],
    itinerary: [
      {
        day: 1,
        title: "Fort Kochi Walking Tour & Chinese Fishing Nets",
        description: "Arrive in Kochi. Check into your hotel. Walk along the beach to see the massive cantilevered Chinese Fishing Nets in operation. Visit St. Francis Church."
      },
      {
        day: 2,
        title: "Mattancherry Palace & Jew Town",
        description: "Explore the Dutch Palace (Mattancherry Palace) with its grand murals. Walk the narrow alleys of Jew Town, visiting the historic Paradesi Synagogue and antique shops."
      },
      {
        day: 3,
        title: "Marine Drive & Return",
        description: "Take a scenic morning boat cruise around the Kochi Harbor. Walk on Marine Drive walkway, shop at Lulu Mall, and head back."
      }
    ]
  },

  // MICE PACKAGES
  {
    id: "mice-dubai",
    name: "Dubai Corporate Summit",
    location: "Dubai",
    region: "United Arab Emirates",
    duration: "4 Days / 3 Nights",
    rating: 5.0,
    image: "/images/unsplash_1582650625119-3a31f8fa2699.jpg",
    tagline: "High-tech meetings, desert team building & luxury networking",
    category: "MICE",
    inclusions: [
      "3 Nights luxury stay in a 5-star hotel in Downtown Dubai",
      "Full-day conference facility with AV, microphones, projector, stage & tech support",
      "Morning & afternoon coffee breaks, international lunch buffet during conference",
      "Private desert safari team-building activities with leadership tasks",
      "Gala dinner on a luxury private yacht cruise around Dubai Marina",
      "Corporate transfers in luxury coaches"
    ],
    exclusions: [
      "Airfare & visa fees",
      "Alcoholic beverages during meals (unless requested)",
      "Individual room incidental bills"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Networking & Marina Dhow Gala",
        description: "Arrive in Dubai. VIP airport clearance and coach transfer to hotel. Welcome drinks and check-in. In the evening, enjoy a private charter dhow dinner cruise for ice-breaking session."
      },
      {
        day: 2,
        title: "Annual Strategy Conference & Panel Discussions",
        description: "Full-day business sessions in the hotel's Grand Ballroom. Keynote speeches, panel discussions, and strategy reviews. Catered lunch, tea, and networking breaks."
      },
      {
        day: 3,
        title: "Outbound Team Building in Desert & BBQ Awards Night",
        description: "Morning workshop in conference room. In the afternoon, drive to the desert for corporate team-building challenges (navigation, construction, problem-solving). Finish with a grand BBQ gala and awards ceremony under the desert stars."
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast, check-out, and coach transfer to Dubai Airport for departure flights."
      }
    ]
  },
  {
    id: "mice-bali",
    name: "Bali Corporate Incentive Retreat",
    location: "Bali",
    region: "Indonesia",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    image: "/images/unsplash_1544644181-1484b3fdfc62.jpg",
    tagline: "Eco-friendly meeting rooms, beachside brainstorming & team challenges",
    category: "MICE",
    inclusions: [
      "4 Nights in an eco-luxury beach resort in Nusa Dua",
      "Brainstorming/meeting setup in open-air bamboo pavilions with screens",
      "Ayung River white water rafting team challenge",
      "Catamaran sunset cruise with corporate cocktail dinner",
      "Balinese cultural team workshops (percussion, cooking)",
      "Daily meals, healthy breaks, airport logistics"
    ],
    exclusions: [
      "Flights & individual visas",
      "Personal spa services",
      "Optional adventure tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Tropical Welcome Gala",
        description: "Arrive at Denpasar Airport. Direct coach transfer to Nusa Dua resort. Welcomed with shell garlands and coconut drinks. Buffet dinner on the beach with live acoustic music."
      },
      {
        day: 2,
        title: "Brainstorming & Local Culture Workshop",
        description: "Morning strategy brainstorming session in open-air conference room. Afternoon team bonding doing traditional Balinese Kecak dance and cooking challenge."
      },
      {
        day: 3,
        title: "Ayung River White-Water Rafting Challenge",
        description: "Divided into team rafts, navigate the exciting rapids of Ayung River in Ubud. Promotes leadership, teamwork, and synchronicity. Riverside buffet lunch."
      },
      {
        day: 4,
        title: "Corporate Catamaran Cruise & Awards",
        description: "Morning at leisure. In the afternoon, board a private catamaran cruise. Sail along the coast during sunset, enjoying drinks, buffet dinner, and award giveaways."
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning yoga session (optional). Breakfast, checkout, and transfer to airport."
      }
    ]
  },

  // COLLEGE PACKAGES
  {
    id: "college-coorg",
    name: "Coorg Adventure & IT Tour",
    location: "Coorg & Bangalore",
    region: "South India",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    image: "/images/unsplash_1506012787146-f92b2d7d6d96.jpg",
    tagline: "Bangalore IT park industrial visit and Coorg adventure camp",
    category: "College",
    inclusions: [
      "3 Nights stay in multiple-sharing dormitory/tents (separate for boys & girls)",
      "IT Park/Manufacturing unit industrial visit permission & coordination",
      "Trekking guide, campfire with music system & permissions",
      "River rafting or adventure ropes course entry fee",
      "All meals (hygienic, buffet style)",
      "Semi-sleeper coach bus transfer"
    ],
    exclusions: [
      "Personal shopping & snacks",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "IT Hub Visit (Bangalore) & Drive to Coorg",
        description: "Depart at midnight. Reach Bangalore in the morning. Visit a prominent IT Park or manufacturing plant for an industrial study session. Post-lunch, travel to Coorg. Check into adventure camp."
      },
      {
        day: 2,
        title: "Trekking to Tadiandamol Peak & Campfire",
        description: "Trek to Tadiandamol, the highest peak in Coorg, guided by experts. Breathtaking views of grasslands and clouds. Return to camp for tea, followed by a campfire, DJ music, and buffet dinner."
      },
      {
        day: 3,
        title: "River Rafting & Golden Temple",
        description: "Engage in thrilling white-water rafting in Barapole River (subject to water levels). In the afternoon, visit Bylakuppe Golden Temple (Tibetan Monastery) and Nisargadhama bamboo forest."
      },
      {
        day: 4,
        title: "Dubare Elephant Camp & Return",
        description: "Visit Dubare Elephant Camp to witness elephant bathing and feeding. Learn about forest conservation. After lunch, start return journey, arriving at night."
      }
    ]
  },
  {
    id: "college-munnar-kochi",
    name: "Kochi & Munnar Industry Study Tour",
    location: "Kochi & Munnar",
    region: "Kerala",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    image: "/images/unsplash_1548013146-72479768bada.jpg",
    tagline: "Kochi Port Trust industrial visit, Munnar tea factory study and trekking",
    category: "College",
    inclusions: [
      "3 Nights hotel accommodation (triple sharing)",
      "Kochi port / industrial sector permit coordination",
      "Munnar tea processing factory entry & lecture",
      "Campfire with music, trekking permit fees",
      "Daily breakfast, lunch, and dinner",
      "Private bus transport"
    ],
    exclusions: [
      "Personal laundry & telephone charges",
      "Ride fees inside parks"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi Port Trust & Shipyard Tour",
        description: "Depart and reach Kochi. Visit the harbor area or shipyard for an industrial tour regarding shipping operations and import/export logistics. Check-in at hotel."
      },
      {
        day: 2,
        title: "Travel to Munnar & Tea processing factory visit",
        description: "Travel from Kochi to Munnar. Winding mountain road with waterfalls. In Munnar, visit an active tea factory to study automated crushing, tearing, and drying systems."
      },
      {
        day: 3,
        title: "Anamudi Trek, Echo Point & DJ Night",
        description: "Trek through the Eravikulam outer grasslands. Head to Echo Point and Mattupetty Dam. Return to resort for an energetic DJ & Campfire night with friends."
      },
      {
        day: 4,
        title: "Athirappilly Waterfalls & Return",
        description: "Check out. Drive to the spectacular Athirappilly Waterfalls (often featured in movies). Study eco-tourism models. Drive back, reaching late."
      }
    ]
  },

  // SCHOOL PACKAGES
  {
    id: "school-ooty-mysore",
    name: "Mysore & Ooty Science Trail",
    location: "Mysore & Ooty",
    region: "South India",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    image: "/images/unsplash_1507608869274-d3177c8bb4c7.jpg",
    tagline: "Mysore Palace history, heritage walks & Ooty science museum excursions",
    category: "School",
    inclusions: [
      "3 Nights stay in school-approved secure hotels (separate rooms/wings for boys & girls)",
      "Entry tickets to museums, palaces, and parks",
      "Dedicated school tour managers & female teachers' coordinators",
      "Healthy, low-spice vegetarian & non-vegetarian food",
      "Educational worksheets and quizzes during travel",
      "Safe, GPS-enabled buses"
    ],
    exclusions: [
      "Personal toys or extra snacks bought by children",
      "Camera charges where applicable"
    ],
    itinerary: [
      {
        day: 1,
        title: "Mysore Palace & Science Planetarium",
        description: "Early morning departure. Arrive in Mysore. Visit the historic Mysore Palace, learning about royal Indian history. In the afternoon, visit the regional Science Museum & Planetarium. Check-in at hotel."
      },
      {
        day: 2,
        title: "Mysore Zoo & Travel to Ooty",
        description: "Explore Sri Chamarajendra Zoological Gardens to study wild animals and biodiversity. Post-lunch, travel up the Nilgiri hills to Ooty, looking out for wild bison or deer."
      },
      {
        day: 3,
        title: "Ooty Botanical Garden, Tea Factory & Quiz",
        description: "Guided tour of the Botanical Gardens, studying plant species and fossil trees. Visit a tea factory and watch tea chocolate making. In the evening, organize a science & history quiz contest with prizes."
      },
      {
        day: 4,
        title: "Lake Boating & Return",
        description: "Enjoy group paddle boating at Ooty Lake. After lunch, start drive back, arriving by evening. Handover students to parents."
      }
    ]
  },
  {
    id: "school-wayanad-nature",
    name: "Wayanad Forest & Tribal Studies Camp",
    location: "Wayanad",
    region: "Kerala",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    image: "/images/unsplash_1473448912268-2022ce9509d8.jpg",
    tagline: "Neolithic carvings, organic farming workshops and wildlife safaris",
    category: "School",
    inclusions: [
      "2 Nights stay in a secure jungle resort",
      "Entry tickets to Edakkal Caves & wildlife safari",
      "Organic farm workshop & farming demonstration fees",
      "All meals & high-tea snacks",
      "First aid kit, doctor-on-call facility"
    ],
    exclusions: [
      "Personal items purchased"
    ],
    itinerary: [
      {
        day: 1,
        title: "Edakkal Caves Neolithic History Walk",
        description: "Drive to Wayanad. Climb to Edakkal Caves. Our guide explains the ancient stone drawings dating back 8,000 years. Fun educational game at the base."
      },
      {
        day: 2,
        title: "Organic Farm Visit & Muthanga Wildlife Safari",
        description: "Morning hands-on workshop at an organic spice farm: learn about planting, composting, and spice harvesting. Afternoon safari in Muthanga Wildlife Sanctuary to spot elephants, deer, and peacocks."
      },
      {
        day: 3,
        title: "Pookode Lake Biosphere Study & Return",
        description: "Study freshwater lake ecosystems at Pookode Lake. Learn about local fish species and wetlands. Return drive, reaching by dinner time."
      }
    ]
  }
];
