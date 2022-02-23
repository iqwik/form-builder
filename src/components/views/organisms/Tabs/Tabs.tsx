import React from 'react'
import { Tabs as BootstrapTabs, Tab } from 'react-bootstrap'
import { AppContext } from '@components/providers'
import { getComponent } from '@components/constants/utils'
import { tabs, tabValue } from './Tabs.constants'

import styles from './Tabs.module.scss'

const Tabs: React.FC<{}> = () => {
    const { currentTab, setCurrentTab } = React.useContext(AppContext)

    const renderTabs: React.ReactElement[] = React.useMemo(() => (
        tabs.map(({ title, component }: tabValue, index: number) => (
            <Tab
                className={styles.tabContent} 
                eventKey={title}
                key={`${index}-${title}`}
                title={title}
            >
                {getComponent(component)}
            </Tab>
        ))
    ), [tabs])

    return (
        <div className={styles.Tabs}>
            <BootstrapTabs
                activeKey={currentTab}
                id="controlled-tab-example"
                onSelect={setCurrentTab}
            >
                {renderTabs}
            </BootstrapTabs>
        </div>
    )
}

export default Tabs