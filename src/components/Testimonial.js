import React from "react";

const Testimonial = () => {
  return (
    <figure className="max-w-screen-md mx-auto text-center">
      
      <blockquote>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
          Platí tak pravidlo, že pokud si dokážete připravit vodu se sirupem, dokážete si na stejném principu umíchat i svůj vlastní e-liquid.
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img
          className="w-6 h-6 rounded-full"
          src="images/testimonial.jpg"
          alt="Dimitrij Fedoryno"
        />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
          <cite className="pe-3 font-medium text-gray-900 dark:text-red-500">
            Dimitrij Fedoryno
          </cite>
          <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
            Frontend Developer
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
