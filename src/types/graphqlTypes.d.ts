// export type Maybe<T> = T | null;
// export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
//   {[SubKey in K]?: Maybe<T[SubKey]>};
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
//   {[SubKey in K]: Maybe<T[SubKey]>};
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: string;
//   String: string;
//   Boolean: boolean;
//   Int: number;
//   Float: number;
//   Timestamp: any;
// };

// export type Query = {
//   __typename?: 'Query';
//   /** Retorna todos los sobrecalentamientos */
//   getSobrecalentamientos?: Maybe<Array<Maybe<Sobrecalentamiento>>>;
//   /** Retorna un sobrecalentamiento de acuerdo al mes, año, tienda y unidad */
//   getSobrecalentamientoForValidation?: Maybe<Sobrecalentamiento>;
//   /** Retorna todos las eficiencias de trabajo */
//   getEficienciasDeTrabajo?: Maybe<Array<Maybe<EficienciaDeTrabajo>>>;
//   /** Retorna una eficienca de trabajo de acuerdo al mes, año, tienda y unidad */
//   getEficienciaDeTrabajoForValidation?: Maybe<EficienciaDeTrabajo>;
//   /** Retorna todas las tiendas */
//   getTiendas?: Maybe<Array<Maybe<Tienda>>>;
//   /** Retornas todos los usuarios */
//   getUsuarios?: Maybe<Array<Maybe<Usuario>>>;
//   /** Retorna un usuario de acuerdo a su email */
//   getUsuario?: Maybe<Usuario>;
// };

// export type QueryGetSobrecalentamientoForValidationArgs = {
//   storeCR: Scalars['String'];
//   unit: Scalars['String'];
//   collection: Scalars['String'];
// };

// export type QueryGetEficienciaDeTrabajoForValidationArgs = {
//   storeCR: Scalars['String'];
//   unit: Scalars['String'];
// };

// export type QueryGetUsuarioArgs = {
//   email: Scalars['String'];
// };

// export type Mutation = {
//   __typename?: 'Mutation';
//   /** Agrega un nuevo sobrecalentamiento */
//   addSobrecalentamiento?: Maybe<Sobrecalentamiento>;
//   /** Actualiza un sobrecalentamiento exsitente */
//   updateSobrecalentamiento?: Maybe<Sobrecalentamiento>;
//   /** Agrega una nueva eficiencia de trabajo */
//   addEficienciaDeTrabajo?: Maybe<EficienciaDeTrabajo>;
//   /** Actauliza una eficiencia de trabajo existente */
//   updateEficienciaDeTrabajo?: Maybe<EficienciaDeTrabajo>;
//   /** Agrega una nueva tienda */
//   addTienda?: Maybe<Tienda>;
//   /** Agrega un nuevo usuario, recuerda que solo se agrega el usuario en db, ademas es necesario registrarlo en Firebase Auth */
//   addUsuario?: Maybe<CreatedUsuario>;
// };

// export type MutationAddSobrecalentamientoArgs = {
//   input: SobrecalentamientoInput;
//   collection: Scalars['String'];
// };

// export type MutationUpdateSobrecalentamientoArgs = {
//   input: SobrecalentamientoInput;
//   collection: Scalars['String'];
//   id?: Maybe<Scalars['String']>;
// };

// export type MutationAddEficienciaDeTrabajoArgs = {
//   input: EficienciaDeTrabajoInput;
// };

// export type MutationUpdateEficienciaDeTrabajoArgs = {
//   input: EficienciaDeTrabajoInput;
//   id: Scalars['String'];
// };

// export type MutationAddTiendaArgs = {
//   input: TiendaInput;
// };

// export type MutationAddUsuarioArgs = {
//   input: UsuarioInput;
// };

// export type EficienciaDeTrabajo = {
//   __typename?: 'EficienciaDeTrabajo';
//   id?: Maybe<Scalars['ID']>;
//   fecha_hora?: Maybe<Scalars['Timestamp']>;
//   CR?: Maybe<Scalars['String']>;
//   tienda: Scalars['String'];
//   id_usuario?: Maybe<Scalars['Int']>;
//   nombre_usuario?: Maybe<Scalars['String']>;
//   unidad?: Maybe<Scalars['String']>;
//   retorno?: Maybe<Scalars['Float']>;
//   inyeccion?: Maybe<Scalars['Float']>;
//   retorno2?: Maybe<Scalars['Float']>;
//   inyeccion2?: Maybe<Scalars['Float']>;
//   porcentaje_evaporador?: Maybe<Scalars['Float']>;
//   ciclos_evaporador?: Maybe<Scalars['Float']>;
//   porcentaje_condensador?: Maybe<Scalars['Float']>;
//   ciclos_condensador?: Maybe<Scalars['Float']>;
//   delta?: Maybe<Scalars['Float']>;
//   aprobado?: Maybe<Scalars['String']>;
//   comentarios?: Maybe<Scalars['String']>;
// };

