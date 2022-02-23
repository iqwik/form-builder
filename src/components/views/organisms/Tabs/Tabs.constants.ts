import { ConfigPage, ResultPage } from '@components/views/pages'

export type tabValue = {
    title: string,
    component: React.ComponentType,
}

type tabsValues = Array<tabValue>

export const TABS_TITLES = {
    CONFIG: 'Config',
    RESULT: 'Result',
} as const

export const tabs = <tabsValues>[
    { title: TABS_TITLES.CONFIG, component: ConfigPage },
    { title: TABS_TITLES.RESULT, component: ResultPage },
]