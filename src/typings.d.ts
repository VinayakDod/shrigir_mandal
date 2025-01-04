// src/typings.d.ts
import * as $ from 'jquery';
import 'slick-carousel';

// Augment the JQuery type to include the slick method
declare global {
  interface JQuery {
    slick(options?: any): any; // This tells TypeScript that jQuery has the slick method
  }
}
declare var $: any;
declare module 'slick-carousel'