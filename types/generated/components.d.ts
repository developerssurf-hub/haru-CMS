import type { Schema, Struct } from '@strapi/strapi';

export interface ExamenOpcion extends Struct.ComponentSchema {
  collectionName: 'components_examen_opcions';
  info: {
    description: '';
    displayName: 'Opcion';
    icon: 'check';
  };
  attributes: {
    es_correcta: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    texto: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ExamenPregunta extends Struct.ComponentSchema {
  collectionName: 'components_examen_preguntas';
  info: {
    description: '';
    displayName: 'Pregunta';
    icon: 'question';
  };
  attributes: {
    enunciado: Schema.Attribute.RichText & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    opciones: Schema.Attribute.Component<'examen.opcion', true>;
    seccion_descripcion: Schema.Attribute.RichText;
    seccion_titulo: Schema.Attribute.String;
    tipo: Schema.Attribute.Enumeration<
      ['multiple_choice', 'true_false', 'contexto']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'multiple_choice'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'examen.opcion': ExamenOpcion;
      'examen.pregunta': ExamenPregunta;
    }
  }
}
