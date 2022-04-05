import React from "react";
import Image from "next/image";

interface P {
  name: string;
  desc: string;
  images: string[];
}

export default function Gallery(props: P) {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
        </div>

        <div
          className="row portfolio-container"
          style={{
            position: "relative",
            height: "1080px",
          }}
        >
          <div className="row justify-content-center">
            {props.images.map((image: string, index: number) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
                  data-wow-delay="0s"
                  style={{
                    position: "absolute",
                  }}
                >
                  <div className="portfolio-wrap">
                    <a
                      href={image}
                      className="link-preview portfolio-lightbox col-sm-4"
                      data-toggle="lightbox"
                      data-gallery={props.name}
                      title=""
                    >
                      <figure
                        style={{
                          background: "transparent",
                        }}
                      >
                        <Image
                          src={`/${image}`}
                          className="img-fluid"
                          alt=""
                          width={800}
                          height={600}
                          layout="intrinsic"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
