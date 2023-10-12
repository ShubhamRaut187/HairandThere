import React from 'react';
import './Stores.css'
import StoreCard from '../Components/StoreCard';
function Stores(props) {
    let stores=[
        {
            Name:"Womens Paradise, Oxford Street",
            location:"Oxford Street, London",
            Store_Image:"https://queenb.london/wp-content/uploads/queen-b-luxury-nail-and-beauty-lounge-exterior-december-2022.jpg",
            Description:"Experience beauty at its finest with Women's Paradise Salon, conveniently located on Oxford Street in the heart of London. Our expert team of professionals is committed to enhancing your natural radiance, offering a wide range of services from rejuvenating facials to precision hair styling, flawless nail care, and blissful massages. Set in the bustling heart of the capital, our salon provides a tranquil haven where you can unwind and relish in a world of pampering and self-care. Discover the pinnacle of beauty and well-being at Women's Paradise Salon on London's iconic Oxford Street, where every visit is a rejuvenating escape."
        },
        {
            Name:"Womens Paradise, Carnaby Street",
            location:"Carnaby Street, London",
            Store_Image:"https://4.bp.blogspot.com/-qUDT_UeahaI/Uh9NzWhOi8I/AAAAAAAAAR4/JqmzoArMWKY/s1600/Headquarters-Hair-salon-exterior-2.jpg",
            Description:"Welcome to Women's Paradise Salon, your haven of beauty and relaxation nestled in the trendy heart of London's Carnaby Street. Our skilled team of professionals is dedicated to enhancing your natural beauty, offering a wide range of services from rejuvenating facials to expert hair styling, precise nail care, and indulgent massages. Located in one of London's most fashionable districts, our salon exudes a stylish and vibrant atmosphere, ensuring a rejuvenating experience with every visit. Discover the epitome of beauty and well-being at Women's Paradise Salon on Carnaby Street, where every appointment is a journey to personal pampering and style."
        },
        {
            Name:"Womens Paradise, Shambles Square",
            location:"Shambles Square, Manchester",
            Store_Image:"https://sen-interiors.co.uk/wp-content/uploads/2021/09/DSCF0438.jpg",
            Description:"Welcome to Women's Paradise Salon, nestled in the heart of Manchester's Shambles Square. Step into our elegant sanctuary where we're dedicated to enhancing your beauty and well-being. Our skilled team of professionals offers a wide range of services, from rejuvenating facials to expert hair styling, precise nail care, and soothing massages. Discover the perfect balance of luxury and relaxation in our stylish salon, conveniently located in the vibrant Shambles Square. Treat yourself to a moment of bliss and let us pamper you to perfection at Women's Paradise Salon."
        },
        {
            Name:"Womens Paradise, St Peter's Square",
            location:"St Peter's Square, Manchester",
            Store_Image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/neville-salon-1543940059.jpg?crop=1xw:1xh;center,top&resize=480:*",
            Description:"Welcome to Women's Paradise Salon at St. Peter's Square, Manchester – your ultimate destination for beauty and self-care. Step into a world of indulgence and relaxation, where our skilled team of professionals pampers you with a wide range of beauty and wellness services. From luxurious facials and rejuvenating massages to expert hair styling and precise nail care, we're dedicated to enhancing your natural beauty and leaving you feeling like a queen. Our chic and modern salon provides a serene escape from the hustle and bustle of the city, ensuring a tranquil experience for every visit. Discover your personal paradise at Womens Paradise Salon in the heart of Manchester."
        },
        {
            Name:"Womens Paradise, Deansgate",
            location:"Deansgate, Manchester",
            Store_Image:"https://media.istockphoto.com/id/1158468207/photo/exterior-of-hairclubbing-a-trendy-hair-salon-in-soho-london.jpg?s=612x612&w=0&k=20&c=WWiP9y6NuhGqfS8rxUsoX_54r5sRpvMCC2ZfEfZ8qxQ=",
            Description:"Welcome to Women's Paradise Salon, your oasis of beauty and relaxation on Deansgate in Manchester. Our skilled team of professionals is dedicated to enhancing your natural beauty, offering a wide range of services from rejuvenating facials and expert hair styling to precise nail care and soothing massages. Nestled in the heart of the city, our salon provides a serene escape where you can unwind and indulge in the luxurious pampering you deserve. Discover the epitome of beauty and well-being at Women's Paradise Salon on Deansgate, where every visit is a journey to personal rejuvenation."
        }
       
    ]
    return (
        <div>
            <div className='stores_heading'>
                <h1>Our Stores</h1>
            </div>
            <div className='stores_parent'>
                {
                    stores.map((elem,index)=>{
                       return <StoreCard key={index} Name={elem.Name} Image={elem.Store_Image} Location={elem.location} Description={elem.Description}/>
                    })
                }
            </div>
        </div>
    );
}

export default Stores;