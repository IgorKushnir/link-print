import { useLayoutEffect, useState } from 'react'
import {useRouter} from 'next/router'

import Header from '../../components/Header/Header'
import ProductsList from '../../components/ProductsList/ProductsList'
import prClasses from '../api/classes'
import GetBonus from '../../components/GetBonus/GetBonus'
import styles from './prClass.module.scss'

export default function PrClassPage () {
    const router = useRouter()
    const [currentClass, setCurrentClass] = useState(null)

    useLayoutEffect(() => {
            setCurrentClass(prClasses[router.query.prClass])
    }, [router.query.prClass])

    return (
        <>
        <Header />
            {currentClass && <main className={styles.main}>
                <div className="container">
                    <h1 className={styles.title}>{currentClass.title}</h1>
                    <div className={styles.infoWrapper}>
                        <div className={styles.infoInnerWrapper}>
                            <p className={styles.subTitle}>{currentClass.subtitle}</p>
                            <button className={styles.button}>Получить консультацию</button>
                        </div>
                        <p className={styles.info}>{currentClass.info}</p>
                    </div>
                    <ProductsList products={currentClass.printers} />
                    </div>
                    <GetBonus />
            </main>}
        </>
    )
}