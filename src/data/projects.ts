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
  location: string;
  year: number;
  area: string;
  status: string;
  introduction: string;
  description: string;
  technicalMemory: ProjectTechnicalMemory;
  cardImage: ImageMetadata;
  heroImage: ImageMetadata;
  heroImageAlt: string;
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
    location: "Contexto urbano ficticio",
    year: 2023,
    area: "48.600 m² estimados",
    status: "Proyecto conceptual",
    introduction:
      "Torre conceptual de uso mixto organizada como tres cuerpos prismáticos desplazados. Las terrazas elevadas, el basamento público y los marcos diagonales construyen una transición visible entre arquitectura, paisaje y ciudad.",
    description:
      "La propuesta parte de una silueta vertical fragmentada en tres volúmenes de proporciones equivalentes. Sus desplazamientos evitan una lectura monolítica y generan niveles intermedios abiertos, reconocibles desde la escala urbana.\n\nUn basamento pétreo prolonga el edificio hacia la plaza y concentra los accesos públicos. Sobre él, la fachada mantiene una modulación vertical continua mientras los marcos diagonales señalan las transiciones entre cuerpos y acompañan las terrazas ajardinadas.\n\nEl proyecto se presenta como una exploración visual y arquitectónica ficticia. Las imágenes describen una dirección conceptual, no una obra construida ni documentación apta para ejecución.",
    technicalMemory: {
      introduction:
        "Tres cuerpos desplazados organizan la torre. Los niveles de transferencia liberan terrazas elevadas y conectan la estructura con el basamento público.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación",
          title: "Torre, plaza y conexiones urbanas",
          caption:
            "La torre se retira del borde para liberar una plaza continua y ordenar los accesos desde la ciudad.",
          image: tramaAerial,
          alt: "Vista aérea de la implantación conceptual de Trama 46, con la torre, sus accesos y el espacio público circundante",
        },
        {
          type: "Terraza elevada",
          title: "Paisaje entre volúmenes",
          caption:
            "Las plataformas ajardinadas crean espacios de estancia entre los cuerpos y acompañan los niveles de transferencia.",
          image: tramaSkyTerrace,
          alt: "Terraza elevada de Trama 46 con vegetación, áreas de estancia y estructura diagonal visible",
        },
        {
          type: "Escala urbana",
          title: "Torre y paisaje vial",
          caption:
            "El basamento sostiene la escala peatonal mientras la torre construye una presencia reconocible sobre la avenida.",
          image: tramaStreet,
          alt: "Visualización conceptual de Trama 46 desde una avenida arbolada con peatones y tránsito urbano",
        },
        {
          type: "Transición estructural",
          title: "Estructura y paisaje",
          caption:
            "Los marcos diagonales liberan las terrazas intermedias y hacen visible el encuentro entre los cuerpos.",
          image: tramaTransferLevelDetail,
          alt: "Detalle exterior de Trama 46 con marcos diagonales, fachada modular y vegetación en un nivel de transferencia",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Torre, plaza y conexiones urbanas",
          caption: "Huella, accesos y recorridos se organizan alrededor del basamento público.",
          image: tramaTechnicalImplantation,
          alt: "Plano de implantación conceptual de Trama 46 con la torre, la plaza, los accesos y el contexto urbano inmediato",
        },
        {
          type: "Sistema volumétrico",
          title: "Apilamiento y terrazas",
          caption: "Los tres cuerpos se desplazan y se apoyan sobre niveles estructurales de transferencia.",
          image: tramaTechnicalAxonometric,
          alt: "Axonometría conceptual de Trama 46 con el basamento, los tres volúmenes apilados y las terrazas intermedias",
        },
        {
          type: "Sección estructural",
          title: "Niveles de transferencia",
          caption: "Núcleo, plantas y marcos diagonales trabajan como un sistema continuo en altura.",
          image: tramaTechnicalSection,
          alt: "Sección longitudinal conceptual de Trama 46 con el núcleo, las plantas y los niveles de transferencia estructural",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Apilamiento legible",
          description: "Tres cuerpos desplazados construyen una silueta reconocible sin perder continuidad vertical.",
        },
        {
          label: "Transición",
          title: "Estructura expresada",
          description: "Los marcos diagonales hacen visibles los niveles de encuentro entre los volúmenes.",
        },
        {
          label: "Paisaje",
          title: "Terrazas elevadas",
          description: "La vegetación acompaña las plataformas intermedias y extiende el proyecto hacia la plaza.",
        },
      ],
    },
    cardImage: tramaHero,
    heroImage: tramaHero,
    heroImageAlt:
      "Visualización conceptual de Trama 46, una torre de tres volúmenes desplazados sobre un basamento público",
    gallery: [
      {
        image: tramaHero,
        alt: "Visualización conceptual de Trama 46, una torre de tres volúmenes desplazados sobre un basamento público",
        caption: "Vista general de la torre, sus terrazas intermedias y el basamento público.",
      },
      {
        image: tramaAerial,
        alt: "Vista aérea oblicua de Trama 46 y su plaza dentro de un contexto urbano ficticio",
        caption: "Implantación urbana, basamento público y secuencia de terrazas elevadas.",
      },
      {
        image: tramaTopView,
        alt: "Vista cenital de Trama 46, sus cubiertas, terrazas y espacio público perimetral",
        caption: "Superposición de huellas y relación del edificio con la parcela.",
      },
      {
        image: tramaStreet,
        alt: "Vista de Trama 46 desde una avenida arbolada con peatones y tránsito urbano",
        caption: "La torre desde la escala cotidiana de la calle.",
      },
      {
        image: tramaTransferLevelDetail,
        alt: "Detalle exterior de Trama 46 con marcos diagonales, fachada modular y vegetación en un nivel de transferencia",
        caption: "Fachada modular, marcos diagonales y paisaje en el nivel de transferencia.",
      },
      {
        image: tramaSkyTerrace,
        alt: "Terraza intermedia de Trama 46 con vegetación, áreas de descanso y marcos estructurales diagonales",
        caption: "Escala humana, paisaje elevado y estructura en los niveles de transición.",
      },
      {
        image: tramaLobby,
        alt: "Lobby conceptual de Trama 46 con piedra clara, vidrio y carpinterías metálicas",
        caption: "Continuidad material entre el basamento, el acceso y el paisaje exterior.",
      },
      {
        image: tramaPlazaApproach,
        alt: "Aproximación frontal a Trama 46 desde una plaza pública con peatones, arbolado y áreas de estancia",
        caption: "Llegada peatonal, basamento público y relación frontal con la plaza.",
      },
      {
        image: tramaSharedSpaceTerrace,
        alt: "Espacio interior común de Trama 46 conectado con una terraza elevada y enmarcado por la estructura diagonal",
        caption: "Interior de uso común, estructura visible y continuidad con la terraza elevada.",
      },
      {
        image: tramaOffice,
        alt: "Interior de una planta de oficinas de Trama 46 con fachada acristalada y vistas hacia la ciudad",
        caption: "Espacio de trabajo, luz natural y continuidad con la modulación exterior.",
      },
      {
        image: tramaFacade,
        alt: "Detalle vertical de la fachada, la estructura diagonal y una terraza de Trama 46",
        caption: "Modulación de fachada, estructura visible y vegetación intermedia.",
      },
      {
        image: tramaTerraceView,
        alt: "Vista distante de Trama 46 desde una terraza urbana ajardinada",
        caption: "Presencia de la torre dentro del perfil urbano.",
      },
      {
        image: tramaBlueHour,
        alt: "Vista exterior de Trama 46 durante la hora azul con las terrazas y el basamento iluminados",
        caption: "La torre y su actividad pública al anochecer dentro del perfil urbano.",
      },
    ],
    aspectRatioClass: "aspect-[4/3]",
    gridClass: "md:col-span-7",
  },
  {
    slug: "estrato-38",
    name: "Estrato 38",
    index: "02",
    category: "Edificio de oficinas",
    subtitle: "Torre de oficinas",
    location: "Contexto urbano ficticio",
    year: 2024,
    area: "31.800 m² estimados",
    status: "Proyecto conceptual",
    introduction:
      "Torre conceptual de oficinas definida por una envolvente curva y tres jardines elevados. El basamento pétreo, la fachada modulada y los vacíos abiertos construyen una transición gradual entre espacio de trabajo, paisaje y ciudad.",
    description:
      "Estrato 38 se plantea como una torre de volumen continuo cuya silueta se curva suavemente a medida que asciende. La ligera inflexión de la fachada evita una presencia rígida y permite que el edificio cambie de expresión según el punto de vista.\n\nTres vacíos ajardinados interrumpen la envolvente acristalada y forman estratos reconocibles dentro de la composición vertical. Estos niveles introducen profundidad, vegetación y espacios exteriores vinculados con las plantas de oficinas, sin fragmentar la continuidad general de la torre.\n\nEn la base, un volumen pétreo se retrae para proteger el acceso y extender el edificio hacia una plaza arbolada. La propuesta se presenta como una exploración arquitectónica ficticia sobre altura, paisaje integrado y espacios de trabajo conectados con el exterior.",
    technicalMemory: {
      introduction:
        "La documentación conceptual recorre la relación entre la curvatura de la torre, los jardines elevados, la modulación de la envolvente y el basamento abierto hacia la plaza.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación",
          title: "Torre, plaza y contexto urbano",
          caption:
            "La torre se ubica sobre un basamento retraído que ordena los accesos y libera una plaza pública arbolada.",
          image: estratoAerial,
          alt: "Vista aérea oblicua de Estrato 38, su basamento pétreo, la plaza pública y el contexto urbano ficticio",
        },
        {
          type: "Jardines elevados",
          title: "Paisaje entre plantas",
          caption:
            "Los vacíos abiertos incorporan vegetación y espacios exteriores dentro de la continuidad vertical del edificio.",
          image: estratoLandscapedVoid,
          alt: "Jardín elevado de Estrato 38 integrado en la fachada curva de vidrio y aluminio",
        },
        {
          type: "Escala urbana",
          title: "Curvatura y perfil de la torre",
          caption:
            "La silueta cambia gradualmente según el punto de vista y construye una presencia reconocible en el paisaje urbano.",
          image: estratoUrbanProfile,
          alt: "Vista urbana nocturna de Estrato 38 desde una plaza arbolada, con la torre iluminada y edificios vecinos",
        },
        {
          type: "Basamento",
          title: "Acceso y transición pública",
          caption: "Piedra, vidrio y vegetación articulan el encuentro entre el vestíbulo, la plaza y la torre.",
          image: estratoLobbyInterior,
          alt: "Lobby interior de Estrato 38 con piedra clara, recepción curva y fachada acristalada hacia la plaza",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Huella, accesos y plaza",
          caption: "Relación conceptual entre el basamento, los recorridos peatonales y el paisaje perimetral.",
          image: estratoTechnicalImplantation,
          alt: "Plano cenital conceptual de implantación de Estrato 38 con torre curva, plaza arbolada, recorridos y espejos de agua",
        },
        {
          type: "Planta tipo",
          title: "Núcleo, oficinas y envolvente",
          caption: "Organización conceptual de las plantas dentro de una geometría curva continua.",
          image: estratoTechnicalTypicalFloor,
          alt: "Planta tipo conceptual de Estrato 38 con núcleo central, oficinas abiertas, salas de reunión y jardín elevado",
        },
        {
          type: "Sección longitudinal",
          title: "Torre y jardines elevados",
          caption: "Relación vertical entre el basamento, las plantas de oficinas y los tres niveles abiertos.",
          image: estratoTechnicalSection,
          alt: "Sección longitudinal conceptual de Estrato 38 con basamento, núcleo central, oficinas y tres jardines elevados",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Curvatura continua",
          description:
            "Una inflexión gradual modifica la percepción de la torre sin dividirla en cuerpos independientes.",
        },
        {
          label: "Paisaje",
          title: "Estratos elevados",
          description: "Tres vacíos ajardinados introducen profundidad y espacios exteriores dentro de la envolvente.",
        },
        {
          label: "Planta baja",
          title: "Umbral público",
          description: "El basamento retraído protege el acceso y prolonga la plaza hacia el interior del edificio.",
        },
      ],
    },
    cardImage: estratoCard,
    heroImage: estratoHero,
    heroImageAlt:
      "Visualización conceptual de Estrato 38, una torre curva de oficinas con tres jardines elevados sobre un basamento pétreo",
    gallery: [
      {
        image: estratoHero,
        alt: "Visualización conceptual de Estrato 38, una torre curva de oficinas con tres jardines elevados sobre un basamento pétreo",
        caption: "Vista general de la torre, su envolvente curva y los jardines elevados sobre el basamento.",
      },
      {
        image: estratoCard,
        alt: "Vista vertical de Estrato 38 desde la plaza pública, con el basamento pétreo y la torre curva",
        caption: "La escala peatonal del basamento introduce la presencia vertical de la torre.",
      },
      {
        image: estratoAerial,
        alt: "Vista aérea oblicua de Estrato 38, su basamento pétreo, la plaza pública y el contexto urbano ficticio",
        caption: "La torre, la plaza y el paisaje urbano se organizan como una única secuencia de acceso.",
      },
      {
        image: estratoLandscapedVoid,
        alt: "Jardín elevado de Estrato 38 integrado en la fachada curva de vidrio y aluminio",
        caption: "Un nivel exterior de trabajo y contemplación ocupa el vacío abierto de la envolvente.",
      },
      {
        image: estratoLobbyInterior,
        alt: "Lobby interior de Estrato 38 con piedra clara, recepción curva y fachada acristalada hacia la plaza",
        caption: "El vestíbulo prolonga la curva de la torre en un umbral público de piedra, madera y vidrio.",
      },
      {
        image: estratoUrbanProfile,
        alt: "Vista urbana nocturna de Estrato 38 desde una plaza arbolada, con la torre iluminada y edificios vecinos",
        caption:
          "Al anochecer, la torre establece una escala reconocible dentro de la plaza y el tejido urbano circundante.",
      },
      {
        image: estratoOfficeInterior,
        alt: "Planta de oficinas de Estrato 38 junto a la fachada curva acristalada, con puestos de trabajo y salas de reunión",
        caption:
          "La planta de oficinas se organiza junto a la envolvente curva y mantiene una relación constante con la ciudad.",
      },
      {
        image: estratoPlazaApproach,
        alt: "Aproximación peatonal al acceso de Estrato 38 desde una plaza arbolada junto al basamento pétreo",
        caption: "La llegada peatonal revela el basamento curvo como un umbral entre la plaza, el lobby y la torre.",
      },
      {
        image: estratoFacadeDetail,
        alt: "Detalle material de Estrato 38 con basamento pétreo curvo, vidrio azul grisáceo y montantes verticales de aluminio",
        caption: "La envolvente combina piedra, vidrio y aluminio en una curvatura continua de escala precisa.",
      },
      {
        image: estratoSharedSpace,
        alt: "Espacio común elevado de Estrato 38 con lounge, biblioteca y jardín interior junto a la fachada curva",
        caption:
          "Los espacios comunes vinculan el trabajo informal, la vegetación y las vistas a través de la envolvente curva.",
      },
      {
        image: estratoVerticalCirculation,
        alt: "Circulación vertical de Estrato 38 con escalera escultórica, ascensores, piedra clara y fachada acristalada",
        caption:
          "La circulación vertical convierte el núcleo en un espacio luminoso y continuo entre los niveles de oficinas.",
      },
    ],
    aspectRatioClass: "aspect-[4/5]",
    gridClass: "md:col-span-5 md:pt-12 lg:pt-20",
  },
  {
    slug: "cota-21",
    name: "Cota 21",
    index: "03",
    category: "Residencial unifamiliar",
    subtitle: "Mansión en ladera",
    location: "Contexto costero ficticio",
    year: 2025,
    area: "1.180 m² estimados",
    status: "Proyecto conceptual",
    introduction:
      "Residencia unifamiliar implantada sobre una ladera mediterránea. Cota 21 articula volúmenes escalonados, muros de piedra y plataformas exteriores para construir una relación precisa entre vivienda, roca y horizonte.",
    description:
      "Cota 21 se organiza mediante una secuencia compacta de piezas habitables que siguen la pendiente y se abren hacia el paisaje costero. La arquitectura alterna muros de piedra local, losas de hormigón cálido y paños acristalados protegidos por aleros profundos.\n\nEl acceso se produce desde la cota alta y desciende hacia un sistema de patios, terrazas y espacios de estancia vinculados con el terreno. Las áreas sociales se prolongan hacia una piscina lateral y hacia plataformas exteriores que preservan la lectura rocosa de la parcela.\n\nLa propuesta explora una residencia contemporánea de carácter tectónico: una arquitectura precisa, contenida y arraigada en la ladera, donde cada nivel responde a una cota distinta del paisaje.",
    technicalMemory: {
      introduction:
        "La documentación conceptual de Cota 21 recorre la implantación en ladera, el sistema de plataformas, la relación entre piedra y hormigón y la secuencia de acceso desde la cota alta.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación en ladera",
          title: "Casa, roca y horizonte",
          caption:
            "La residencia se apoya sobre la pendiente mediante plataformas que reducen el movimiento de tierra y preservan la topografía.",
          image: cotaAerial,
          alt: "Vista aérea oblicua de Cota 21 implantada en una ladera costera rocosa, con plataformas, piscina y recorridos de acceso",
        },
        {
          type: "Volumetría escalonada",
          title: "Piezas habitables entre muros",
          caption:
            "Los volúmenes se desplazan siguiendo las cotas y construyen patios, umbrales y terrazas protegidas.",
          image: cotaExteriorNight,
          alt: "Vista nocturna de Cota 21 con volúmenes escalonados, terrazas iluminadas, piscina y muros de piedra sobre la ladera",
        },
        {
          type: "Relación con el paisaje",
          title: "Terrazas hacia el horizonte",
          caption:
            "Los espacios exteriores prolongan las áreas sociales sin borrar la presencia de la roca y la vegetación mediterránea.",
          image: cotaUpperTerrace,
          alt: "Terraza superior de Cota 21 extendida hacia el paisaje costero, con pérgola de madera, vegetación mediterránea y vistas al mar",
        },
        {
          type: "Acceso y umbral",
          title: "Descenso desde la cota alta",
          caption:
            "El recorrido de llegada atraviesa muros de piedra, patios y cambios de nivel antes de alcanzar las áreas de estancia.",
          image: cotaEntryAccess,
          alt: "Acceso de Cota 21 entre muros de piedra y vegetación mediterránea, con puerta de madera y apertura hacia el mar",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Emplazamiento topográfico y accesos",
          caption:
            "Huella construida, curvas de nivel, recorridos de llegada y plataformas exteriores de la residencia.",
          image: cotaTechnicalImplantation,
          alt: "Plano cenital conceptual de implantación de Cota 21 sobre una ladera rocosa junto al mar, con plataformas, piscina y recorridos",
        },
        {
          type: "Sistema volumétrico",
          title: "Plataformas, patios y muros",
          caption: "Despiece conceptual de los volúmenes habitables, los muros de piedra y los planos horizontales.",
          image: cotaTechnicalAxonometric,
          alt: "Axonometría explotada conceptual de Cota 21 con plataformas, patios, muros de piedra, piscina y cubiertas",
        },
        {
          type: "Sección longitudinal",
          title: "Casa escalonada en la pendiente",
          caption:
            "Relación vertical entre la cota de acceso, los espacios sociales, los dormitorios y el paisaje costero.",
          image: cotaTechnicalSection,
          alt: "Sección longitudinal conceptual de Cota 21 con volúmenes escalonados, muros de piedra, piscina y ladera costera",
        },
      ],
      highlights: [
        {
          label: "Implantación",
          title: "Arquitectura por cotas",
          description:
            "Cada volumen responde a una altura distinta del terreno para reducir el impacto y conservar la lectura de la ladera.",
        },
        {
          label: "Tectónica",
          title: "Piedra, hormigón y vidrio",
          description:
            "La materialidad combina muros arraigados al terreno con planos horizontales cálidos y aperturas precisas hacia el paisaje.",
        },
        {
          label: "Paisaje",
          title: "Terrazas habitables",
          description:
            "Patios, plataformas y piscina lateral extienden la vivienda hacia el horizonte sin convertir el paisaje en un fondo decorativo.",
        },
      ],
    },
    cardImage: cotaCard,
    heroImage: cotaHero,
    heroImageAlt:
      "Residencia conceptual Cota 21, compuesta por volúmenes escalonados de piedra, hormigón y vidrio sobre una ladera costera",
    gallery: [
      {
        image: cotaHero,
        alt: "Residencia conceptual Cota 21, compuesta por volúmenes escalonados de piedra, hormigón y vidrio sobre una ladera costera",
        caption: "Vista general de la residencia y su relación escalonada con la ladera mediterránea.",
      },
      {
        image: cotaCard,
        alt: "Vista vertical de Cota 21 desde la ladera, con muros de piedra, patios y espacios acristalados",
        caption: "Muros, patios y terrazas construyen una secuencia de umbrales entre la casa y el paisaje.",
      },
      {
        image: cotaAerial,
        alt: "Vista aérea oblicua de Cota 21 implantada en una ladera costera rocosa, con plataformas, piscina y recorridos de acceso",
        caption: "La implantación revela cómo la vivienda se adapta a las distintas cotas del terreno.",
      },
      {
        image: cotaPoolTerrace,
        alt: "Terraza principal de Cota 21 con piscina lateral, solárium de piedra, muros de contención y vistas al mar",
        caption:
          "La piscina lateral prolonga las áreas sociales hacia el paisaje sin ocultar la materialidad de la ladera.",
      },
      {
        image: cotaLivingInterior,
        alt: "Estar principal de Cota 21 en doble altura con escalera, cocina, piedra, hormigón y vistas hacia el paisaje costero",
        caption: "La doble altura conecta los niveles de la vivienda y prolonga el estar hacia la terraza exterior.",
      },
      {
        image: cotaInteriorLounge,
        alt: "Sala de estar de Cota 21 con muro de piedra, hormigón visto, biblioteca y apertura hacia el mar",
        caption: "Piedra, hormigón y madera construyen una atmósfera interior continua con la ladera.",
      },
      {
        image: cotaKitchenDining,
        alt: "Cocina y comedor de Cota 21 con isla de piedra, mobiliario de madera, muro de piedra y vistas al mar",
        caption: "La cocina y el comedor prolongan la materialidad de la casa hacia el paisaje costero.",
      },
      {
        image: cotaBedroomInterior,
        alt: "Dormitorio principal de Cota 21 con muro de piedra, cama de madera, vidrio y vistas hacia la ladera y el mar",
        caption: "El dormitorio retoma la piedra, la madera y la apertura controlada hacia el paisaje.",
      },
      {
        image: cotaEntryAccess,
        alt: "Acceso principal de Cota 21 entre muros de piedra, vegetación mediterránea y una puerta de madera con vistas al mar",
        caption: "El acceso construye una llegada contenida entre piedra, vegetación y horizonte.",
      },
      {
        image: cotaStairInterior,
        alt: "Escalera interior de Cota 21 con peldaños de madera, muro de piedra, hormigón, vidrio y vista hacia la ladera costera",
        caption: "La escalera articula las cotas interiores y conduce la luz hacia el corazón de la casa.",
      },
      {
        image: cotaLuxuryBathroom,
        alt: "Baño principal de Cota 21 con bañera exenta, lavabo de piedra, muros de piedra y vistas al mar",
        caption: "El baño prolonga la materialidad de la residencia hacia una atmósfera de retiro frente al paisaje.",
      },
      {
        image: cotaUpperTerrace,
        alt: "Terraza superior de Cota 21 con pérgola de madera, mobiliario exterior, vegetación mediterránea y vistas al mar",
        caption: "La terraza superior funciona como una plataforma habitable abierta al horizonte costero.",
      },
      {
        image: cotaCourtyardPatio,
        alt: "Patio interior de Cota 21 con olivo central, muros de piedra, hormigón y apertura hacia el mar",
        caption: "El patio interior introduce luz, vegetación y una pausa de sombra en la secuencia de la vivienda.",
      },
      {
        image: cotaStudyLibrary,
        alt: "Estudio-biblioteca de Cota 21 con estantería de madera, muro de piedra, escritorio de hormigón y vistas al mar",
        caption: "El estudio reúne la materialidad de la casa en un espacio de concentración orientado al paisaje.",
      },
      {
        image: cotaExteriorNight,
        alt: "Vista nocturna de Cota 21 iluminada sobre una ladera costera, con volúmenes escalonados, piscina y muros de piedra",
        caption: "Al anochecer, la luz interior revela la secuencia escalonada de la residencia sobre la ladera.",
      },
    ],
    aspectRatioClass: "aspect-[4/5]",
    gridClass: "md:col-span-5",
  },
  {
    slug: "litoral-14",
    name: "Litoral 14",
    index: "04",
    category: "Residencial multifamiliar",
    subtitle: "Residencias frente al mar",
    location: "Contexto costero ficticio",
    year: 2022,
    area: "12.400 m² estimados",
    status: "Proyecto conceptual",
    introduction:
      "Edificio residencial costero que articula viviendas, terrazas profundas y vacíos ajardinados sobre un basamento abierto al paseo marítimo.",
    description:
      "Litoral 14 se plantea como una pieza residencial vinculada a una plaza pública y al recorrido costero. El basamento retranqueado amplía el espacio peatonal y concentra los accesos y las áreas comunes bajo una estructura abierta y permeable.\n\nLa envolvente combina marcos de piedra clara, balcones continuos y celosías metálicas modernas. Los retranqueos introducen terrazas ajardinadas de distinta escala y construyen una transición gradual entre la intimidad de las viviendas y el paisaje marítimo.\n\nEn los niveles residenciales, los espacios interiores se prolongan hacia balcones profundos orientados a las visuales. La propuesta se presenta como una exploración conceptual sobre densidad, sombra, vegetación y vida costera.",
    technicalMemory: {
      introduction:
        "La documentación técnica recorre la implantación costera, la organización de las viviendas y la relación entre basamento, terrazas y vacíos ajardinados.",
      statusLabel: "Documentación conceptual",
      renders: [
        {
          type: "Implantación costera",
          title: "Edificio, plaza y paseo marítimo",
          caption: "La volumetría se integra en una parcela abierta entre la avenida y el frente costero.",
          image: litoralAerial,
          alt: "Vista aérea conceptual de Litoral 14, su plaza pública y el paseo marítimo",
        },
        {
          type: "Vacíos ajardinados",
          title: "Terrazas dentro de la envolvente",
          caption: "Los retranqueos incorporan vegetación y espacios comunes entre los niveles residenciales.",
          image: litoralLandscapedVoid,
          alt: "Vista vertical de los vacíos ajardinados y las terrazas de Litoral 14",
        },
        {
          type: "Terrazas habitables",
          title: "Extensión exterior de las viviendas",
          caption: "Los balcones profundos vinculan los interiores con las visuales hacia el mar.",
          image: litoralSeaTerrace,
          alt: "Terraza residencial ajardinada de Litoral 14 orientada hacia el mar",
        },
        {
          type: "Basamento público",
          title: "Continuidad entre lobby y plaza",
          caption: "La planta baja mantiene una relación visual directa con el espacio público costero.",
          image: litoralLobby,
          alt: "Lobby conceptual de Litoral 14 conectado visualmente con la plaza costera",
        },
      ],
      documents: [
        {
          type: "Implantación",
          title: "Parcela y frente costero",
          caption: "Huella, plaza, accesos y relación con la avenida y el paseo marítimo.",
          image: litoralTechnicalImplantation,
          alt: "Plano conceptual de implantación de Litoral 14 junto al frente costero",
        },
        {
          type: "Planta tipo",
          title: "Viviendas, núcleo y terrazas",
          caption: "Organización residencial en torno al núcleo y los vacíos ajardinados.",
          image: litoralTechnicalTypicalFloor,
          alt: "Planta residencial tipo conceptual de Litoral 14",
        },
        {
          type: "Sección longitudinal",
          title: "Basamento, viviendas y costa",
          caption: "Relación vertical entre el espacio público, los niveles residenciales y las terrazas.",
          image: litoralTechnicalSection,
          alt: "Sección longitudinal conceptual de Litoral 14 y su relación con el frente costero",
        },
      ],
      highlights: [
        {
          label: "Volumetría",
          title: "Vacíos habitables",
          description: "Los retranqueos interrumpen la masa del edificio e incorporan terrazas y vegetación en altura.",
        },
        {
          label: "Envolvente",
          title: "Profundidad y sombra",
          description: "Balcones, marcos pétreos y celosías construyen una fachada profunda y graduada.",
        },
        {
          label: "Planta baja",
          title: "Continuidad pública",
          description: "El basamento abierto conecta el lobby y las áreas comunes con la plaza y el paseo costero.",
        },
      ],
    },
    cardImage: litoralCard,
    heroImage: litoralHero,
    heroImageAlt:
      "Visualización conceptual de Litoral 14, un edificio residencial con terrazas ajardinadas frente al mar",
    gallery: [
      {
        image: litoralHero,
        alt: "Vista general de Litoral 14 desde la plaza pública junto al paseo costero",
        caption: "La torre residencial y su basamento abierto frente al espacio público costero.",
      },
      {
        image: litoralCard,
        alt: "Vista vertical de Litoral 14 y sus terrazas escalonadas desde la plaza",
        caption: "Marcos pétreos, celosías oscuras y vegetación definen la envolvente.",
      },
      {
        image: litoralPlazaAccess,
        alt: "Aproximación peatonal al basamento de Litoral 14 desde la plaza ajardinada",
        caption: "Acceso, áreas comunes y paisaje se integran en la planta baja.",
      },
      {
        image: litoralLandscapedVoid,
        alt: "Vacío ajardinado entre los balcones y celosías verticales de Litoral 14",
        caption: "Los retranqueos incorporan terrazas compartidas dentro del volumen residencial.",
      },
      {
        image: litoralAerial,
        alt: "Vista aérea de Litoral 14 entre la avenida, la plaza y el paseo marítimo",
        caption: "Implantación del edificio y continuidad del sistema de espacios públicos.",
      },
      {
        image: litoralBlueHour,
        alt: "Vista exterior de Litoral 14 iluminado durante la hora azul",
        caption: "La actividad interior y del basamento acompaña el paseo costero al anochecer.",
      },
      {
        image: litoralSeaTerrace,
        alt: "Terraza residencial de Litoral 14 con vegetación y vistas hacia el mar",
        caption: "Un espacio exterior protegido prolonga la vivienda hacia el paisaje costero.",
      },
      {
        image: litoralLobby,
        alt: "Interior del lobby de Litoral 14 abierto visualmente hacia la plaza y el mar",
        caption: "Piedra clara, madera y celosías articulan el acceso principal.",
      },
      {
        image: litoralResidenceInterior,
        alt: "Interior residencial de Litoral 14 conectado con una terraza frente al mar",
        caption: "Continuidad entre el espacio doméstico, el balcón profundo y las visuales.",
      },
      {
        image: litoralFacadeDetail,
        alt: "Detalle de los marcos pétreos, celosías oscuras y jardineras de Litoral 14",
        caption: "La materialidad se organiza mediante capas de piedra, vidrio, metal y vegetación.",
      },
      {
        image: litoralBayView,
        alt: "Vista de Litoral 14 desde el paseo costero junto a la bahía",
        caption: "El edificio acompaña el recorrido público entre la plaza y la línea costera.",
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
