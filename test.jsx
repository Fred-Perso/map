import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Map, Building, Utensils, Beer, Camera, Train, ShoppingBag, Coffee, Book, Palette, Waves, Heart } from 'lucide-react';

const districtData = {
  "Budapest": {
    "District I": {
      "Bars & Restaurants": [
        {
          "name": "LEO Rooftop",
          "address": "Clark Ádám tér 1",
          "description": "Bar rooftop de Buda"
        }
      ],
      "Sites Touristiques": [
        {
          "name": "Bastion des pêcheurs",
          "address": "Hess András tér 1-3"
        },
        {
          "name": "Várkert Bazár",
          "address": "Ybl Miklós tér 2",
          "description": [
            "Jolie balade dans le jardin avec vue sur la ville",
            "Édifice néo renaissance en contrebas du château de Buda",
            "Escalator disponible jusqu'au château"
          ]
        }
      ],
      "Transports": [
        {
          "name": "Funiculaire",
          "description": "Transport historique pour accéder au château de Buda"
        }
      ]
    },
    "District II": {
      "Sites Touristiques": [
        {
          "name": "Tombeau de Gül Baba",
          "address": "Mecset utca 14",
          "description": [
            "Situé sur la colline des roses",
            "Vue panoramique sur Budapest",
            "Quartier résidentiel huppé",
            "Tire son nom du derviche Gül Baba qui selon la légende ne sortait jamais sans une rose bien cachée sous son bonnet",
            "Pas d'accès à la tombe elle-même"
          ]
        }
      ]
    },
    "District V": {
      "Marchés de Noël": [
        {
          "name": "Four Seasons Hotel Gresham Palace",
          "address": "Széchenyi István tér 5",
          "description": [
            "Marché de Noël haut de gamme dans un palais Art Déco",
            "Gastronomie, porcelaine, bijoux, parfums",
            "Horaires: 10:00-21:00"
          ]
        },
        {
          "name": "Városháza Park",
          "address": "Károly körút 30",
          "description": [
            "Marché de Noël de l'hôtel de ville",
            "Animations pour enfants",
            "Plus grand sapin de Noël de la capitale",
            "Horaires: 10:00-21:00"
          ]
        },
        {
          "name": "Place Vörösmarty",
          "address": "V. kerület",
          "description": [
            "1200m² avec plus de 100 chalets d'artisans locaux",
            "Animations, concerts et activités pour enfants",
            "Horaires: Dim-Jeu 11h-21h, Ven-Sam 11h-22h"
          ]
        }
      ],
      "Restaurants & Street Food": [
        {
          "name": "Belvárosi Disznótoros",
          "address": "Károlyi utca 17",
          "description": [
            "Self-service traditionnel",
            "Spécialités de viandes et saucisses",
            "Recommandation: saucisses Mangalica et concombres"
          ]
        },
        {
          "name": "Hungarikum Bisztró",
          "address": "Steindl Imre utca 13",
          "description": [
            "Spécialités culinaires traditionnelles hongroises",
            "Cadre simple et convivial"
          ]
        },
        {
          "name": "Szimply Food",
          "description": [
            "Brunch disponible toute la journée",
            "Plats frais et sains"
          ]
        }
      ],
      "Bars": [
        {
          "name": "High Note SkyBar",
          "address": "Hercegprímás utca 5",
          "description": "Rooftop"
        }
      ],
      "Sites Touristiques": [
        {
          "name": "Chaussures au bord du Danube",
          "address": "Széchenyi rakpart 5"
        },
        {
          "name": "Parlement hongrois",
          "address": "Kossuth Lajos tér 1-3"
        },
        {
          "name": "Chain Bridge",
          "address": "Széchenyi lánchíd",
          "description": [
            "Liaison entre Buda et Pest",
            "À voir de nuit"
          ]
        }
      ]
    },
    "District VI": {
      "Restaurants & Cafés": [
        {
          "name": "Menza Étterem és Kávézó",
          "address": "Liszt Ferenc tér 2",
          "description": [
            "Institution à Budapest",
            "Décor vintage des années 70",
            "Cuisine hongroise de qualité"
          ]
        },
        {
          "name": "N28 Wine And Kitchen",
          "address": "Nagymező utca 28",
          "description": [
            "Bistro gastronomique hongrois",
            "Expertise en vins",
            "Chef Szabolcs Nagy",
            "Près de l'Opéra"
          ]
        }
      ],
      "Bars": [
        {
          "name": "360 Bar",
          "address": "Andrássy út 39",
          "description": "Rooftop"
        }
      ],
      "Places & Rues": [
        {
          "name": "Liszt Ferenc Square",
          "description": "Place pour sortir avec des restaurants et bars"
        }
      ]
    },
    "District VII (Quartier juif)": {
      "Ruin Bars": [
        {
          "name": "Szimpla Kert",
          "address": "Kazinczy utca 14"
        },
        {
          "name": "Mazel Tov",
          "address": "Akácfa utca 47"
        },
        {
          "name": "Instant-Fogas",
          "address": "Akácfa utca"
        },
        {
          "name": "Ellátó kert Taqueria",
          "address": "Kazinczy utca 48"
        },
        {
          "name": "Doboz",
          "address": "Klauzál utca 10"
        }
      ],
      "Restaurants & Street Food": [
        {
          "name": "KARAVÁN",
          "address": "Kazinczy utca 18",
          "description": [
            "Food court avec plusieurs stands",
            "Cuisine de rue variée",
            "Spécialités hongroises traditionnelles",
            "Sült kolbász (saucisse grillée) et hurka (foie et boudin)"
          ]
        },
        {
          "name": "Gettó Gulyás",
          "address": "Wesselényi utca 18",
          "description": [
            "Cuisine hongroise de qualité",
            "Prix abordables",
            "Réservation fortement recommandée",
            "Menu 3 plats le midi (environ 5€, souvent épuisé après 12h15)"
          ]
        },
        {
          "name": "Kolbizz Sausage & Beer House",
          "address": "Madách Imre tér 2",
          "description": [
            "5/5 sur TripAdvisor (1128 avis)",
            "Cuisine hongroise"
          ]
        }
      ],
      "Cafés": [
        {
          "name": "New York Café",
          "address": "Erzsébet körút 9-11",
          "description": "Considéré comme le plus beau café du monde"
        }
      ],
      "Sites Touristiques": [
        {
          "name": "Dohány utcai zsinagóga",
          "address": "Dohány utca 2",
          "description": "Plus grande synagogue d'Europe"
        }
      ],
      "Rues Animées": [
        {
          "name": "Gozsdu Udvar",
          "address": "Király utca 13",
          "description": "Ruelle piétonne animée, à voir aussi le soir"
        }
      ]
    },
    "District VIII": {
      "Sites Culturels": [
        {
          "name": "Metropolitan Ervin Szabó Library",
          "address": "Reviczky utca",
          "description": [
            "Voir le 4ème étage",
            "Billet visiteur nécessaire"
          ]
        }
      ],
      "Art Urbain": [
        {
          "name": "Pál utcai Fiúk Szobor",
          "address": "Práter utca 11",
          "description": "Statues"
        },
        {
          "name": "Lego Totem",
          "address": "Szentkirályi utca 48"
        }
      ]
    },
    "District IX": {
      "Marchés": [
        {
          "name": "Nagycsarnok",
          "address": "Vámház körút 1-3",
          "description": "Halles couvertes"
        }
      ]
    },
    "District XI": {
      "Restaurants & Brunch": [
        {
          "name": "Nicaragua",
          "address": "Bartók Béla út 21",
          "description": [
            "Brunch classique (œufs, avocat)",
            "4.7/5 (321 avis)"
          ]
        }
      ],
      "Thermes": [
        {
          "name": "Gellert Baths",
          "address": "Kelenhegyi út 2"
        }
      ],
      "Art Urbain": [
        {
          "name": "Lepcso Escalier",
          "address": "Mészöly utca 6",
          "description": "Escalier street art"
        }
      ]
    },
    "District XIV (Városliget)": {
      "Sites Touristiques": [
        {
          "name": "Bio Dôme",
          "address": "Állatkerti körút 16"
        },
        {
          "name": "Jardin Zoologique et Botanique",
          "address": "Állatkerti krt. 6-12"
        }
      ],
      "Thermes": [
        {
          "name": "Thermes Széchenyi",
          "address": "Állatkerti körút 9-11"
        }
      ]
    },
    "Adresses Sans District": {
      "Pâtisseries": [
        {
          "name": "Gelateria Pichler Fagyizó",
          "address": "Városház u.",
          "description": "Spécialité: Chimney cake"
        },
        {
          "name": "Pichler Chimney Cake & Gelato",
          "address": "Váci utca 46",
          "description": "Spécialité: Chimney cake"
        }
      ],
      "Rues & Transport": [
        {
          "name": "Ráday utca",
          "description": "Rue avec restaurants et bars"
        },
        {
          "name": "Zugliget Chairlift",
          "address": "Zugligeti út 97",
          "description": [
            "Télésiège pour accéder au Belvédère Elisabeth",
            "Vue sur la ville",
            "Colline Janos"
          ]
        }
      ],
      "Transports & Promenades": [
        {
          "name": "Ligne de Tram T2",
          "description": [
            "Balade recommandée tôt le matin ou de nuit pour la vue illuminée"
          ]
        },
        {
          "name": "Place Deák Ferenc",
          "description": [
            "Période des illuminations de 20 novembre au 2 janvier",
            "Voir Fashion Street et ses façades scintillantes"
          ]
        }
      ]
    }
  }
};

