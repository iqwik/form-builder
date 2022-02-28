import React from 'react'
import { useResultPage } from './ResultPage.hooks'

import styles from './ResultPage.module.scss'

const ResultPage: React.FC<{}> = () => {
    const { title, renderFields, renderButtons } = useResultPage()

    return (
        <>
            <div className={styles.ResultPage}>
                <h2 style={{ textAlign: 'center' }}>{title || 'Result'}</h2>
                {renderFields(styles.Fields)}
                {renderButtons(styles.Buttons)}
            </div>
        </>
    )
}

export default ResultPage
