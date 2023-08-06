import Chat from '@/components/Chat/Chat'
import Ranking from '@/components/Ranking/Ranking'
import Rates from '@/components/Rates/Rates'
import styles from './Home.module.scss'
import Playground from '@/components/Playground/Playground'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<Rates />
				<Playground />
			</div>
			<div className={styles.wrapper}>
				<Ranking />
				<Chat />
			</div>
		</main>
	)
}
