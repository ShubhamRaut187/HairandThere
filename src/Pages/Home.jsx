import React from 'react';
import {useNavigate} from 'react-router-dom'
import "./Home.css"
function Home(props) {
    let Navigate = useNavigate();
    let BookAppointment = () => {
        Navigate('/appointment');
    }
    return (
        <div>
            <div className='hm_main'>
               <h1 className='hm_quote'>"A WOMEN WHO CUTS HER HAIR IS ABOUT TO CHANGE HER LIFE"<br/><button onClick={BookAppointment}>MAKE A CHANGE!!</button></h1>
            </div>
            <h1 className='hm_headings'>Why Are We Best ?</h1>
            <div className='hm_specialities'>
                <div className='speciality_one'>
                    <h2>Skilled Stylists</h2>
                </div>
                <div className='speciality_two'>
                    <h2>Exciting Offers %</h2>
                </div>
                <div className='speciality_three'>
                    <h2>Free Hair Wash on Saturday</h2>
                </div>
            </div>
            <h1 className='hm_headings'>Our Products</h1>
            <div className='hm_products_main'>
                <div className='hm_products_img_div'>
                    <img src="https://img.freepik.com/premium-photo/cosmetic-bottles-flat-layed-blank-label-branding-mock-up-natural-beauty-product-concept-ai-generated_914391-3553.jpg" alt="products" />
                </div>
                <div className='hm_products_info_div'>
                    <p><span className='hm_words_style'>At</span> Women's Paradise, we understand that true beauty radiates from within. We believe that each person is uniquely beautiful, and our mission is to enhance and celebrate that beauty with our exquisite range of customized organic beauty products. Crafted with care and love, our products are designed to not only nourish and rejuvenate your skin but also to uplift your spirit.
                        Organic Ingredients for Natural Beauty: Our commitment to your beauty and well-being begins with selecting the finest organic ingredients from nature's bounty. We believe that the purest, most natural elements are the key to unlocking your skin's potential. With a focus on sustainability and environmental responsibility, we ensure that every product you choose is free from harmful chemicals, parabens, and artificial fragrances.
                        Tailored Beauty Solutions: We recognize that every person has unique skincare needs. This is why we offer a range of products that can be tailored to your specific skin type, complexion, and concerns. Whether you have dry, sensitive, oily, or combination skin, our products can be customized to address your individual beauty goals.
                        Handcrafted with Expertise: At Women's Paradise Salon, we take pride in our artisanal approach to beauty. Our products are lovingly handcrafted in small batches, ensuring the highest quality and attention to detail. This personal touch means that your skincare regimen is not just a routine; it's a luxurious experience you'll look forward to every day.
                        Transformative Beauty Rituals: Our beauty products are more than just cosmetics – they're an invitation to indulge in a daily beauty ritual that pampers your skin and soul. Experience the transformative power of our natural serums, creams, masks, and cleansers. Each product is designed to not only enhance your physical beauty but also to boost your self-confidence and inner radiance.
                        Cruelty-Free and Sustainable: We are proud to be a cruelty-free brand. We never test our products on animals, and we are committed to sustainability. Our packaging is eco-friendly, and we strive to reduce our carbon footprint while promoting a more environmentally conscious beauty industry.
                        Join the Beauty Revolution: Women's Paradise Salon is more than a salon; it's a sanctuary of beauty and self-care. Our customized organic beauty products are a testament to our dedication to enhancing your natural beauty. Join us on this journey to rediscover your inner glow and experience the magic of customized, organic beauty products that nourish your skin and nurture your soul. Elevate your beauty and wellness with Women's Paradise Salon.
                        Welcome to the world of beauty, customized just for you!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;