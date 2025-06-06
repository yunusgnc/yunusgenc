import React from "react";

export default function AboutTop() {
  return (
    <div>
      <div className="section wf-section">
        <div className="container-large w-container">
          <div className="w-layout-grid about-grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="content-wrapper sticky flex justify-center md:justify-start">
              <img
                src="/images/hero-image1.jpg"
                loading="lazy"
                srcSet="/images/hero-image1.jpg 500w, /images/hero-image1.jpg 800w, /images/hero-image1.jpg 1080w, /images/hero-image1.jpg 1600w"
                sizes="100vw"
                alt="Yunus Genç - Senior Frontend & API Developer"
                className="image max-w-[250px] w-full rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="content-wrapper">
              <h1 className="heading-medium text-2xl md:text-3xl">Yunus Genç</h1>
              <div className="paragraph-large text-base md:text-lg">
                <p>
                  Senior Frontend & API Developer experienced in React.js, Next.js, Vue.js, and React Native. Skilled in building scalable, user-friendly web and mobile apps with Redux, Redux Toolkit, and Tailwind CSS. Proven track record in e-commerce, CMS, and mobile projects. Passionate about clean code, innovation, and delivering great user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="w-layout-grid about-grid second grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="content-wrapper sticky">
              <h2 className="heading-small text-xl md:text-2xl">
                Professional Experience
                <br />
              </h2>
            </div>
            <div className="content-wrapper space-y-6">
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">Dubertas and NSC</h3>
                <h4 className="title-small">Senior Frontend Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  December 2023 - Devam
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developing dynamic web applications with React.js and Next.js, implementing Redux Toolkit for state management, and building mobile apps with React Native.
                </p>
              </div>
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">Goost Software</h3>
                <h4 className="title-small">Senior Frontend Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  September 2023 - December 2023
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developed modern web applications using Next.js and React.js, implemented Redux for state management, and integrated Web Services APIs.
                </p>
              </div>
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">MODALOG</h3>
                <h4 className="title-small">Frontend Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  September 2022 - September 2023
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developed e-commerce website using Vanilla JS and jQuery, implemented responsive designs with Tailwind CSS, and integrated .NET Core features.
                </p>
              </div>
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">JARVİS Yazılım A.Ş</h3>
                <h4 className="title-small">Senior Frontend Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  December 2024 - Devam
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developing modern web applications with React.js, building comprehensive CMS, and implementing e-commerce features with React, Redux, and Formik.
                </p>
              </div>
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">The Food Runners</h3>
                <h4 className="title-small">Frontend and API Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  July 2022 - April 2024
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developed courier application using Vue.js and Nuxt.js, integrated Web Services APIs, and managed state with Vuex.
                </p>
              </div>
              <div className="experience-content-wrapper">
                <h3 className="title font-semibold">Codonex</h3>
                <h4 className="title-small">Frontend Developer</h4>
                <h5 className="title-year text-sm text-gray-500">
                  December 2020 - June 2022
                  <br />
                </h5>
                <p className="text-gray-600 mt-2">
                  Developed e-commerce dashboard with React.js and Next.js, implemented SSR, and managed state with Redux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
