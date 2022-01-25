<section className={styles.hero}>
    <div className={styles.heroMedia}>
        <Image fluid={image}></Image>
    </div>
    <div className={styles.heroContent}>
        <Link to={path} className={styles.heroCta}>
            <Heading className={styles.title} level={1}>
                {title}
            </Heading>
        </Link>
        <div className={styles.heroBody}>
            <p className={styles.bodyText}>{body}</p>
        </div>
</section>