// export type GeoPoint = {
//   __typename?: 'GeoPoint';
//   latitude?: Maybe<Scalars['Float']>;
//   longitude?: Maybe<Scalars['Float']>;
// };

// export type Tienda = {
//   __typename?: 'Tienda';
//   id?: Maybe<Scalars['ID']>;
//   nombre?: Maybe<Scalars['String']>;
//   ciudad?: Maybe<Scalars['String']>;
//   ubicacion?: Maybe<GeoPoint>;
// };

// export type Usuario = {
//   __typename?: 'Usuario';
//   id?: Maybe<Scalars['ID']>;
//   nombre?: Maybe<Scalars['String']>;
//   apellido?: Maybe<Scalars['String']>;
//   email?: Maybe<Scalars['String']>;
//   rol?: Maybe<Scalars['String']>;
// };

// export type CreatedUsuario = {
//   __typename?: 'CreatedUsuario';
//   id?: Maybe<Scalars['ID']>;
//   nombre?: Maybe<Scalars['String']>;
//   apellido?: Maybe<Scalars['String']>;
//   email?: Maybe<Scalars['String']>;
//   rol?: Maybe<Scalars['String']>;
//   password?: Maybe<Scalars['String']>;
// };

// export type SobrecalentamientoInput = {
//   CR: Scalars['String'];
//   tienda: Scalars['String'];
//   id_usuario: Scalars['Int'];
//   nombre_usuario: Scalars['String'];
//   unidad: Scalars['String'];
//   refrigerante: Scalars['String'];
//   presion_arranque: Scalars['Float'];
//   presion_paro: Scalars['Float'];
//   presion_succion: Scalars['Float'];
//   resistencia_pt1000: Scalars['Float'];
//   temp_tubo: Scalars['Float'];
//   temp_saturacion: Scalars['Float'];
//   temp_sobrecalentamiento: Scalars['Float'];
//   temp_ambiente: Scalars['Float'];
//   aprobado: Scalars['String'];
//   comentarios?: Maybe<Scalars['String']>;
// };

// export type EficienciaDeTrabajoInput = {
//   CR: Scalars['String'];
//   tienda: Scalars['String'];
//   id_usuario: Scalars['Int'];
//   nombre_usuario: Scalars['String'];
//   unidad: Scalars['String'];
//   retorno: Scalars['Float'];
//   inyeccion: Scalars['Float'];
//   retorno2?: Maybe<Scalars['Float']>;
//   inyeccion2?: Maybe<Scalars['Float']>;
//   porcentaje_evaporador: Scalars['Float'];
//   ciclos_evaporador: Scalars['Float'];
//   porcentaje_condensador: Scalars['Float'];
//   ciclos_condensador: Scalars['Float'];
//   delta: Scalars['Float'];
//   aprobado: Scalars['String'];
//   comentarios?: Maybe<Scalars['String']>;
// };

// export type GeoPointInput = {
//   latitude: Scalars['Float'];
//   longitude: Scalars['Float'];
// };

// export type TiendaInput = {
//   id: Scalars['ID'];
//   nombre: Scalars['String'];
//   ciudad: Scalars['String'];
//   ubicacion?: Maybe<GeoPointInput>;
// };

// export type UsuarioInput = {
//   id: Scalars['ID'];
//   nombre: Scalars['String'];
//   apellido: Scalars['String'];
//   email: Scalars['String'];
//   rol: Scalars['String'];
// };

export interface Sobrecalentamiento {
  id: string;
  fecha_hora: string;
  CR: string;
  tienda: string;
  id_usuario: number;
  nombre_usuario: string;
  unidad: string;
  refrigerante: string;
  presion_arranque: number;
  presion_paro: number;
  presion_succion: number;
  resistencia_pt1000?: number;
  temp_tubo: number;
  temp_saturacion: number;
  temp_sobrecalentamiento: number;
  temp_ambiente: number;
  aprobado: 'Si' | 'No';
  comentarios: string;
}

export interface EficienciaDeTrabajo {
  id: string;
  fecha_hora: string;
  CR: string;
  tienda: string;
  id_usuario: number;
  nombre_usuario: string;
  unidad: string;
  retorno: number;
  inyeccion: number;
  retorno2: number;
  inyeccion2: number;
  porcentaje_evaporador: number;
  ciclos_evaporador: number;
  porcentaje_condensador: number;
  ciclos_condensador: number;
  delta: number;
  aprobado: 'Si' | 'No';
  comentarios: string;
}