const categoryIcons = {
  "Bars & Restaurants": <Utensils className="text-gray-600" size={18} />, 
  "Restaurants & Street Food": <Utensils className="text-gray-600" size={18} />, 
  "Restaurants & Brunch": <Utensils className="text-gray-600" size={18} />, 
  "Restaurants & Cafés": <Utensils className="text-gray-600" size={18} />, 
  "Sites Touristiques": <Camera className="text-gray-600" size={18} />, 
  "Sites Culturels": <Camera className="text-gray-600" size={18} />, 
  "Transports": <Train className="text-gray-600" size={18} />, 
  "Transports & Promenades": <Train className="text-gray-600" size={18} />, 
  "Rues & Transport": <Train className="text-gray-600" size={18} />, 
  "Marchés de Noël": <ShoppingBag className="text-gray-600" size={18} />, 
  "Marchés": <ShoppingBag className="text-gray-600" size={18} />, 
  "Ruin Bars": <Beer className="text-gray-600" size={18} />, 
  "Bars": <Beer className="text-gray-600" size={18} />, 
  "Cafés": <Coffee className="text-gray-600" size={18} />, 
  "Places & Rues": <Map className="text-gray-600" size={18} />, 
  "Rues Animées": <Map className="text-gray-600" size={18} />, 
  "Art Urbain": <Palette className="text-gray-600" size={18} />, 
  "Thermes": <Waves className="text-gray-600" size={18} />, 
  "Pâtisseries": <Heart className="text-gray-600" size={18} />
};

