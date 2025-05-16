'use client';

import Image from 'next/image';
import HeaderBar from '@/ui/post-header/post-header';
import Slideshow from '@/ui/post-slider/post-slider';
import styles from './post-page.module.css';

const slides = [
  { image: '/images/weeknd_01.png' },
  { image: '/images/weeknd_02.png' },
  { image: '/images/weeknd_03.png' },
];

function PostPage() {
  const handleBack = () => {
    window.history.back();
  };

  return <HeaderBar title="Post" onBack={handleBack} />;
}

function EventDetailsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.eventTitle}>
            The Weeknd: After Hours Til Dawn Tour With Playboi Carti And Mike Dean
          </h2>
          <p className={styles.artist}>The Weeknd</p>
        </div>

        <div className={styles.icons}>
          <Image src="/bookmarks/saved-bookmark.svg" alt="Bookmark" width={54} height={54} />
        </div>
      </div>

      <div className={styles.infoGrid}>
        <div>
          <p className={styles.label}>Date</p>
          <p className={styles.value}>
            Tuesday Jul 15<br />
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
        <p className={styles.value}>BC Place<br />Vancouver, BC</p>
      </div>

      {/* About Tickets */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>About tickets</h3>
        <p className={styles.paragraph}>
          Please note: There is a ticket limit of 8 tickets per person and per credit card on this event.
        </p>
      </div>

      {/* Additional Info */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Additional Information</h3>
        <p className={styles.paragraph}>
          The Weeknd will partner with Global Citizen to help drive positive change throughout the world.
          $1 from every ticket sold will be donated to support children from vulnerable communities around the world.
          For more information on Global Citizen, visit www.globalcitizen.org.
        </p>
      </div>
    </main>
  );
}

export default function EventPost() {
  return (
    <div>
      <PostPage />
      <Slideshow slides={slides} />
      <EventDetailsPage />
    </div>
  );
}
