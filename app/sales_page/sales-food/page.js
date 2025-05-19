"use client";
import React, { useState } from "react";
import SalesCard from "@/ui/SalesCard/sales";
import styles from "@/app/sales_page/sales-food/sales-food.module.css";
import NavBar from "@/ui/NavBar/NavBar";
import { useRouter } from "next/navigation";

export default function SalesFood() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const handleCardClick = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className={styles.pageContainer}>
            {copied && (
                <div className={styles.copiedMessage}>
                    Copied to clipboard
                </div>
            )}
            <div className={styles.headerRow}>
                <img src="/blue_Arrow.svg" alt="back" onClick={() => router.back("/sales_page")}/>
                <h1 className={styles.accessibilityTitle}>All Food</h1>
            </div>
           
            <div className={styles.salesCardContainer}>
                <SalesCard
                    image="/images/Dominos.png"
                    alt="Domino's Pizza Logo"
                    brandName="Dominos"
                    text="Get a FREE pizza when you buy one at regular price!"
                    offer="BOGO"
                    onClick={handleCardClick}
                />
            </div>
            <div className={styles.salesCardContainer}>
                <SalesCard
                    image="/images/Popeyes-Logo.png"
                    alt="Popeyes logo"
                    brandName="Popeyes"
                    text="For a limited time only, get 20% off Popeyes wings."
                    offer="20% Off"
                    onClick={handleCardClick}
                />
            </div>
            <div className={styles.salesCardContainer}>
                <SalesCard
                    image="/images/Tim_Hortons-Logo.wine.png"
                    alt="Tim hortons Logo"
                    brandName="Tim Hortons"
                    text="Get 20% off on all Craveables at Tim Hortons!"
                    offer="20% Off"
                    onClick={handleCardClick}
                />
            </div>
            <div className={styles.salesCardContainer}>
                <SalesCard
                    image="/images/Logo-Freshslice-Pizza.jpg"
                    alt="Freshslice Pizza Logo"
                    brandName="Freshslice Pizza"
                    text="Buy a medium size pizza, Get the second one for free!"
                    offer="BOGO"
                    onClick={handleCardClick}
                />
            </div>
            <div className={styles.salesCardContainer}>
                <SalesCard
                    image="/images/blenz.jpg"
                    alt="Blenz Coffee Logo"
                    brandName="Blenz Coffee"
                    text="Enjoy 10% off all pastries at Blenz Coffee"
                    offer="10% Off"
                    onClick={handleCardClick}
                />
            </div>
            <div className={styles.navBar}>
                <NavBar />
            </div>
        </div>
    );
}
