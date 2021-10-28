import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./proId.module.scss";
import Head from "next/head";
import { getData } from "../../utils/fetchData";

export default function ProductId(props) {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {}, []);

  //useEffect weil rerender bei jedem value und data erwünscht
  useEffect(() => {
    if (value < 0) {
      setValue(product.images.length - 1);
    }
    if (value > product.images.length - 1) {
      setValue(0);
    }
  }, [value, product.images]);

  //useEffect para hacer autoplay autoplay und clean für reseten des timers
  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [value]);

  return (
    <div>
      <Head>
        <title>Detalles de id</title>
      </Head>

      <section className={styles.card_id}>
        <img
          src={product.images[tab].url}
          alt="red"
          className={styles.img_central}
        />
        <h4 className={styles.title}>{product.title} </h4>

        <div className={styles.content_img_all}>
          {product.images.map((img, index) => (
            <div
              key={index}
              className={styles.img_all}
              onClick={() => setTab(index)}
            >
              <img src={img.url} alt="all_images" />
            </div>
          ))}
        </div>

        <div className={styles.carousell} style={{ minHeight: "40vh" }}>
          {product.images.map((item, index) => {
            const { url } = item;

            let position = styles.item_position_full;
            // let position = "translate-x-full opacity-0";

            if (index === value) {
              // position = "translate-x-0";
              position = styles.item_position_cero;
            }

            if (
              index === value - 1 ||
              (value === 0 && index === product.images.length - 1)
            ) {
              // position = "-translate-x-full opacity-0";
              position = styles.item_position_nofull;
            }

            return (
              <article
                key={index}
                className={`${position}  ${styles.item_carousell} `}
                style={{ backgroundImage: `url(${url})` }}
              >
                <div className="">
                  <h3>red</h3>
                  <h3>red</h3>
                </div>
              </article>
            );
          })}

          <button
            className={styles.btn_derecho}
            style={{ top: "50%" }}
            onClick={() => {
              setValue(value + 1);
            }}
          >
            <FiChevronRight />
          </button>
          <button
            className={styles.btn_izquierdo}
            style={{ top: "50%" }}
            onClick={() => {
              setValue(value - 1);
            }}
          >
            <FiChevronLeft />
          </button>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  return {
    props: {
      product: res.product,
    },
  };
}