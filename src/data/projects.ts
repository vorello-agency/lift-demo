import type { ImageMetadata } from "astro";

import tramaAerial from "../assets/images/projects/trama-46/aerial-context.webp";
import tramaBlueHour from "../assets/images/projects/trama-46/blue-hour-exterior.webp";
import tramaHero from "../assets/images/projects/trama-46/exterior-main.webp";
import tramaFacade from "../assets/images/projects/trama-46/facade-detail.webp";
import tramaLobby from "../assets/images/projects/trama-46/lobby-interior.webp";
import tramaOffice from "../assets/images/projects/trama-46/office-interior.webp";
import tramaPlazaApproach from "../assets/images/projects/trama-46/plaza-approach.webp";
import tramaSharedSpaceTerrace from "../assets/images/projects/trama-46/shared-space-terrace.webp";
import tramaSkyTerrace from "../assets/images/projects/trama-46/sky-terrace.webp";
import tramaStreet from "../assets/images/projects/trama-46/street-view.webp";
import tramaTerraceView from "../assets/images/projects/trama-46/terrace-view.webp";
import tramaTopView from "../assets/images/projects/trama-46/top-view.webp";
import tramaTransferLevelDetail from "../assets/images/projects/trama-46/transfer-level-detail.webp";
import tramaTechnicalImplantation from "../assets/images/projects/trama-46/technical/implantation.webp";
import tramaTechnicalSection from "../assets/images/projects/trama-46/technical/longitudinal-section.webp";
import tramaTechnicalAxonometric from "../assets/images/projects/trama-46/technical/volumetric-axonometric.webp";
import estratoAerial from "../assets/images/projects/estrato-38/aerial-context.webp";
import estratoCard from "../assets/images/projects/estrato-38/card.webp";
import estratoHero from "../assets/images/projects/estrato-38/hero.webp";
import estratoLandscapedVoid from "../assets/images/projects/estrato-38/landscaped-void.webp";
import estratoLobbyInterior from "../assets/images/projects/estrato-38/lobby-interior.webp";
import estratoUrbanProfile from "../assets/images/projects/estrato-38/urban-profile.webp";
import estratoOfficeInterior from "../assets/images/projects/estrato-38/office-interior.webp";
import estratoPlazaApproach from "../assets/images/projects/estrato-38/plaza-approach.webp";
import estratoFacadeDetail from "../assets/images/projects/estrato-38/facade-detail.webp";
import estratoSharedSpace from "../assets/images/projects/estrato-38/shared-space.webp";
import estratoVerticalCirculation from "../assets/images/projects/estrato-38/vertical-circulation.webp";
import estratoTechnicalImplantation from "../assets/images/projects/estrato-38/technical/implantation.webp";
import estratoTechnicalTypicalFloor from "../assets/images/projects/estrato-38/technical/typical-floor.webp";
import estratoTechnicalSection from "../assets/images/projects/estrato-38/technical/longitudinal-section.webp";
import litoralAerial from "../assets/images/projects/litoral-14/aerial-context.webp";
import litoralBayView from "../assets/images/projects/litoral-14/bay-view.webp";
import litoralBlueHour from "../assets/images/projects/litoral-14/blue-hour.webp";
import litoralCard from "../assets/images/projects/litoral-14/card.webp";
import litoralFacadeDetail from "../assets/images/projects/litoral-14/facade-detail.webp";
import litoralHero from "../assets/images/projects/litoral-14/hero.webp";
import litoralLandscapedVoid from "../assets/images/projects/litoral-14/landscaped-void.webp";
import litoralLobby from "../assets/images/projects/litoral-14/lobby.webp";
import litoralPlazaAccess from "../assets/images/projects/litoral-14/plaza-access.webp";
import litoralResidenceInterior from "../assets/images/projects/litoral-14/residence-interior.webp";
import litoralSeaTerrace from "../assets/images/projects/litoral-14/sea-terrace.webp";
import litoralTechnicalImplantation from "../assets/images/projects/litoral-14/technical/implantation.webp";
import litoralTechnicalSection from "../assets/images/projects/litoral-14/technical/longitudinal-section.webp";
import litoralTechnicalTypicalFloor from "../assets/images/projects/litoral-14/technical/typical-floor.webp";

import cotaHero from "../assets/images/projects/cota-21/hero.webp";
import cotaCard from "../assets/images/projects/cota-21/card.webp";
import cotaAerial from "../assets/images/projects/cota-21/aerial-context.webp";
import cotaPoolTerrace from "../assets/images/projects/cota-21/pool-terrace.webp";
import cotaLivingInterior from "../assets/images/projects/cota-21/living-interior.webp";
import cotaInteriorLounge from "../assets/images/projects/cota-21/interior-lounge.webp";
import cotaKitchenDining from "../assets/images/projects/cota-21/kitchen-dining.webp";
import cotaBedroomInterior from "../assets/images/projects/cota-21/bedroom-interior.webp";
import cotaEntryAccess from "../assets/images/projects/cota-21/entry-access.webp";
import cotaStairInterior from "../assets/images/projects/cota-21/stair-interior.webp";
import cotaLuxuryBathroom from "../assets/images/projects/cota-21/luxury-bathroom.webp";
import cotaUpperTerrace from "../assets/images/projects/cota-21/upper-terrace.webp";
import cotaCourtyardPatio from "../assets/images/projects/cota-21/courtyard-patio.webp";
import cotaStudyLibrary from "../assets/images/projects/cota-21/study-library.webp";
import cotaExteriorNight from "../assets/images/projects/cota-21/exterior-night.webp";
import cotaTechnicalImplantation from "../assets/images/projects/cota-21/technical/implantation.webp";
import cotaTechnicalAxonometric from "../assets/images/projects/cota-21/technical/axonometric.webp";
import cotaTechnicalSection from "../assets/images/projects/cota-21/technical/longitudinal-section.webp";

