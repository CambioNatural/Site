import Image from "next/image";
import SectionDots from "@/components/SectionDots";
import Navbar from "@/components/Navbar";
import SubstackEmbed from "@/components/SubstackEmbed";
import type { HomeContent, ResponsiveCopy } from "@/content/home";
import type { CmsDocument } from "@/lib/cms/schema";
import styles from "./home.module.css";

function Copy({ value }: { value: ResponsiveCopy }) {
  if (!value.mobileText || value.mobileText === value.text) return value.text;
  return <><span className={styles.desktopCopy}>{value.text}</span><span className={styles.mobileCopy}>{value.mobileText}</span></>;
}

export default function HomeLanding({ content, navigation, preview = false }: { content: HomeContent; navigation?: CmsDocument["navigation"]; preview?: boolean }) {
  return (
    <div className={`${styles.page} scroll-navigation-page`}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Navbar navigation={navigation} />
      <SectionDots />
      <main id="main-content" tabIndex={-1}>
        <section data-scroll-section="Introduction" className={styles.hero} aria-labelledby="home-heading">
          <Image unoptimized={preview} className={styles.leaf} src="/images/nature-svg-white.svg" width={458} height={489} alt="" aria-hidden />
          <Image unoptimized={preview} className={styles.yellow} src="/images/yellow-curve.png" width={424} height={446} alt="" aria-hidden />
          <div className={styles.container}>
            <h1 id="home-heading" className={styles.heroHeading}>
              <span className={styles.heroIntro}><Copy value={content.hero.intro} /></span>
              <span className={styles.heroEmphasis}>{content.hero.heading}</span>
            </h1>
            <div className={styles.wordmarkRow}>
              <Image unoptimized={preview} className={styles.wordmark} {...content.hero.wordmark} alt={content.hero.wordmark.alt} width={663} height={106} sizes="(max-width: 767px) 75vw, 663px" />
              <Image unoptimized={preview} className={styles.pinkCircle} src="/images/cn-0104-2.png" width={210} height={210} alt="" aria-hidden sizes="(max-width: 767px) 18vw, 210px" />
            </div>
          </div>
        </section>
        <section data-scroll-section="About" className={`${styles.container} ${styles.about}`} aria-label="About Cambio Natural">
          <p><strong>{content.about.emphasis}</strong>{" "}{content.about.body}</p>
          <Image unoptimized={preview} className={styles.bridge} {...content.about.image} alt={content.about.image.alt} width={431} height={271} sizes="(max-width: 767px) 90vw, 40vw" />
        </section>
        <section data-scroll-section="Initiatives" className={`${styles.container} ${styles.initiatives}`} aria-labelledby="initiatives-heading">
          <h2 id="initiatives-heading" className={styles.sectionHeading}>{content.initiativesHeading}</h2>
          <div className={styles.initiativeGrid}>
            {content.initiatives.map((initiative) => (
              <article key={initiative.id} className={styles.initiative}>
                <Image unoptimized={preview} className={styles.initiativeImage} {...initiative.image} alt={initiative.image.alt} width={200} height={200} sizes="(max-width: 767px) 100px, 200px" />
                <h3>{initiative.title}</h3>
                <p><Copy value={initiative.description} /></p>
              </article>
            ))}
          </div>
        </section>
        <section data-scroll-section="Featured article" className={`${styles.container} ${styles.articleSection}`} aria-labelledby="article-heading">
          <div className={styles.articleCard}>
            <div className={styles.articleText}>
              <p>{content.article.category}</p>
              <h2 id="article-heading">{content.article.title}</h2>
              <a href={content.article.link.href} target="_blank" rel="noopener noreferrer">{content.article.link.label}<span className={styles.srOnly}> (opens in a new tab)</span></a>
            </div>
            <Image unoptimized={preview} className={styles.articleImage} {...content.article.image} alt={content.article.image.alt} width={208} height={155} sizes="(max-width: 767px) 35vw, 208px" />
            <p className={styles.articleExcerpt}><Copy value={content.article.excerpt} /></p>
          </div>
        </section>
        <section data-scroll-section="Newsletter" className={`${styles.container} ${styles.newsletter}`} aria-labelledby="newsletter-heading">
          <div className={styles.newsletterText}>
            <p><Copy value={content.newsletter.intro} /></p>
            <h2 id="newsletter-heading">{content.newsletter.title}</h2>
            <p>{content.newsletter.description}</p>
          </div>
          <div className={styles.newsletterMedia}>
            <Image unoptimized={preview} className={styles.newsletterImage} {...content.newsletter.image} alt={content.newsletter.image.alt} width={398} height={270} sizes="(max-width: 767px) 90vw, 398px" />
            <SubstackEmbed />
          </div>
        </section>
      </main>
      <footer className={styles.footer}><div className={styles.container}>{content.footer}</div></footer>
    </div>
  );
}
