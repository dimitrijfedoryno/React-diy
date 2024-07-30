import React, { useState } from "react";
import Background from "../components/Background";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Spirálky");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="px-4 py-20 bg-lightblue">
      <Background />
      <div className="flex flex-col max-w-6xl mx-auto">
        <h2 className="w-full text-3xl font-extrabold leading-9 text-center">
          Nejčastější dotazy
        </h2>
        <div className="flex justify-center mt-8 mb-4">
          <button
            onClick={() => handleTabClick("Spirálky")}
            className={`mx-2 px-4 py-2 font-semibold ${
              activeTab === "Spirálky"
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-white"
            }`}
          >
            Spirálky
          </button>
          <button
            onClick={() => handleTabClick("Liquid")}
            className={`mx-2 px-4 py-2 font-semibold ${
              activeTab === "Liquid"
                ? "text-white bg-blue-500"
                : "text-blue-500 bg-white"
            }`}
          >
            Liquid
          </button>
        </div>
        <div>
          {activeTab === "Spirálky" && (
            <div className="flex flex-col md:flex-row">
              <dl className="w-full">
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jaké jsou základní složky pro výpočet odporu cívky?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Pro výpočet odporu cívky potřebujete následující informace:
                  </p>
                  <p>
                    <b>Materiál drátu: </b>Vyberte materiál, jako je Kanthal A1,
                    Nichrome Ni80, Stainless Steel SS316, Nickel Ni200, nebo
                    Titanium Ti1.
                  </p>
                  <p>
                    <b>AWG (průměr drátu): </b>Určuje tloušťku drátu a
                    odpovídající odpor na metr.
                  </p>
                  <p>
                    <b>Průměr trnu: </b>Průměr použitého trnu nebo šroubováku,
                    kolem kterého drát navíjíte.
                  </p>
                  <p>
                    <b>Počet otáček: </b>Celkový počet závitů cívky.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jak vypočítám odpor své cívky pomocí této kalkulačky?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Použijte naši <Link to="/coil-calculator">kalkulačku</Link>,
                    kde zadáte materiál drátu, AWG, průměr trnu a počet otáček.
                    Kalkulačka automaticky vypočítá odpor vaší cívky na základě
                    těchto údajů.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jaké jsou běžné hodnoty odporu pro různé materiály drátu?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Hodnoty odporu se liší podle materiálu:
                    <p>
                      <b>Kanthal A1:</b> 2.64 Ω/m
                    </p>
                    <p>
                      <b>Nichrome Ni80:</b> 1.08 Ω/m
                    </p>
                    <p>
                      <b>Nickel Ni200:</b> 0.06 Ω/m
                    </p>
                    <p>
                      <b>Titanium Ti1:</b> 0.35 Ω/m
                    </p>
                    <p>
                      <b>Stainless Steel SS316:</b> 0.73 Ω/m
                    </p>
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Proč je důležité správně vypočítat odpor cívky?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Správný výpočet odporu cívky je klíčový pro bezpečnost a
                    výkon vaší elektronické cigarety. Nesprávný odpor může vést
                    k přehřátí cívky, špatné chuti, nebo dokonce k poškození
                    zařízení.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jaké faktory ovlivňují odpor cívky?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Odpor cívky je ovlivněn několika faktory:
                    <p>
                      <b>Materiál drátu:</b> Různé materiály mají různé hodnoty
                      odporu.
                    </p>
                    <p>
                      <b>Průměr drátu (AWG):</b> Silnější drát má nižší odpor.
                    </p>
                    <p>
                      <b>Počet otáček:</b> Více otáček zvyšuje délku drátu a tím
                      i odpor.
                    </p>
                    <p>
                      <b>Průměr trnu:</b> Větší průměr trnu znamená delší drát
                      na jednu otáčku.
                    </p>
                  </p>
                </dd>
              </dl>
            </div>
          )}
          {activeTab === "Liquid" && (
            <div className="flex flex-col md:flex-row">
              <dl className="w-full">
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jaké jsou základní složky potřebné pro míchání vlastního
                    e-liquidu?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    <b>Báze: </b>Směs propylenglykolu (PG) a rostlinného
                    glycerinu (VG). Poměr PG/VG může ovlivnit hustotu páry a
                    intenzitu chuti.
                  </p>
                  <p>
                    <b>Nikotin: </b>Pokud chcete e-liquid s nikotinem, můžete
                    přidat nikotinový roztok. Při manipulaci s nikotinem buďte
                    opatrní, protože je toxický.
                  </p>
                  <p>
                    <b>Příchuťě: </b>Koncentrované příchutě, které dodávají
                    e-liquidu chuť. Používejte příchutě určené speciálně pro
                    e-liquidy.
                  </p>
                  <p>
                    <b>Aditiva (volitelné): </b>Mohou zlepšit chuť nebo kvalitu
                    páry, například sladidla nebo mentol.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jak vypočítám správné množství jednotlivých složek pro
                    míchání e-liquidu?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    K výpočtu správného množství jednotlivých složek použijte{" "}
                    <Link to="/liquid">kalkulačku</Link>, která vám pomůže určit
                    přesné množství báze, nikotinu a příchutí na základě
                    požadovaného objemu a síly e-liquidu.
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-xl font-semibold">
                    Jak dlouho bych měl nechat svůj e-liquid zrát a proč je to
                    důležité?
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Zrání e-liquidu je proces, kdy se složky míchají a vyvíjejí
                    svoji chuť. Doba zrání se liší podle typu příchutí:
                    <p>
                      <b>Ovocné příchutě:</b> Obvykle 1-3 dny.
                    </p>
                    <p>
                      <b>Krémové, dezertní a tabákové příchutě:</b> Obvykle 1-2
                      týdny.
                    </p>
                  </p>
                  <hr />
                  <i className="text-purple-500">
                    Zrání je důležité, protože umožňuje příchutím plně se
                    rozvinout a smísit se s bázi a nikotinem, což zlepšuje
                    celkovou chuť e-liquidu. Během zrání e-liquid skladujte na
                    tmavém a chladném místě, občas ho protřepejte, aby se složky
                    dobře promísily.
                  </i>
                </dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
