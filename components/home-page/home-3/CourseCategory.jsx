import Image from "next/image";
import React from "react";

const CourseCategory = () => {
  const categories = [
    {
      icon: "/images/icon/icon_128.svg",
      title: "CODEGENIUS",
      courses: "Menggali Bakat Coding Anak-anak melalui Program Interaktif",
    },
    {
      icon: "/images/icon/icon_129.svg",
      title: "CARE+",
      courses: "Merawat Potensi Anak Slow Learning dengan Pendekatan Personalisasi",
    },
    {
      icon: "/images/icon/icon_133.svg",
      title: "TECHFORGE",
      courses: "Solusi Software Kustom untuk Memajukan Pendidikan yang Inklusif",
    },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <a
            href="#"
            className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={42}
                height={42}
                src={category.icon}
                alt=""
                className="lazy-img"
              />
            </div>
            <h4 className="tx-dark mt-45 lg-mt-30">{category.title}</h4>
            <p>{category.courses}</p>
          </a>
          {/* /.card-style-eighteen */}
        </div>
      ))}
      {/* <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
        <a
          href="#"
          className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
        >
          <h3>20</h3>
          <p className="pb-20">More Category</p>
          <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />
        </a>

      </div> */}
    </>
  );
};

export default CourseCategory;
