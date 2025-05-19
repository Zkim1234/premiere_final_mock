"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderBar from "@/ui/PostHeader/post-header";
import Slideshow from "@/ui/PostSlider/post-slider";
import styles from "./post-page.module.css";
import EventCard from "@/ui/FullSizedEventCard/FullSizedEventCard";
import NavBar from "@/ui/NavBar/NavBar";

const slides = [
  { image: "/images/weeknd_01.png" },
  { image: "/images/weeknd_02.png" },
  { image: "/images/weeknd_03.png" },
];

function PostPage() {
  const handleBack = () => {
    window.history.back();
  };

  return <HeaderBar title="Post" onBack={handleBack} />;
}

function EventDetailsPage() {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };
  return (
    <main className={styles.main}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.eventTitle}>
            The Weeknd: After Hours Til Dawn Tour With Playboi Carti And Mike
            Dean
          </h2>
          <p className={styles.artist}>The Weeknd</p>
        </div>
        <div className={styles.icons}>
          <Image
            src={
              bookmarked
                ? "/bookmarks/saved-bookmark.svg"
                : "/bookmarks/unsaved-bookmark.svg"
            }
            alt="Bookmark"
            width={54}
            height={54}
            onClick={toggleBookmark}
            className={styles.bookmark}
          />
        </div>
      </div>
      <div className={styles.infoGrid}>
        <div>
          <p className={styles.label}>Date</p>
          <p className={styles.value}>
            Tuesday Jul 15
            <br />
            7:00 PM GMT-7
          </p>
        </div>
        <div>
          <p className={styles.label}>Ticket</p>
          <p className={styles.value}>Starts at $99</p>
        </div>
      </div>

      <div className={styles.venue}>
        <p className={styles.label}>Venue</p>
        <p className={styles.value}>
          BC Place
          <br />
          Vancouver, BC
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>About tickets</h3>
        <p className={styles.paragraph}>
          Please note: There is a ticket limit of 8 tickets per person and per
          credit card on this event.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Additional Information</h3>
        <p className={styles.paragraph}>
          The Weeknd will partner with Global Citizen to help drive positive
          change throughout the world. $1 from every ticket sold will be donated
          to support children from vulnerable communities around the world. For
          more information on Global Citizen, visit www.globalcitizen.org.
        </p>
      </div>
    </main>
  );
}

function MoreLikeThis() {
  return (
    <div className={styles.quarterCardsContainer}>
      <div className={styles.sectionHead}>
        <h3 className={styles.titleSection}>More like this...</h3>
      </div>
      <div className={styles.quarterCards}>
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

function LearnMoreButton() {
  const handleClick = () => {
    window.open(
      "https://www.ticketmaster.ca/the-weeknd-tickets/artist/1697014?landing=c&awtrc=true&c=SEM_TMMCONCERTS_ggl_22202241780_172499230537_the%20weeknd%20ticketmaster&GCID=0&gad_source=1&gad_campaignid=22202241780&gbraid=0AAAAAD_KsMK-lR-vG1KBYjGjMUFARLv0z&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfhbZmB3BLGy-21yPddQ3iRIH_ysgusgY0tlI9FSf4hZijwS9Mb02bsaAvt-EALw_wcB&gclsrc=aw.ds",
      "_blank"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button className={styles.nextButton} onClick={handleClick}>
        Visit Ticket Master.com
      </button>
    </div>
  );
}

export default function EventPost() {
  return (
    <div className={styles.bodyContainer}>
      <PostPage />
      <Slideshow slides={slides} />
      <EventDetailsPage />
      <MoreLikeThis />
      <LearnMoreButton />
      <NavBar />
    </div>
  );
}
