export type TCurso = {
  nombre: string;
  descripcion: string;
  objetivos: string[];
  beneficios: string[];
  salidasLaborales: string[];
  slogan: string;
  modulos: {
    basico: {
      titulo: string;
      duracion: string;
      contenido: {
        tema: string;
        aprendizaje: string;
      }[];
    };
    avanzado: {
      titulo: string;
      duracion: string;
      contenido: {
        tema: string;
        aprendizaje: string;
      }[];
    };
  };
};

const cursos: TCurso[] = [
  {
    nombre: "Coctelería",
    slogan: "Mezclando momentos, sirviendo sonrisas",
    descripcion:
      "Este curso ofrece una formación completa en coctelería, desde la preparación de cócteles clásicos hasta técnicas avanzadas de mixología. Ideal para quienes desean iniciar una carrera en el mundo de la coctelería.",
    objetivos: [
      "Aprender la historia y la cultura de la coctelería.",
      "Desarrollar habilidades prácticas en la mezcla y presentación de bebidas.",
      "Conocer las tendencias actuales en coctelería y mixología.",
    ],
    beneficios: [
      "Formación práctica con sesiones de degustación y preparación.",
      "Acceso a recursos y materiales actualizados del sector.",
      "Oportunidades de networking con profesionales del área.",
    ],
    salidasLaborales: [
      "Bartender en bares, restaurantes y eventos.",
      "Consultor de coctelería para empresas de bebidas.",
      "Propietario de un bar o establecimiento de bebidas.",
    ],
    modulos: {
      basico: {
        titulo: "Módulo Básico de Coctelería",
        duracion: "4 semanas",
        contenido: [
          {
            tema: "Introducción a la Coctelería",
            aprendizaje:
              "Conocer la historia de la coctelería y los tipos de bebidas.",
          },
          {
            tema: "Técnicas Básicas de Mezcla",
            aprendizaje:
              "Aprender a mezclar, agitar y servir bebidas correctamente.",
          },
          {
            tema: "Cócteles Clásicos",
            aprendizaje:
              "Preparar cócteles clásicos como el Mojito, Margarita y Martini.",
          },
        ],
      },
      avanzado: {
        titulo: "Módulo Avanzado de Coctelería",
        duracion: "6 semanas",
        contenido: [
          {
            tema: "Mixología Creativa",
            aprendizaje:
              "Desarrollar habilidades para crear cócteles únicos e innovadores.",
          },
          {
            tema: "Maridaje de Bebidas",
            aprendizaje:
              "Aprender a combinar bebidas con alimentos para realzar sabores.",
          },
          {
            tema: "Gestión de Bar",
            aprendizaje:
              "Conocer aspectos de la administración de un bar, incluyendo inventario y atención al cliente.",
          },
        ],
      },
    },
  },
  {
    nombre: "Barismo",
    slogan: "Despierta tus sentidos, una taza a la vez",
    descripcion:
      "Este curso proporciona una formación integral en barismo, desde la selección de granos hasta la preparación de cafés de especialidad. Ideal para quienes desean profundizar en el arte del café.",
    objetivos: [
      "Entender la historia y las variedades del café.",
      "Dominar las técnicas de preparación y presentación de café.",
      "Aprender sobre la gestión de una cafetería y atención al cliente.",
    ],
    beneficios: [
      "Formación teórica y práctica con catas de café.",
      "Acceso a herramientas y maquinaria de barismo profesional.",
      "Oportunidades de empleo en el creciente mercado de cafés de especialidad.",
    ],
    salidasLaborales: [
      "Barista en cafeterías y restaurantes.",
      "Consultor en la industria del café.",
      "Propietario de una cafetería o negocio relacionado con el café.",
    ],
    modulos: {
      basico: {
        titulo: "Módulo Básico de Barismo",
        duracion: "4 semanas",
        contenido: [
          {
            tema: "Introducción al Café",
            aprendizaje:
              "Conocer la historia del café y sus diferentes variedades.",
          },
          {
            tema: "Métodos de Preparación",
            aprendizaje:
              "Aprender a utilizar métodos de preparación como la prensa francesa, pour-over y espresso.",
          },
          {
            tema: "Técnicas de Espumado",
            aprendizaje:
              "Dominar el espumado de leche para la elaboración de lattes y cappuccinos.",
          },
        ],
      },
      avanzado: {
        titulo: "Módulo Avanzado de Barismo",
        duracion: "6 semanas",
        contenido: [
          {
            tema: "Café de Especialidad",
            aprendizaje:
              "Explorar la selección y cata de cafés de especialidad.",
          },
          {
            tema: "Latte Art",
            aprendizaje:
              "Aprender técnicas de arte en la leche para crear diseños en la superficie del café.",
          },
          {
            tema: "Gestión de Cafetería",
            aprendizaje:
              "Conocer aspectos de la administración de una cafetería, incluyendo atención al cliente y gestión de inventario.",
          },
        ],
      },
    },
  },
];

export { cursos };
