const buildDate = new Date().toLocaleDateString('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

export default function MentionsLegales() {
  return (
    <main className="mt-24 p-8 md:px-28 md:py-11 tracking-wide max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-red font-dancing">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Éditeur du site</h2>
        <p>
          <strong>Nom de l’association :</strong> Les Phénâtres de l'Artois<br />
          <strong>Statut :</strong> Association loi 1901<br />
          <strong>Adresse :</strong> Office culturel d’Arras 2, rue de la Douizième 62000 Arras<br />
          <strong>Email :</strong> lesphenatresdelartois62000@gmail.com<br />
          <strong>Responsable de publication :</strong> Angélique Copéré<br />
          <strong>RNA :</strong> W621009620<br />
          <strong>SIRET :</strong> 888 751 310 00010
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Hébergement du site</h2>
        <p>
          <strong>Hébergeur :</strong> Vercel Inc<br />
          <strong>Adresse :</strong> 650 California St, San Francisco, CA 94108, États-Unis<br />
          <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" className="text-blue-600 hover:underline">www.vercel.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Propriété intellectuelle</h2>
        <p>
          Le contenu de ce site (textes, images, logo, etc.) est la propriété de l’association Les Comédiens de la Lune. Toute reproduction, modification ou diffusion sans autorisation est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Responsabilité</h2>
        <p>
          L’association s’efforce de fournir des informations exactes, mais ne peut garantir l’absence totale d’erreurs. Les liens externes ne relèvent pas de sa responsabilité.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Données personnelles</h2>
        <p>
          Les données saisies via le formulaire de contact ne sont utilisées que pour répondre aux demandes. Elles ne sont ni stockées, ni revendues. Conformément au RGPD, vous pouvez nous contacter à <a href="mailto:lesphenatresdelartois62000@gmail.com" className="text-blue-600 hover:underline">lesphenatresdelartois62000@gmail.com</a> pour exercer vos droits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
        <p>
          Le site n’utilise pas de cookies à des fins de suivi ou d’analyse.
        </p>
      </section>

      <h2  className="text-xl font-semibold mb-2">7. Crédit photo</h2>
      <p>Les images présentes sur ce site proviennent de <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-red">Unsplash</a>.</p>
      <ul>
        <li>Photo de <a href="https://unsplash.com/fr/@kyleunderscorehead?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="text-red">Kyle Head</a></li>
        <li>Photo de <a href="https://unsplash.com/fr/@roblaughter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="text-red">Rob Laughter</a></li>
        <li>Photo de <a href="https://unsplash.com/fr/@kilyan_s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="text-red">Kilyan Sockalingum</a></li>
      </ul>

      <p className="text-sm text-gray-500 mt-11">Dernière mise à jour : {buildDate}</p>
    </main>
  );
}