const getCategoryIcon = (category) => categoryIcons[category] || <Building className="text-gray-600" size={18} />;

const LocationCard = ({ name, address, description }) => (
  <div className="border-l-2 border-gray-200 pl-4 py-2 mb-4">
    <h4 className="font-medium mb-1">{name}</h4>
    {address && <p className="text-sm mb-1">{address}</p>}
    {description && (Array.isArray(description) ? (
      description.map((desc, i) => <p key={i} className="text-sm mb-1">{desc}</p>)
    ) : (
      <p className="text-sm mb-1">{description}</p>
    ))}
  </div>
);

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
};

const DistrictCategory = ({ category, locations }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      {getCategoryIcon(category)}
      <h3 className="ml-2 font-semibold text-lg">{category}</h3>
    </div>
    {locations.map((location, index) => (
      <LocationCard key={index} {...location} />
    ))}
  </div>
);

DistrictCategory.propTypes = {
  category: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string,
      description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]),
    })
  ).isRequired,
};

const District = ({ name, data }) => (
  <Card className={`mb-8 ${data.color}`}>
    <CardHeader>
      <h2 className={`text-xl font-bold ${data.text}`}>{name}</h2>
    </CardHeader>
    <CardContent>
      {Object.entries(data.categories).map(([category, locations]) => (
        <DistrictCategory key={category} category={category} locations={locations} />
      ))}
    </CardContent>
  </Card>
);

District.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    categories: PropTypes.objectOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          address: PropTypes.string,
          description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
          ]),
        })
      )
    ).isRequired,
  }).isRequired,
};

const DistrictsList = () => (
  <div className="p-4">
    {Object.entries(districtData.Budapest).map(([districtName, districtInfo]) => (
      <District key={districtName} name={districtName} data={districtInfo} />
    ))}
  </div>
);

export default DistrictsList;