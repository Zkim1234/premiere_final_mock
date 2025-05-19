"use client";
import EventCard from "@/ui/FullSizedEventCard/FullSizedEventCard";
import style from "@/app/saved/saved.module.css";
import PromotionList from "@/ui/PromotionList/Promotion-list";
import NavBar from "@/ui/NavBar/NavBar";
import { useRouter } from "next/navigation";

export default function EventPage() {
  const router = useRouter();
  return (
    <div className={style.bodyContainer}>
      <div className={style.headerRow}>
        <h1 className={style.headerTitle}>Saved</h1>
      </div>
      <p className={style.title}>Events</p>
      <img
        src="/images/weeknd_01.png"
        alt="back"
        className={style.bigImg}
        onClick={() => router.push("/post_page")}
      />
      <CarouselComponent />
      <Promotions />
      <NavBar />
    </div>
  );
}

export function CarouselComponent() {
  const router = useRouter();
  return (
    <div className={style.carouselWrapper}>
      <div className={style.carouselHeader}>
        <h3 className={style.carouselTitle}>Upcoming This Month</h3>
        <h5 className={style.carouselSubtitle}>March - April</h5>
      </div>
      <div
        className={style.carouselScroll}
        onClick={() => router.push("/post_page")}
      >
        <EventCard
          image="/images/autoshow_banner.png"
          title="Auto Show"
          subtitle="Vancouver International Auto Show."
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="/images/vancouvertour_banner.png"
          title="Vancouver Tour"
          subtitle="Stanley Park/English Bay/Canada"
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="/images/tourpass_banner.png"
          title="Vancouver Tour Pass"
          subtitle="24 or 48-Hour Hop-On Hop-Off Trolley"
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="/images/pacifichotel_banner.png"
          title="Pan Pacific Hotel"
          subtitle="Get 50% off meeting room rental."
          size="small"
          initialBookmarked={true}
        />
      </div>
      <div className={style.carouselHeader}>
        <h3 className={style.carouselTitle}>Sales</h3>
        <h5 className={style.carouselSubtitle}>March - April</h5>
      </div>
      <div
        className={style.carouselScroll}
        onClick={() => router.push("/post_page")}
      >
        <EventCard
          image="\images\aritzia_banner.png"
          title="Aritzia"
          subtitle="Treat yourself and enjoy 10% off your purchase"
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="\images\blenz.jpg"
          title="Blenz"
          subtitle="Enjoy 10% off All Blenz pastries"
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="\images\plenty.png"
          title="Plenty outlet"
          subtitle="Up to an Additional 40% off"
          size="small"
          initialBookmarked={true}
        />
        <EventCard
          image="\images\Popeyes-Logo.png"
          title="popeyes"
          subtitle="For a limited time, get 20% off Popeyes wings"
          size="small"
          initialBookmarked={true}
        />
      </div>
    </div>
  );
}

export function Promotions() {
  const router = useRouter();
  return (
    <main className={style.wrapper}>
      <div className={style.sectionHeader}>
        <h3 className={style.sectionTitle}>More Sales</h3>
        <div className={style.subtitleContainer}>
          <h5 className={style.carouselSubtitle}>your saved sales</h5>
        </div>
      </div>
      <div
        className={style.promotionListContainer}
        onClick={() => router.push("/sales_page")}
      >
        <PromotionList
          title="Vancouver: Sea to Sky Gondola and Whistler Day Trip"
          image="/images/gondola.png"
          price={214}
          discount={53}
        />

        <PromotionList
          title="Vancouver: Gastown Walking Food Tour"
          image="/images/gastown_foodtour.png"
          price={134.0}
          discount={0}
        />
        <PromotionList
          title="Apple AirPods Pro 2 Wireless Earbuds"
          image="/images/airpods.png"
          price={329}
          discount={59.01}
        />
        <PromotionList
          title="Sony WH-CH720N "
          image="/images/sony_headphones.png"
          price={249.99}
          discount={100}
        />
      </div>
    </main>
  );
}
