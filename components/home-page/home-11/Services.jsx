import Link from "next/link";

const Services = () => {
  const servicesData = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "CODEGENIUS",
      description: "Menggali Bakat Coding Anak-anak melalui Program Interaktif",
      delay: 0,
    },
    {
      icon: "/images/icon/icon_51.svg",
      title: "CARE+",
      description: "Merawat Potensi Anak Slow Learning dengan Pendekatan Personalisasi",
      delay: 200,
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "TECHFORGE",
      description: "Solusi Software Kustom untuk Memajukan Pendidikan yang Inklusif",
      delay: 300,
    },
  ];

  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 d-flex mt-40`}
          data-aos-delay={service.delay}
          data-aos="fade-up"
        >
          <div className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30">
            <div className="icon d-flex align-items-end">
              <img src={service.icon} alt="" className="lazy-img" />
            </div>
            <span className="d-block fs-18 opacity-75 mt-35 mb-10">
              {service.title}
            </span>
            <h4 className="fw-500 mb-35">{service.description}</h4>
            {/* href="/pages-menu/service-details" */}
            <Link
              href=""
              className="read-btn mt-auto tran3s"
            >
              <img src="/images/icon/icon_12.svg" alt="" className="lazy-img" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;
