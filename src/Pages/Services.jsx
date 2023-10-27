import React from 'react';
import './Services.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PageHeading from '../Components/PageHeading';


function Services(props) {
    var settings = {
        dots: true,
        infinite: true,
        
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              infinite: true,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (
        <div className='Service_main'>
             <PageHeading heading={"Our Services"}/>
            <div className='service_headline_main'>
                <p><span className='service_world_style'>At</span> Womens Paradise, we offer a complete range of beauty services to fit your needs. From hair styling, to facial skin care, to body massage, manicures, pedicures and more, we are your all-in-one resource for a beautiful new you come and experience it today!</p>
            </div>
            {/* <div className='services_main_all'> */}
                <Slider {...settings} className='slider_comp'>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.webp?b=1&s=170667a&w=0&k=20&c=D7Rf4ht7nChyjvL3AUlZQcfHQOH67MCTIFFQY_x-6WU=)",backgroundSize:'140%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Hair Care</h2>
                    <h4 className='services_card_description'>Starting from £30</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://aruspa.com/wp-content/uploads/2020/01/facial-1.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Facial Treatment</h2>
                    <h4 className='services_card_description'>Starting from £60</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/waxing-leg-1296x728-header.jpg?w=1155&h=1680)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Waxing</h2>
                    <h4 className='services_card_description'>Starting from £25</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://www.hotstone-spa.com/wp-content/uploads/2018/06/MASAGE.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Body Massage</h2>
                    <h4 className='services_card_description'>Starting from £70</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://t4.ftcdn.net/jpg/03/21/68/65/360_F_321686568_cSXVysoKOFTLljosiZkFbjhR2qb4uLFM.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Makeup</h2>
                    <h4 className='services_card_description'>Starting from £100</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://static.punjabkesari.in/multimedia/2023_5image_11_01_381865397rty.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Bridal Grooming</h2>
                    <h4 className='services_card_description'>Starting from £200</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://img.freepik.com/free-photo/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept_186202-7769.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Manicure</h2>
                    <h4 className='services_card_description'>Starting from £30</h4>
                    </div>
                </div>
                <div className='services_card_main'>
                    <div style={{backgroundImage:"url(https://wallpapers.com/images/hd/pedicure-pictures-2qukz2q6yiw1nc82.jpg)",backgroundSize:'160%',backgroundRepeat:"no-repeat"}}>
                    <h2 className='services_card_heading'>Pedicure</h2>
                    <h4 className='services_card_description'>Starting from £30</h4>
                    </div>
                </div>
                </Slider>
            {/* </div> */}
        </div>
    );
}

export default Services;