export interface ProjectGalleryItem {
  image: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface ProjectTechnicalDocument {
  type: string;
  title: string;
  caption: string;
  image?: ImageMetadata;
  alt?: string;
  credit?: string;
}

export interface ProjectTechnicalHighlight {
  label: string;
  title: string;
  description: string;
}

export interface ProjectTechnicalMemory {
  headline: string;
  introduction: string;
  statusLabel?: string;
  renders?: ProjectTechnicalDocument[];
  documents: ProjectTechnicalDocument[];
  highlights: ProjectTechnicalHighlight[];
}

export interface Project {
  slug: string;
  name: string;
  index: string;
  category: string;
  subtitle: string;
  year: number;
  area: string;
  materiality: string;
  introduction: string;
  description: string;
  galleryHeadline: string;
  galleryDescription: string;
  technicalMemory: ProjectTechnicalMemory;
  cardImage: ImageMetadata;
  heroImage: ImageMetadata;
  heroImageAlt: string;
  previewImages: ImageMetadata[];
  gallery: ProjectGalleryItem[];
  aspectRatioClass: string;
  gridClass: string;
}

export const projects: Project[] = [
  {
    slug: "trama-46",
    name: "Trama 46",
    index: "01",
    category: "Uso mixto",
    subtitle: "Torre de uso mixto",
    year: 2023,
    area: "48.600 m²",
    materiality: "Piedra, metal y vidrio",
    introduction:
      "Tres volúmenes se desplazan en altura y dejan entre ellos terrazas abiertas. Los marcos diagonales absorben esas transiciones y convierten la estructura en una parte visible de la torre.",
    description:
      "Trama 46 se divide en tres cuerpos de proporciones similares. Al desplazarse, cada uno libera una plataforma exterior y evita que la torre se perciba como una pieza compacta desde la calle.\n\nLos cambios de volumen coinciden con niveles de transferencia. Allí, los marcos diagonales redistribuyen las cargas, despejan las terrazas y expresan en la fachada el trabajo de la estructura.\n\nEn planta baja, el basamento se retira del borde y concentra los accesos bajo una cubierta continua. La plaza resultante conecta la llegada peatonal con los usos públicos y da a la torre una escala cercana antes de que empiece su desarrollo vertical.",
    galleryHeadline: "Una torre que cambia por niveles.",
    galleryDescription:
      "El recorrido muestra cómo los desplazamientos modifican la silueta, abren terrazas y hacen visible la estructura desde la calle hasta los espacios interiores.",
    technicalMemory: {
      headline: "La estructura explica el desplazamiento.",
      introduction:
        "Los desplazamientos de la torre coinciden con niveles estructurales de transferencia. Ese sistema libera terrazas, ordena la modulación de la fachada y conduce las cargas hasta el basamento.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación",
          title: "Torre, plaza y conexiones urbanas",
          caption: "El retiro del basamento amplía la llegada peatonal y reúne los accesos bajo una misma cubierta.",
          image: tramaAerial,
          alt: "Vista aérea de la implantación conceptual de Trama 46, con la torre, sus accesos y el espacio público circundante",
        },
        {
          type: "Terraza elevada",
          title: "Paisaje entre volúmenes",
          caption:
            "Cada desplazamiento deja una plataforma protegida por el volumen superior y abierta hacia la ciudad.",
          image: tramaSkyTerrace,
          alt: "Terraza elevada de Trama 46 con vegetación, áreas de estancia y estructura diagonal visible",
        },
        {
          type: "Escala urbana",
          title: "Torre y paisaje vial",
          caption: "La plaza y el basamento reciben al peatón antes de que la torre adquiera escala sobre la avenida.",
          image: tramaStreet,
          alt: "Visualización conceptual de Trama 46 desde una avenida arbolada con peatones y tránsito urbano",
        },
        {
          type: "Transición estructural",
          title: "Estructura y paisaje",
          caption:
            "Los marcos diagonales trasladan las cargas entre cuerpos y mantienen libres las terrazas intermedias.",
          image: tramaTransferLevelDetail,
          alt: "Detalle exterior de Trama 46 con marcos diagonales, fachada modular y vegetación en un nivel de transferencia",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Torre, plaza y conexiones urbanas",
          caption: "La huella concentra servicios y accesos para dejar libre el frente principal de la parcela.",
          image: tramaTechnicalImplantation,
          alt: "Plano de implantación conceptual de Trama 46 con la torre, la plaza, los accesos y el contexto urbano inmediato",
        },
        {
          type: "Sistema volumétrico",
          title: "Apilamiento y terrazas",
          caption: "La axonometría separa los tres cuerpos y muestra dónde cambian los apoyos de la torre.",
          image: tramaTechnicalAxonometric,
          alt: "Axonometría conceptual de Trama 46 con el basamento, los tres volúmenes apilados y las terrazas intermedias",
        },
        {
          type: "Sección estructural",
          title: "Niveles de transferencia",
          caption:
            "El núcleo mantiene la continuidad vertical mientras los marcos redistribuyen las cargas en cada desplazamiento.",
          image: tramaTechnicalSection,
          alt: "Sección longitudinal conceptual de Trama 46 con el núcleo, las plantas y los niveles de transferencia estructural",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Apilamiento legible",
          description:
            "Cada cuerpo conserva su proporción y se separa del siguiente mediante una terraza reconocible desde la calle.",
        },
        {
          label: "Transición",
          title: "Estructura expresada",
          description:
            "Los elementos que resuelven el cambio de apoyos quedan expuestos en los niveles de transferencia.",
        },
        {
          label: "Paisaje",
          title: "Terrazas elevadas",
          description:
            "Las plataformas incorporan sombra, vegetación y espacios de pausa en distintos niveles de la torre.",
        },
      ],
    },
    cardImage: tramaHero,
    heroImage: tramaHero,
    heroImageAlt:
      "Visualización conceptual de Trama 46, una torre de tres volúmenes desplazados sobre un basamento público",
    previewImages: [tramaHero, tramaSkyTerrace, tramaLobby, tramaBlueHour],
    gallery: [
      {
        image: tramaHero,
        alt: "Visualización conceptual de Trama 46, una torre de tres volúmenes desplazados sobre un basamento público",
        caption: "Los tres cuerpos se leen como una secuencia vertical apoyada sobre el basamento.",
      },
      {
        image: tramaAerial,
        alt: "Vista aérea oblicua de Trama 46 y su plaza dentro de un contexto urbano ficticio",
        caption: "El retiro de la torre libera una plaza continua sobre el frente de la parcela.",
      },
      {
        image: tramaTopView,
        alt: "Vista cenital de Trama 46, sus cubiertas, terrazas y espacio público perimetral",
        caption: "Las distintas huellas muestran cómo cada volumen gira y se desplaza respecto del anterior.",
      },
      {
        image: tramaStreet,
        alt: "Vista de Trama 46 desde una avenida arbolada con peatones y tránsito urbano",
        caption: "Desde la avenida, el basamento reduce la escala del conjunto y protege el acceso.",
      },
      {
        image: tramaTransferLevelDetail,
        alt: "Detalle exterior de Trama 46 con marcos diagonales, fachada modular y vegetación en un nivel de transferencia",
        caption: "El cambio de apoyos aparece en fachada y enmarca una de las terrazas intermedias.",
      },
      {
        image: tramaSkyTerrace,
        alt: "Terraza intermedia de Trama 46 con vegetación, áreas de descanso y marcos estructurales diagonales",
        caption: "La terraza ocupa el espesor libre entre dos cuerpos y conserva la estructura a la vista.",
      },
      {
        image: tramaLobby,
        alt: "Vestíbulo de Trama 46 con piedra clara, vidrio y carpinterías metálicas",
        caption: "Piedra, metal y vidrio acompañan el paso desde la plaza hacia el vestíbulo.",
      },
      {
        image: tramaPlazaApproach,
        alt: "Aproximación frontal a Trama 46 desde una plaza pública con peatones, arbolado y áreas de estancia",
        caption: "La cubierta del basamento se proyecta sobre la llegada y marca el ingreso principal.",
      },
      {
        image: tramaSharedSpaceTerrace,
        alt: "Espacio interior común de Trama 46 conectado con una terraza elevada y enmarcado por la estructura diagonal",
        caption: "El espacio común se abre por completo hacia una terraza atravesada por el marco diagonal.",
      },
      {
        image: tramaOffice,
        alt: "Interior de una planta de oficinas de Trama 46 con fachada acristalada y vistas hacia la ciudad",
        caption: "La modulación de fachada ordena las plantas de trabajo y distribuye la entrada de luz.",
      },
      {
        image: tramaFacade,
        alt: "Detalle vertical de la fachada, la estructura diagonal y una terraza de Trama 46",
        caption: "La fachada cambia de profundidad al encontrarse con la estructura y las plataformas plantadas.",
      },
      {
        image: tramaTerraceView,
        alt: "Vista distante de Trama 46 desde una terraza urbana ajardinada",
        caption: "Los desplazamientos recortan una silueta distinta según el punto de observación.",
      },
      {
        image: tramaBlueHour,
        alt: "Vista exterior de Trama 46 durante la hora azul con las terrazas y el basamento iluminados",
        caption: "Al anochecer, la iluminación revela los vacíos entre cuerpos y la actividad del basamento.",
      },
    ],
    aspectRatioClass: "aspect-[4/3]",
    gridClass: "md:col-span-7",
  },
  {
    slug: "estrato-38",
    name: "Estrato 38",
    index: "02",
    category: "Edilicio",
    subtitle: "Torre de oficinas",
    year: 2024,
    area: "31.800 m²",
    materiality: "Piedra, aluminio y vidrio",
    introduction:
      "Estrato 38 cambia con el punto de vista. La fachada se curva al ascender y tres jardines abiertos interrumpen la altura para llevar luz, vegetación y espacios exteriores a las plantas de trabajo.",
    description:
      "La planta se afina y gira de manera gradual a medida que la torre asciende. Esa variación evita una silueta frontal única: desde la plaza se percibe compacta; desde los laterales, la curvatura gana profundidad.\n\nTres vacíos ocupan plantas completas y forman jardines protegidos dentro de la envolvente. Además de dividir visualmente la altura, ofrecen espacios exteriores vinculados con oficinas, salas de reunión y áreas comunes.\n\nEl basamento se retrae bajo la torre para cubrir el acceso y ampliar la plaza arbolada. La piedra continúa desde el exterior hasta el vestíbulo, mientras el vidrio mantiene la conexión visual con el espacio público.",
    galleryHeadline: "La altura interrumpida por jardines.",
    galleryDescription:
      "Las vistas recorren la torre desde la plaza hasta los niveles abiertos y muestran cómo la curvatura transforma el perímetro de trabajo.",
    technicalMemory: {
      headline: "Curvar la planta sin perder el orden.",
      introduction:
        "La geometría de la planta cambia de forma gradual sin alterar el núcleo central. Los jardines ocupan niveles completos y el basamento absorbe el encuentro entre torre, acceso y plaza.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación",
          title: "Torre, plaza y contexto urbano",
          caption:
            "El basamento se retrae para cubrir la llegada y dejar una franja arbolada continua frente al edificio.",
          image: estratoAerial,
          alt: "Vista aérea oblicua de Estrato 38, su basamento pétreo, la plaza pública y el contexto urbano ficticio",
        },
        {
          type: "Jardines elevados",
          title: "Paisaje entre plantas",
          caption:
            "Cada vacío ocupa un nivel completo y ofrece un espacio exterior conectado con las oficinas contiguas.",
          image: estratoLandscapedVoid,
          alt: "Jardín elevado de Estrato 38 integrado en la fachada curva de vidrio y aluminio",
        },
        {
          type: "Escala urbana",
          title: "Curvatura y perfil de la torre",
          caption:
            "La variación de la planta modifica el perfil de la torre a medida que el observador recorre la plaza.",
          image: estratoUrbanProfile,
          alt: "Vista urbana nocturna de Estrato 38 desde una plaza arbolada, con la torre iluminada y edificios vecinos",
        },
        {
          type: "Basamento",
          title: "Acceso y transición pública",
          caption:
            "La piedra continúa desde la plaza hasta el vestíbulo y el vidrio mantiene visible el espacio exterior.",
          image: estratoLobbyInterior,
          alt: "Vestíbulo de Estrato 38 con piedra clara, recepción curva y fachada acristalada hacia la plaza",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Huella, accesos y plaza",
          caption:
            "La planta concentra los servicios hacia el fondo y libera el frente para los recorridos peatonales.",
          image: estratoTechnicalImplantation,
          alt: "Plano cenital conceptual de implantación de Estrato 38 con torre curva, plaza arbolada, recorridos y espejos de agua",
        },
        {
          type: "Planta tipo",
          title: "Núcleo, oficinas y envolvente",
          caption: "El núcleo permanece estable mientras el perímetro curvo organiza oficinas y salas de reunión.",
          image: estratoTechnicalTypicalFloor,
          alt: "Planta tipo conceptual de Estrato 38 con núcleo central, oficinas abiertas, salas de reunión y jardín elevado",
        },
        {
          type: "Sección longitudinal",
          title: "Torre y jardines elevados",
          caption:
            "La sección ubica los tres jardines como pausas de altura completa dentro de la secuencia de oficinas.",
          image: estratoTechnicalSection,
          alt: "Sección longitudinal conceptual de Estrato 38 con basamento, núcleo central, oficinas y tres jardines elevados",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Curvatura continua",
          description:
            "La planta varía alrededor de un núcleo estable y ofrece un perfil distinto desde cada borde de la plaza.",
        },
        {
          label: "Paisaje",
          title: "Estratos elevados",
          description:
            "Tres niveles abiertos interrumpen la altura y acercan aire, sombra y vegetación a los espacios de trabajo.",
        },
        {
          label: "Planta baja",
          title: "Umbral público",
          description:
            "El retiro de la planta baja protege la llegada y permite que la plaza alcance el frente del vestíbulo.",
        },
      ],
    },
    cardImage: estratoCard,
    heroImage: estratoHero,
    heroImageAlt:
      "Visualización conceptual de Estrato 38, una torre curva de oficinas con tres jardines elevados sobre un basamento pétreo",
    previewImages: [estratoHero, estratoLandscapedVoid, estratoLobbyInterior, estratoUrbanProfile],
    gallery: [
      {
        image: estratoHero,
        alt: "Visualización conceptual de Estrato 38, una torre curva de oficinas con tres jardines elevados sobre un basamento pétreo",
        caption: "La curvatura y los tres vacíos abiertos dividen la altura sin fragmentar la torre.",
      },
      {
        image: estratoCard,
        alt: "Vista vertical de Estrato 38 desde la plaza pública, con el basamento pétreo y la torre curva",
        caption: "El basamento pétreo forma un primer plano bajo antes del desarrollo vertical.",
      },
      {
        image: estratoAerial,
        alt: "Vista aérea oblicua de Estrato 38, su basamento pétreo, la plaza pública y el contexto urbano ficticio",
        caption: "La plaza rodea el basamento y concentra las llegadas desde las calles vecinas.",
      },
      {
        image: estratoLandscapedVoid,
        alt: "Jardín elevado de Estrato 38 integrado en la fachada curva de vidrio y aluminio",
        caption: "El jardín elevado combina espacios de reunión, descanso y trabajo al aire libre.",
      },
      {
        image: estratoLobbyInterior,
        alt: "Vestíbulo de Estrato 38 con piedra clara, recepción curva y fachada acristalada hacia la plaza",
        caption: "La recepción curva acompaña el recorrido desde la plaza hacia el núcleo de ascensores.",
      },
      {
        image: estratoUrbanProfile,
        alt: "Vista urbana nocturna de Estrato 38 desde una plaza arbolada, con la torre iluminada y edificios vecinos",
        caption: "Al anochecer, los jardines aparecen como cortes luminosos dentro de la envolvente continua.",
      },
      {
        image: estratoOfficeInterior,
        alt: "Planta de oficinas de Estrato 38 junto a la fachada curva acristalada, con puestos de trabajo y salas de reunión",
        caption:
          "Los puestos de trabajo siguen el perímetro curvo y reservan el núcleo para circulaciones y servicios.",
      },
      {
        image: estratoPlazaApproach,
        alt: "Aproximación peatonal al acceso de Estrato 38 desde una plaza arbolada junto al basamento pétreo",
        caption: "La marquesina acompaña el recorrido peatonal desde la plaza hasta el vestíbulo.",
      },
      {
        image: estratoFacadeDetail,
        alt: "Detalle material de Estrato 38 con basamento pétreo curvo, vidrio azul grisáceo y montantes verticales de aluminio",
        caption: "Montantes verticales y paños de vidrio absorben la variación gradual de la curva.",
      },
      {
        image: estratoSharedSpace,
        alt: "Espacio común elevado de Estrato 38 con lounge, biblioteca y jardín interior junto a la fachada curva",
        caption: "El espacio común ocupa el borde de uno de los jardines y puede abrirse hacia la vegetación.",
      },
      {
        image: estratoVerticalCirculation,
        alt: "Circulación vertical de Estrato 38 con escalera escultórica, ascensores, piedra clara y fachada acristalada",
        caption: "La escalera recibe luz desde la fachada y conecta las áreas comunes de plantas consecutivas.",
      },
    ],
    aspectRatioClass: "aspect-[4/5]",
    gridClass: "md:col-span-5 md:pt-12 lg:pt-20",
  },
  {
    slug: "cota-21",
    name: "Cota 21",
    index: "03",
    category: "Residencial",
    subtitle: "Residencia en ladera",
    year: 2025,
    area: "1.180 m²",
    materiality: "Piedra, hormigón y vidrio",
    introduction:
      "La casa comienza arriba y desciende con la pendiente. Muros de piedra contienen el terreno; patios y plataformas enlazan los distintos niveles hasta abrir las áreas sociales hacia el mar.",
    description:
      "El acceso se produce desde la cota más alta, entre dos muros de piedra. Desde allí, la casa baja por tramos breves y alterna espacios cerrados con patios que dejan entrar luz hasta el centro de la planta.\n\nLas losas de hormigón siguen las curvas del terreno y reducen la altura visible desde el camino. Hacia el mar, aleros profundos protegen los paños de vidrio y permiten que estar, comedor y cocina se abran sin perder sombra.\n\nLa piscina ocupa una plataforma lateral, no el frente completo de la vivienda. De ese modo, la roca y la vegetación continúan visibles entre las terrazas y conservan la pendiente como parte de la experiencia de la casa.",
    galleryHeadline: "Descender desde la roca hasta el mar.",
    galleryDescription:
      "El recorrido sigue la llegada desde la cota alta, atraviesa patios y estancias y termina en las plataformas abiertas hacia la costa.",
    technicalMemory: {
      headline: "Construir siguiendo la pendiente.",
      introduction:
        "La casa se apoya en una serie de plataformas paralelas a las curvas de nivel. Los muros contienen la tierra, las losas conectan las cotas y los patios llevan luz al interior del conjunto.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación en ladera",
          title: "Casa, roca y horizonte",
          caption:
            "Las plataformas siguen la pendiente para concentrar las excavaciones y mantener visible la roca entre los volúmenes.",
          image: cotaAerial,
          alt: "Vista aérea oblicua de Cota 21 implantada en una ladera costera rocosa, con plataformas, piscina y recorridos de acceso",
        },
        {
          type: "Volumetría escalonada",
          title: "Piezas habitables entre muros",
          caption:
            "Muros paralelos a las curvas de nivel contienen el terreno y separan patios, habitaciones y terrazas.",
          image: cotaExteriorNight,
          alt: "Vista nocturna de Cota 21 con volúmenes escalonados, terrazas iluminadas, piscina y muros de piedra sobre la ladera",
        },
        {
          type: "Relación con el paisaje",
          title: "Terrazas hacia el horizonte",
          caption:
            "La terraza ocupa una franja acotada frente al estar y deja que la pendiente reaparezca a ambos lados.",
          image: cotaUpperTerrace,
          alt: "Terraza superior de Cota 21 extendida hacia el paisaje costero, con pérgola de madera, vegetación mediterránea y vistas al mar",
        },
        {
          type: "Acceso y umbral",
          title: "Descenso desde la cota alta",
          caption:
            "La entrada no revela la casa completa: una secuencia de muros y escalones conduce desde el camino hasta el estar.",
          image: cotaEntryAccess,
          alt: "Acceso de Cota 21 entre muros de piedra y vegetación mediterránea, con puerta de madera y apertura hacia el mar",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Emplazamiento topográfico y accesos",
          caption:
            "La planta superpone la huella construida con las curvas de nivel y distingue los recorridos peatonal y vehicular.",
          image: cotaTechnicalImplantation,
          alt: "Plano cenital conceptual de implantación de Cota 21 sobre una ladera rocosa junto al mar, con plataformas, piscina y recorridos",
        },
        {
          type: "Sistema volumétrico",
          title: "Plataformas, patios y muros",
          caption:
            "El despiece muestra cómo muros, losas y patios forman unidades habitables sin separar la casa del terreno.",
          image: cotaTechnicalAxonometric,
          alt: "Axonometría explotada conceptual de Cota 21 con plataformas, patios, muros de piedra, piscina y cubiertas",
        },
        {
          type: "Sección longitudinal",
          title: "Casa escalonada en la pendiente",
          caption:
            "La sección sigue el descenso desde el acceso hasta los espacios sociales y la plataforma de la piscina.",
          image: cotaTechnicalSection,
          alt: "Sección longitudinal conceptual de Cota 21 con volúmenes escalonados, muros de piedra, piscina y ladera costera",
        },
      ],
      highlights: [
        {
          label: "Implantación",
          title: "Arquitectura por cotas",
          description:
            "Cada nivel se apoya cerca de su cota natural para reducir excavaciones y evitar un frente continuo sobre la ladera.",
        },
        {
          label: "Tectónica",
          title: "Piedra, hormigón y vidrio",
          description:
            "La piedra contiene, el hormigón salva los desniveles y el vidrio se concentra en las orientaciones protegidas por aleros.",
        },
        {
          label: "Paisaje",
          title: "Terrazas habitables",
          description:
            "Los espacios exteriores aparecen entre los volúmenes y mantienen la roca, la sombra y la vegetación dentro del recorrido.",
        },
      ],
    },
    cardImage: cotaCard,
    heroImage: cotaHero,
    heroImageAlt:
      "Residencia conceptual Cota 21, compuesta por volúmenes escalonados de piedra, hormigón y vidrio sobre una ladera costera",
    previewImages: [cotaHero, cotaPoolTerrace, cotaLivingInterior, cotaExteriorNight],
    gallery: [
      {
        image: cotaHero,
        alt: "Residencia conceptual Cota 21, compuesta por volúmenes escalonados de piedra, hormigón y vidrio sobre una ladera costera",
        caption: "Desde el mar, las losas aparecen como líneas horizontales apoyadas entre los muros de piedra.",
      },
      {
        image: cotaCard,
        alt: "Vista vertical de Cota 21 desde la ladera, con muros de piedra, patios y espacios acristalados",
        caption: "Los patios separan las piezas habitables y permiten que la pendiente atraviese visualmente la casa.",
      },
      {
        image: cotaAerial,
        alt: "Vista aérea oblicua de Cota 21 implantada en una ladera costera rocosa, con plataformas, piscina y recorridos de acceso",
        caption:
          "La vista aérea muestra el acceso superior, las cubiertas y la piscina sobre plataformas independientes.",
      },
      {
        image: cotaPoolTerrace,
        alt: "Terraza principal de Cota 21 con piscina lateral, solárium de piedra, muros de contención y vistas al mar",
        caption:
          "La piscina se desplaza hacia un lateral para conservar roca y vegetación frente a los espacios sociales.",
      },
      {
        image: cotaLivingInterior,
        alt: "Estar principal de Cota 21 en doble altura con escalera, cocina, piedra, hormigón y vistas hacia el paisaje costero",
        caption: "La doble altura reúne dos cotas interiores y lleva luz hasta la escalera central.",
      },
      {
        image: cotaInteriorLounge,
        alt: "Sala de estar de Cota 21 con muro de piedra, hormigón visto, biblioteca y apertura hacia el mar",
        caption: "El muro de piedra entra en el estar y conserva el mismo aparejo que las contenciones exteriores.",
      },
      {
        image: cotaKitchenDining,
        alt: "Cocina y comedor de Cota 21 con isla de piedra, mobiliario de madera, muro de piedra y vistas al mar",
        caption: "Cocina y comedor comparten una franja abierta, protegida por el alero de hormigón.",
      },
      {
        image: cotaBedroomInterior,
        alt: "Dormitorio principal de Cota 21 con muro de piedra, cama de madera, vidrio y vistas hacia la ladera y el mar",
        caption: "Una abertura baja y profunda encuadra el mar sin exponer por completo el dormitorio.",
      },
      {
        image: cotaEntryAccess,
        alt: "Acceso principal de Cota 21 entre muros de piedra, vegetación mediterránea y una puerta de madera con vistas al mar",
        caption: "El acceso desciende entre dos muros y solo abre la vista al mar al llegar al primer patio.",
      },
      {
        image: cotaStairInterior,
        alt: "Escalera interior de Cota 21 con peldaños de madera, muro de piedra, hormigón, vidrio y vista hacia la ladera costera",
        caption: "La escalera ocupa el vacío central y distribuye la luz entre los niveles habitables.",
      },
      {
        image: cotaLuxuryBathroom,
        alt: "Baño principal de Cota 21 con bañera exenta, lavabo de piedra, muros de piedra y vistas al mar",
        caption: "El baño se abre hacia un paño protegido y mantiene la piedra como superficie principal.",
      },
      {
        image: cotaUpperTerrace,
        alt: "Terraza superior de Cota 21 con pérgola de madera, mobiliario exterior, vegetación mediterránea y vistas al mar",
        caption: "La terraza superior se apoya sobre el volumen de dormitorios y recibe sombra de una pérgola ligera.",
      },
      {
        image: cotaCourtyardPatio,
        alt: "Patio interior de Cota 21 con olivo central, muros de piedra, hormigón y apertura hacia el mar",
        caption: "El patio separa dos tramos de la casa y lleva luz a los corredores situados contra el terreno.",
      },
      {
        image: cotaStudyLibrary,
        alt: "Estudio-biblioteca de Cota 21 con estantería de madera, muro de piedra, escritorio de hormigón y vistas al mar",
        caption: "El estudio ocupa una pieza contenida y orienta su única abertura amplia hacia la costa.",
      },
      {
        image: cotaExteriorNight,
        alt: "Vista nocturna de Cota 21 iluminada sobre una ladera costera, con volúmenes escalonados, piscina y muros de piedra",
        caption: "La iluminación nocturna permite leer cada nivel sin borrar la oscuridad natural de la ladera.",
      },
    ],
    aspectRatioClass: "aspect-[4/5]",
    gridClass: "md:col-span-5",
  },
  {
    slug: "litoral-14",
    name: "Litoral 14",
    index: "04",
    category: "Edilicio",
    subtitle: "Residencias frente al mar",
    year: 2022,
    area: "12.400 m²",
    materiality: "Piedra, madera y vidrio",
    introduction:
      "Balcones profundos, celosías y vacíos ajardinados filtran la luz antes de que llegue a las viviendas. En planta baja, el edificio se retira para ampliar el recorrido público junto al mar.",
    description:
      "Litoral 14 ocupa una parcela entre la avenida y el paseo marítimo. La planta baja se retrae para ensanchar el paso peatonal y ubica el vestíbulo y las áreas comunes detrás de una franja cubierta.\n\nEn los niveles residenciales, marcos de piedra, balcones continuos y celosías forman una fachada profunda. Esas capas regulan el sol, protegen la privacidad y permiten abrir los interiores sin dejarlos expuestos al borde costero.\n\nDos grandes retranqueos interrumpen el volumen y reúnen terrazas compartidas con vegetación. Son espacios comunes protegidos del viento que también llevan luz hacia el centro de las plantas.",
    galleryHeadline: "Sombra, privacidad y vida exterior.",
    galleryDescription:
      "Las imágenes recorren el edificio desde el paseo hasta las viviendas y revelan el espesor que forman balcones, celosías y terrazas comunes.",
    technicalMemory: {
      headline: "Dar profundidad al borde costero.",
      introduction:
        "La planta baja libera el frente costero y concentra los servicios hacia la avenida. En altura, balcones y celosías regulan la exposición mientras los vacíos incorporan espacios comunes.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación costera",
          title: "Edificio, plaza y paseo marítimo",
          caption: "El retiro de la planta baja amplía el paseo y deja una plaza protegida frente al acceso.",
          image: litoralAerial,
          alt: "Vista aérea conceptual de Litoral 14, su plaza pública y el paseo marítimo",
        },
        {
          type: "Vacíos ajardinados",
          title: "Terrazas dentro de la envolvente",
          caption: "Los retranqueos ocupan varias plantas y forman espacios comunes resguardados del viento costero.",
          image: litoralLandscapedVoid,
          alt: "Vista vertical de los vacíos ajardinados y las terrazas de Litoral 14",
        },
        {
          type: "Terrazas habitables",
          title: "Extensión exterior de las viviendas",
          caption:
            "Los balcones sombrean los cerramientos y permiten usar el exterior durante distintas horas del día.",
          image: litoralSeaTerrace,
          alt: "Terraza residencial ajardinada de Litoral 14 orientada hacia el mar",
        },
        {
          type: "Basamento público",
          title: "Continuidad entre vestíbulo y plaza",
          caption:
            "El cerramiento transparente mantiene visible el paseo y acompaña la entrada hacia las áreas comunes.",
          image: litoralLobby,
          alt: "Vestíbulo de Litoral 14 conectado visualmente con la plaza costera",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Parcela y frente costero",
          caption:
            "La huella concentra el acceso vehicular hacia la avenida y reserva el borde marítimo para peatones.",
          image: litoralTechnicalImplantation,
          alt: "Plano conceptual de implantación de Litoral 14 junto al frente costero",
        },
        {
          type: "Planta tipo",
          title: "Viviendas, núcleo y terrazas",
          caption: "Las viviendas rodean el núcleo y abren sus áreas sociales hacia balcones de distinta profundidad.",
          image: litoralTechnicalTypicalFloor,
          alt: "Planta residencial tipo conceptual de Litoral 14",
        },
        {
          type: "Sección longitudinal",
          title: "Basamento, viviendas y costa",
          caption: "La sección muestra el paseo bajo el basamento, los balcones y los vacíos comunes en altura.",
          image: litoralTechnicalSection,
          alt: "Sección longitudinal conceptual de Litoral 14 y su relación con el frente costero",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Vacíos habitables",
          description:
            "Los retranqueos reducen la profundidad de algunas plantas y convierten ese espacio en terrazas comunes protegidas.",
        },
        {
          label: "Envolvente",
          title: "Profundidad y sombra",
          description:
            "Balcones, marcos y celosías forman capas que controlan el sol y la exposición de cada vivienda.",
        },
        {
          label: "Planta baja",
          title: "Continuidad pública",
          description:
            "La planta baja se retira para que la plaza, el vestíbulo y el paseo compartan una franja cubierta.",
        },
      ],
    },
    cardImage: litoralCard,
    heroImage: litoralHero,
    heroImageAlt:
      "Visualización conceptual de Litoral 14, un edificio residencial con terrazas ajardinadas frente al mar",
    previewImages: [litoralHero, litoralLandscapedVoid, litoralResidenceInterior, litoralBlueHour],
    gallery: [
      {
        image: litoralHero,
        alt: "Vista general de Litoral 14 desde la plaza pública junto al paseo costero",
        caption: "El volumen residencial se eleva sobre una planta baja abierta hacia el paseo.",
      },
      {
        image: litoralCard,
        alt: "Vista vertical de Litoral 14 y sus terrazas escalonadas desde la plaza",
        caption: "Marcos, balcones y celosías superponen distintos grados de sombra y privacidad.",
      },
      {
        image: litoralPlazaAccess,
        alt: "Aproximación peatonal al basamento de Litoral 14 desde la plaza ajardinada",
        caption: "La plaza conduce al vestíbulo bajo una cubierta continua junto al paseo.",
      },
      {
        image: litoralLandscapedVoid,
        alt: "Vacío ajardinado entre los balcones y celosías verticales de Litoral 14",
        caption: "Una terraza compartida ocupa el vacío y lleva vegetación hacia el centro del edificio.",
      },
      {
        image: litoralAerial,
        alt: "Vista aérea de Litoral 14 entre la avenida, la plaza y el paseo marítimo",
        caption: "La vista aérea distingue la avenida de servicio, la plaza y el borde peatonal costero.",
      },
      {
        image: litoralBlueHour,
        alt: "Vista exterior de Litoral 14 iluminado durante la hora azul",
        caption: "Al anochecer, la planta baja mantiene iluminado el recorrido entre la plaza y el paseo.",
      },
      {
        image: litoralSeaTerrace,
        alt: "Terraza residencial de Litoral 14 con vegetación y vistas hacia el mar",
        caption: "El balcón queda contenido entre losas y celosías para reducir la exposición al sol y al viento.",
      },
      {
        image: litoralLobby,
        alt: "Interior del vestíbulo de Litoral 14 abierto visualmente hacia la plaza y el mar",
        caption: "Piedra y madera acompañan el recorrido desde el acceso cubierto hasta los ascensores.",
      },
      {
        image: litoralResidenceInterior,
        alt: "Interior residencial de Litoral 14 conectado con una terraza frente al mar",
        caption: "El estar puede abrirse por completo al balcón sin perder la protección del alero.",
      },
      {
        image: litoralFacadeDetail,
        alt: "Detalle de los marcos pétreos, celosías oscuras y jardineras de Litoral 14",
        caption: "El detalle muestra el encuentro entre el marco pétreo, la baranda de vidrio y la celosía móvil.",
      },
      {
        image: litoralBayView,
        alt: "Vista de Litoral 14 desde el paseo costero junto a la bahía",
        caption: "Desde la bahía, la planta baja se lee como una pausa sombreada bajo las viviendas.",
      },
    ],
    aspectRatioClass: "aspect-[4/5]",
    gridClass: "md:col-span-7 md:pt-12 lg:pt-20",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
