import Image from "next/image";
import styles from "../styles/com.module.css";
import NextLink from "next/link";
const Fifty = () => {
  return (
    <>
          <div className={styles.fifty_title}>Get with 50% off</div>
      <div class="container px-5 py-1 mx-auto">

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 w-1/2 p-4">
            <a href="#">
              <div class="flex relative">
                <div>
                  <div className={styles.front_card}>
                    <div>
                      <img
                        className={styles.front_img}
                        src="https://marketsng.fra1.digitaloceanspaces.com/images/E8K8sZSMMQs9fA2mYIS16bxlNyfGCEkhL03jkyxj.jpg"
                      />
                      <p>SFWMTLZK</p>
                      <div className={styles.front_price}>
                        <img
                          className={styles.price_img}
                          src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
                        />
                        <p>0.23</p>
                      </div>
                    </div>
                    <NextLink href="/electronic/11">
                      <button className={styles.modal_more}> more </button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="lg:w-1/3 w-1/2 p-4">
            <a href="#">
              <div class="flex relative">
                <div>
                  <div className={styles.front_card}>
                    <div>
                      <img
                        className={styles.front_img}
                        src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/R/161753_1590136237.jpg"
                      />
                      <p>2 SEATS DINING TABLE SET</p>
                      <div className={styles.front_price}>
                        <img
                          className={styles.price_img}
                          src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
                        />
                        <p>0.12</p>
                      </div>
                    </div>
                    <NextLink href="/furniture/2">
                      <button className={styles.modal_more}> more </button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="lg:w-1/3 w-1/2 p-4">
            <a href="#">
              <div class="flex relative">
                <div>
                  <div className={styles.front_card}>
                    <div>
                      <img
                        className={styles.front_img}
                        src="https://www.luluhypermarket.com/medias/1415966-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzA5OTl8aW1hZ2UvanBlZ3xoZDMvaDZmLzEwNzA3NDM4OTI3OTAyLzE0MTU5NjYtMDEuanBnXzEyMDBXeDEyMDBIfGM0NmUyYWRjNTk0ZDQzM2YzMzdkN2JlOGM0NTUyYzk4NGVmZGQ4ZTI3YTg1ZDEwMzU2YWNkZDZlNzhiYTUzMDg"
                      />
                      <p>ORAL B TOOTHPASTE</p>
                      <div className={styles.front_price}>
                        <img
                          className={styles.price_img}
                          src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
                        />
                        <p>0.12</p>
                      </div>
                    </div>
                    <NextLink href="/body/4">
                      <button className={styles.modal_more}> more </button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="lg:w-1/3 w-1/2 p-4">
            <a href="#">
              <div class="flex relative">
              <div>
        <div className={styles.front_card}>
          <div>
            <img
             className={styles.front_img}
              src="https://image.made-in-china.com/2f0j00aphflgWdhicA/Z4006-Custom-Paper-Egg-Box-Cardboard-Paper-Egg-Packaging-Carton-Box-with-Handle.jpg"
            />
            <p>'FRESCO EGG</p>
            <div className={styles.front_price}>
              <img
               className={styles.price_img}
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.12</p>
            </div>
          </div>
          <NextLink href='/grocery/6'>
            <button className={styles.modal_more}> more </button>
          </NextLink>
        </div>
      </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifty;
