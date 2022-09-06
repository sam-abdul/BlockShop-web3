import NextLink from 'next/link'

export default function New() {
  return (
    <div>
      <div className='fifty-title'>New Stocks</div>
    <div className="Card">
      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://secure.img1-fg.wfcdn.com/im/52824346/resize-h755-w755%5Ecompr-r85/1435/143581391/Adrie+3+Piece+Living+Room+Set.jpg"
            />
            <p>W-S LIVING ROON SET</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.23</p>
            </div>
          </div>
          <NextLink href='/furniture/5'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/351719/1.jpg?1666"
            />
            <p>KELLOGYS CORNFLAKES</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.12</p>
            </div>
          </div>
          <NextLink href='/grocery/2'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="http://cdn.shopify.com/s/files/1/0736/2331/products/pepsi-light-320ml-aerated-beverage-pepsi-169854_600x.jpg?v=1633538633"
            />
            <p>PEPSI LIGHT</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.03</p>
            </div>
          </div>
          <NextLink href='/grocery/1'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/HK080120/943_001.jpg"
            />
            <p>PRESIDENTIAL</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.33</p>
            </div>
          </div>
          <NextLink href='/fashion/4'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_MO.jpg"
            />
            <p>SAMSUNG S22 ULTRA</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>1.5</p>
            </div>
          </div>
          <NextLink href='/fashion/7'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://digitalcontent.api.tesco.com/v2/media/ghs/75582bf5-f792-46b0-8ff4-3c852a5e466d/b011e247-3b83-4d69-b026-3db52e977583_1840847596.jpeg?h=540&w=540"
            />
            <p>PAWN CRACKER</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.12</p>
            </div>
          </div>
          <NextLink href='/grocery/4'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2019/01/11498035903685-THE-BODY-SHOP-Aloe-Soothing-Day-Cream-50-ml-2061498035903655-1-e1548451468402.jpg"
            />
            <p>ALOE SOOTHING CREAM</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.025</p>
            </div>
          </div>
          <NextLink href='/fashion/7'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>

      <div>
        <div className="frontCard">
          <div>
            <img
              className="frontImg"
              src="https://invaberstorage.blob.core.windows.net/invaber-media/8232016113500AM_panasonic-3d-blu-ray-home-theatre-system-psn-scbtt433.jpg"
            />
            <p>3D BLU_RAY</p>
            <div className="frontPrice">
              <img
                className="price_img"
                src="https://www.directorstalkinterviews.com/wp-content/uploads/2018/01/ethereum.png"
              />
              <p>0.7</p>
            </div>
          </div>
          <NextLink href='/fashion/1'>
            <button className="modal-more"> more </button>
          </NextLink>
        </div>
      </div>
    </div>
    </div>
  )
}
