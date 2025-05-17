"use client";
import { useRouter } from 'next/navigation';
import EventCard from '@/ui/FullSizedEventCard/FullSizedEventCard';
import style from '@/app/sales_page/sales-page.module.css'
import Header from '@/ui/HeaderComponent/Header';
import Slideshow from '@/ui/FeaturedEventSlider/EventSlider';
import NavBar from '@/ui/NavBar/NavBar';

export default function EventPage() {
  return (
    <div className={style.bodyContainer}>
      <Header sectionTitle="Discounts & Sales" /> 
      <Slideshow slides={slides} /> 
      <FoodCarousel />
      <ClothingCarousel />
      <MoreWithEvents />
      <NavBar />
    </div>
  );
}

const slides = [
  {
    image: '/images/plenty.png',
    title: 'Outlet – Plenty Offers',
    description: 'Up to an Additional 40% Off* Offers valid from: 27-03-2025 | Valid to: 01-04-2025',
  },
  {
    image: '/images/blenz.jpg',
    title: 'Blenz Coffee',
    description: 'Enjoy 10% off all pastries at Blenz Coffee.',
  },
  {
    image: '/images/aritzia_large.png',
    title: 'Aritzia',
    description: 'Treat yourself and enjoy 10% off your order!',
  },
];

export function FoodCarousel() {
  const router = useRouter();
  return (
    <div className={style.carouselWrapper}>
      <div className={style.carouselHeader}>
        <h3 className={style.carouselTitle}>Food</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>Find the best deals on food!</h5>
          <h5 className={style.seeMore} onClick={() => router.push('/sales-food')}>see more...</h5>
        </div>
      </div>
      <div className={style.carouselScroll}>
      <EventCard
        image="/images/Dominos.png"
        title="Dominos"
        subtitle="Get a FREE pizza when you buy one at regular price!"
        size="small"
      />
      <EventCard
        image="/images/Popeyes-Logo.png"
        title="Popeyes"
        subtitle="For a limited time only, get 20% off Popeyes wings."
        size="small"
      />
      <EventCard
        image="/images/Tim_Hortons-Logo.wine.png"
        title="Tim Hortons"
        subtitle="Get 20% off on all Craveables at Tim Hortons!"
        size="small"
      />
      <EventCard
        image="/images/freshslice_banner.png"
        title="Freshslice Pizza"
        subtitle="Buy a medium size pizza, Get the second one for free!"
        size="small"
      />
      </div>
    </div>
  );
}

export function ClothingCarousel() {
    return (
      <div className={style.carouselWrapper}>
        <div className={style.carouselHeader}>
          <h3 className={style.carouselTitle}>Clothing</h3>
          <div className={style.subtitleContainer}>
            <h5 className={style.carouselSubtitle}>Hot deals on clothes!</h5>
            <h5 className={style.seeMore}>see more...</h5>
          </div>
        </div>
        <div className={style.carouselScroll}>
        <EventCard
          image="/images/zara_banner.png"
          title="Zara"
          subtitle="Get 20% off Zara's Cotton - Wool Cardigan"
          size="small"
        />
        <EventCard
          image="/images/skims_banner.png"
          title="SKIMS"
          subtitle="Get 37% off SKIMS Cotton Fleece Classic."
          size="small"
        />
        <EventCard
          image="/images/aritzia_banner.png"
          title="Aritzia"
          subtitle="Treat yourself and enjoy 10% off your order!"
          size="small"
        />
        <EventCard
          image="/images/balenciaga_banner.png"
          title="Balenciaga"
          subtitle="Get 50% off Balenciaga Oval Sunglasses."
          size="small"
        />
        </div>
      </div>
    );
  }

  export function MoreWithEvents() {
    return (
      <div className={style.carouselWrapper}>
        <div className={style.carouselHeader}>
          <h3 className={style.carouselTitle}>More with Events</h3>
          <div className={style.subtitleContainer}>
            <h5 className={style.carouselSubtitle}>See what other deals you can get!</h5>
            <h5 className={style.seeMore}>see more...</h5>
          </div>
        </div>
        <div className={style.carouselScroll}>
        <EventCard
          image="/images/weeknd_banner.png"
          title="The Weeknd"
          subtitle="After Hours till Dawn with Playboi Carti."
          size="small"
        />
        <EventCard
          image="/images/tulip_banner.png"
          title="Tulip Festival"
          subtitle="100 varieties of Tulips in Abbotsford."
          size="small"
        />
        <EventCard
          image="/images/nightmarket_banner.png"
          title="Night Market"
          subtitle="Come to Richmond Night Market."
          size="small"
        />
        <EventCard
          image="/images/kitsilano_banner.png"
          title="Kitsilano Comedy Classic"
          subtitle="(Produced By Jokers..."
          size="small"
        />
        </div>
      </div>
    );
  }
  
