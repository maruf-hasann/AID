import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Product = () => {
  const [show,setShow] = useState(false)
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(show);
  return (
    <div className="my_container my-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-9">TRENDING NOW</h2>
        {show ? (
          <button
            onClick={() => setShow(!show)}
            className="me-4 text-[#0F5684] font-semibold text-[14px]"
          >
            See Less
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="me-4 text-[#0F5684] font-semibold text-[14px]"
          >
            Show All
          </button>
        )}
      </div>
      <div>
        {show ? (
          <div>
            <div className="grid grid-cols-6 gap-2 gap-y-3">
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>{" "}
              <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                <img
                  src="https://i.ibb.co/N9X57xx/Image.png"
                  alt="Image"
                  border="0"
                  className="text-center "
                ></img>
                <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Swiper
              slidesPerView={6}
              centeredSlides={false}
              spaceBetween={10}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 space-y-2">
                  <img
                    src="https://i.ibb.co/N9X57xx/Image.png"
                    alt="Image"
                    border="0"
                    className="text-center "
                  ></img>
                  <h3>Rupchanda Fortified Pure Soybean Oil for Cooking</h3>
                  <h4 className="text-[12px] text-[#828282]">5 Liter</h4>
                  <h4 className="text-[16px] text-[#099] font-bold">$422.75</h4>
                  <button className=" py-1 rounded-sm w-full border-2 font-semibold text-[#099] border-[#099] mx-auto block text-center">
                    Add To Cart
                  </button>
                </div>
              </SwiperSlide>{" "}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
