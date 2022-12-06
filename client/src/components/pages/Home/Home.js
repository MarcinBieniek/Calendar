import styles from './Home.module.scss';

const Home = () => {

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <span className={styles.innerText}>Sidebar</span>
            </aside>

            <main className={styles.content}>
                <span className={styles.innerText}>Content area</span>
            </main>
        </div>
    )
}

export default Home;