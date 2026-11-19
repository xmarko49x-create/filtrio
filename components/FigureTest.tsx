import type { ReactNode } from "react";

/**
 * Capture d'écran d'un test de première main, avec sa légende.
 *
 * Règle d'affichage : une capture n'est JAMAIS agrandie au-delà de sa taille
 * réelle (`w-auto` + `max-w-full`). Avant, `w-full` étirait chaque image sur
 * toute la largeur de la colonne : une capture de 360 px de large était
 * affichée à 974 px, soit un agrandissement de 2,7× qui la rendait floue.
 * La hauteur est plafonnée à 70 % de la fenêtre pour que les captures très
 * hautes (transcriptions, listes de styles) ne prennent pas un écran entier.
 */
export default function FigureTest({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block mx-auto w-auto max-w-full max-h-[70vh] object-contain"
      />
      <figcaption className="text-sm text-slate-400 leading-relaxed p-5 border-t border-slate-800/60">
        {caption}
      </figcaption>
    </figure>
  );
}
