import Link from "next/link";
import Seo from "../../components/common/Seo";
import Contact from "../../components/home-page/home-11/Contact";
import Counter from "../../components/home-page/home-11/Counter";
import FancyFeatures from "../../components/home-page/home-11/FancyFeatures";
import Header from "../../components/home-page/home-11/Header";
import Hero from "../../components/home-page/home-11/Hero";
import Services from "../../components/home-page/home-11/Services";
import Services2 from "../../components/home-page/home-11/Services2";
import Testimonial from "../../components/home-page/home-11/Testimonial";
import Pricing from "../../components/pricing/Pricing";
import Blog from "../../components/home-page/home-11/Blog";
import CallToActions from "../../components/home-page/home-11/CallToActions";
import Social from "../../components/home-page/home-11/Social";
import Footer from "../../components/home-page/home-11/Footer";

const SeoAgency = () => {
  return (
    <>
      <Seo pageTitle="Seo Agency" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Hero />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}

      {/* 
			=============================================
				Feature Section Nineteen
			============================================== 
			*/}
      <div className="fancy-feature-nineteen position-relative pt-170 pb-160 lg-pt-100 lg-pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-normal tx-dark m0">
                  Provide <span>Quality</span> Services.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            {/* End .col-lg-6 */}

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0 ps-xxl-4">
              Merawat Potensi Anak, Membangun Masa Depan Berkilau dengan Pendekatan Komprehensif dalam Pendidikan, Koding Kreatif, dan Solusi Software Inovatif
              </p>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5 pt-60 lg-pt-20">
            <Services />
          </div>
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-nineteen */}

      {/* 
			=============================================
				Feature Section Twenty
			============================================== 
			*/}
      {/* /.fancy-feature-twenty */}

      {/* 
			=============================================
				Feature Section Twenty One
			============================================== 
			*/}
      {/* /.fancy-feature-twentyOne */}

      {/*
			=====================================================
			Pricing Section Three
			=====================================================
			*/}
      {/* /.pricing-section-three */}

      {/* 
			=============================================
				Feature Section Twenty Two
			============================================== 
			*/}
      {/* /.fancy-feature-twentyTwo */}

      {/*
			=====================================================
				Blog Section Three
			=====================================================
			*/}
      {/* /.blog-section-three */}

      {/*
			=====================================================
				Fancy Short Banner Three
			=====================================================
			*/}

      {/* /.fancy-short-banner-three */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_01.png" alt=""  />
                  </Link>
                </div>
              </div>
              {/* End .col-lg-2 */}

              {/* <Footer /> */}

              <div className="col-md-3 col-sm-6 mb-30">
                <h5 className="footer-title tx-dark fw-500">Our Address</h5>
                <p className="fs-17">
                Jl. Malik Ibrahim, Kwangsan Lor, Kwangsan, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61253
                </p>
                <a
                  href="mailto:herlambangbp123@gmail.com"
                  className="email tran3s fs-17"
                >
                  herlambangbp123@gmail.com
                </a>
                <br />
                <a
                  href="tel:+7576994478"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  +62 85155439221
                </a>
                <Social />
              </div>
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}

            <div className="bottom-footer">
              <p className="copyright text-center m0">
                Copyright © {new Date().getFullYear()} {"  "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  zen-edutech
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-six */}
    </>
  );
};

export default SeoAgency;
