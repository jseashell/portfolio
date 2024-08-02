export interface ServicesCard {
  /** dom id */
  id: string;
  /** title/label/name */
  title: string;
  /** body copy describing this card */
  description: string;
  /** unique icon svg for this card */
  icon: `images/${string}.svg`;
  /** noun project credit for images per ToS */
  noun: `https://thenounproject.com/icon/${string}`;
}
