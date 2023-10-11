import React from 'react';
import './About.css'
import Founders from '../Components/Founders'
function About(props) {
    return (
        <div>
            <div className='ab_heading_div'>
                <h1 className='ab_headings'>About Us</h1>
            </div>
            <div className='ab_main'>
                <div className='ab_main_img'>
                    <img src="https://4.bp.blogspot.com/-qUDT_UeahaI/Uh9NzWhOi8I/AAAAAAAAAR4/JqmzoArMWKY/s1600/Headquarters-Hair-salon-exterior-2.jpg" alt="salon" />
                </div>
                <div className='ab_main_para'>
                    <p><span className='word_style'>Welcome</span> to Women's Paradise, where beauty meets excellence! Established in the vibrant city of Manchester in the year 2001, we have been setting the standard for exceptional salon experiences for over two decades. Our commitment to delivering top-notch services, unmatched hospitality, and irresistible offers has made us a beloved destination for women seeking to enhance their beauty and boost their confidence. 
                    At Women's Paradise, we understand that your hair and appearance are an integral part of your identity. That's why our team of skilled stylists, with their years of expertise and passion for beauty, work tirelessly to bring out the best in you. Whether you're looking for a stylish haircut, a vibrant hair color transformation, or a relaxing spa treatment, we've got you covered.
                    What sets us apart is not just our exceptional services but also our dedication to making every client feel valued and cherished. Our salon is designed to be a sanctuary where you can unwind, rejuvenate, and indulge in self-care. From the moment you step through our doors, you'll be greeted with warmth and professionalism, ensuring that your experience at Women's Paradise is nothing short of extraordinary.
                    As a token of our appreciation for your loyalty, we regularly offer exclusive promotions and discounts, allowing you to enjoy our premium services at affordable prices. We believe that looking and feeling your best should be accessible to all, and we make it our mission to fulfill that belief.
                    Thank you for choosing Women's Paradise as your go-to salon destination. We are honored to be a part of your beauty journey and look forward to serving you with excellence for many more years to come. Experience the magic of Women's Paradise, where beauty, style, and hospitality converge to create an unforgettable salon experience.</p>
                </div>
            </div>
            <div className='ab_fsalon_main'>
               <h1 className='story_head'>Story of Our First Salon</h1>
               <div className='ab_fsalon_main_2'>
                    <div className='ab_fsalon_para_div'>
                        <p><span className='word_style'>Once</span> upon a time, in the bustling heart of Manchester, there was a small, nondescript salon. The salon was like any other, offering haircuts and styling to the city's residents. However, its story began long before its doors first opened, in a faraway land.
                            Four young women, each hailing from different regions of India, embarked on a journey that would lead them to a place none of them had ever imagined: Manchester. Meera, Priya, Aisha, and Neha were friends who shared a passion for hairstyling and beauty. In their hometown in India, they had often spent hours experimenting with hair and makeup, transforming friends and family into visions of beauty and style.
                            As they grew older, their talents flourished, and their dreams expanded. They longed to take their skills to a place where they could make a mark in the beauty industry. After countless conversations, laughter, and a few tears, they decided to set their sights on Manchester, a city known for its diverse culture and vibrant spirit.
                            Each of them brought a unique talent to the table. Meera had a knack for crafting artistic and edgy hairstyles that pushed boundaries. Priya was a wizard with hair color, able to create a stunning array of shades and transformations. Aisha was a firm believer in the importance of relaxation and rejuvenation, and she had mastered the art of spa treatments. Neha, on the other hand, was a perfectionist when it came to haircuts and styling, ensuring that every client walked out with hair that looked like it was tailored just for them.
                            With dreams in their hearts and hope in their eyes, the four friends made their way to Manchester. They had little more than their talents, a shared dream, and a burning desire to succeed. It was a journey of ups and downs, late nights, and early mornings, but they persevered.
                            Finally, in the year 2001, their small salon, named "ChicLocks," opened its doors for the first time. The friends worked tirelessly, pouring their heart and soul into every haircut, every color transformation, and every spa treatment. The warmth of their personalities and their dedication to their craft quickly turned ChicLocks into a welcoming haven for the people of Manchester.
                            Word of mouth spread, and ChicLocks' reputation for excellence grew. The salon became a place where clients not only received exceptional beauty services but also felt like cherished guests welcomed into the circle of friendship that Meera, Priya, Aisha, and Neha shared.
                            Over two decades, ChicLocks became more than just a salon. It became a symbol of friendship, of dreams realized, and of beauty celebrated. Meera, Priya, Aisha, and Neha's journey had come full circle, and their little salon in Manchester had become a testament to their enduring bond and unwavering commitment to making people look and feel their absolute best.
                            And so, the small, nondescript salon in Manchester became a cherished part of the city's vibrant tapestry, a place where beauty, style, and friendship intertwined to create a truly remarkable story.</p>
                    </div>
                    <div className='ab_fsalon_img_div'>
                        <img src="https://media.istockphoto.com/id/1158468207/photo/exterior-of-hairclubbing-a-trendy-hair-salon-in-soho-london.jpg?s=612x612&w=0&k=20&c=WWiP9y6NuhGqfS8rxUsoX_54r5sRpvMCC2ZfEfZ8qxQ=" alt="fsalon" />
                    </div>
               </div>
            </div>
            <Founders/>
        </div>
    );
}

export default About;