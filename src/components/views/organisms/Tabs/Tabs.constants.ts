import { TABS_TITLES } from '@components/constants/utils'
import { ConfigPage, ResultPage } from '@components/views/pages'

export type tabValue = {
    title: string,
    component: React.ComponentType,
}

type tabsValues = Array<tabValue>

export const tabs = <tabsValues>[
    { title: TABS_TITLES.CONFIG, component: ConfigPage },
    { title: TABS_TITLES.RESULT, component: ResultPage },
]
