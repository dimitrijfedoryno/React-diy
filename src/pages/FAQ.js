import React from 'react';
import Background from '../components/Background';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
<div className="px-4 py-20 bg-lightblue">
    <Background />
    <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
        <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
            Nejčastější dotazy
        </h2>
        <dl className="w-full md:w-2/3">
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    Jaké jsou základní složky potřebné pro míchání vlastního e-liquidu?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                    <b>Báze: </b>Směs propylenglykolu (PG) a rostlinného glycerinu (VG). Poměr PG/VG může ovlivnit hustotu páry a intenzitu chuti.
                </p>
                <p>
                    <b>Nikotin: </b>Pokud chcete e-liquid s nikotinem, můžete přidat nikotinový roztok. Při manipulaci s nikotinem buďte opatrní, protože je toxický.
                </p>
                <p>
                    <b>Příchuťě: </b>Koncentrované příchutě, které dodávají e-liquidu chuť. Používejte příchutě určené speciálně pro e-liquidy.
                </p>
                <p>
                    <b>Aditiva (volitelné): </b>Mohou zlepšit chuť nebo kvalitu páry, například sladidla nebo mentol.
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    Jak vypočítám správné množství jednotlivých složek pro míchání e-liquidu?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                    K výpočtu správného množství jednotlivých složek použijte <Link to="/liquid">kalkulačku</Link>, která vám pomůže určit přesné množství báze, nikotinu a příchutí na základě požadovaného objemu a síly e-liquidu.
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                    Jak dlouho bych měl nechat svůj e-liquid zrát a proč je to důležité?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                    Zrání e-liquidu je proces, kdy se složky míchají a vyvíjejí svoji chuť. Doba zrání se liší podle typu příchutí:
                    <p><b>Ovocné příchutě:</b> Obvykle 1-3 dny.</p>
                    <p><b>Krémové, dezertní a tabákové příchutě:</b> Obvykle 1-2 týdny.</p>
                </p>
                <hr />
                <i className='text-purple-500'>
                    Zrání je důležité, protože umožňuje příchutím plně se rozvinout a smísit se s bázi a nikotinem, což zlepšuje celkovou chuť e-liquidu. Během zrání e-liquid skladujte na tmavém a chladném místě, občas ho protřepejte, aby se složky dobře promísily.
                </i>
            </dd>
        </dl>
    </div>
</div>

  );
};

export default FAQ;
