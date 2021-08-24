import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

import Header from '../../components/Header/Header'
import prClasses from '../api/classes'
import styles from './prClass.module.scss'

export default function hybridPage () {
    const router = useRouter()
    const [currentClass, setCurrentClass] = useState(null)

    useEffect(() => {
            setCurrentClass(prClasses[router.query.prClass])
    }, [router.query.prClass])

    return (
        <>
        <Header />
            {currentClass && <main className="page__main">
                <div className="container"><h1 className={styles.title}>{currentClass.title}</h1></div>
            </main>}
        </>
    )
}